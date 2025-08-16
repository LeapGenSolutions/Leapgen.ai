import type { Handler } from '@netlify/functions'

const FALLBACK_MAKE_WEBHOOK_URL = 'https://hook.us2.make.com/esonrv674fe7exxmtxrjy9unqx8ifut5'

export const handler: Handler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: '',
    }
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  try {
    // Prefer env var, fallback to provided webhook URL
    const makeWebhookUrl = (process.env.MAKE_WEBHOOK_URL && process.env.MAKE_WEBHOOK_URL.trim()) || FALLBACK_MAKE_WEBHOOK_URL

    // Parse the incoming request body
    const body = JSON.parse(event.body || '{}')

    // Add server-side metadata
    const requestId = crypto.randomUUID()
    const webhookPayload = {
      ...body,
      serverTimestamp: new Date().toISOString(),
      requestId,
      userAgent: event.headers['user-agent'],
      referer: event.headers['referer'] || event.headers['referrer'],
    }

    // Forward to Make.com webhook
    const response = await fetch(makeWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookPayload),
    })

    if (!response.ok) {
      console.error('Make.com webhook failed:', response.status, response.statusText)
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ error: 'Webhook submission failed' }),
      }
    }

    // Return success response
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ok: true,
        requestId,
        message: 'Form submitted successfully',
      }),
    }
  } catch (error) {
    console.error('Webhook proxy error:', error)
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ error: 'Internal server error' }),
    }
  }
}
