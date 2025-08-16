import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Enhanced Color System
				emerald: {
					deep: 'hsl(var(--emerald-deep))',
					bright: 'hsl(var(--emerald-bright))'
				},
				coral: {
					warm: 'hsl(var(--coral-warm))'
				},
				cyan: {
					electric: 'hsl(var(--cyan-electric))'
				},
				amber: {
					rich: 'hsl(var(--amber-rich))'
				},
				gold: {
					premium: 'hsl(var(--gold-premium))'
				},
				orange: {
					vibrant: 'hsl(var(--orange-vibrant))'
				},
				// Product Colors
				surroundai: {
					primary: 'hsl(var(--surroundai-primary))',
					secondary: 'hsl(var(--surroundai-secondary))'
				},
				datacoffee: {
					primary: 'hsl(var(--datacoffee-primary))',
					secondary: 'hsl(var(--datacoffee-secondary))'
				},
				seismic: {
					primary: 'hsl(var(--seismic-primary))',
					secondary: 'hsl(var(--seismic-secondary))'
				},
				// Industry Colors
				finance: {
					primary: 'hsl(var(--finance-primary))',
					secondary: 'hsl(var(--finance-secondary))'
				},
				healthcare: {
					primary: 'hsl(var(--healthcare-primary))',
					secondary: 'hsl(var(--healthcare-secondary))'
				},
				government: {
					primary: 'hsl(var(--government-primary))',
					secondary: 'hsl(var(--government-secondary))'
				},
				retail: {
					primary: 'hsl(var(--retail-primary))',
					secondary: 'hsl(var(--retail-secondary))'
				}
			},
			fontFamily: {
				'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
				'serif': ['Playfair Display', 'Georgia', 'serif'],
				'mono': ['JetBrains Mono', 'Monaco', 'Cascadia Code', 'Segoe UI Mono', 'monospace'],
				'display': ['Playfair Display', 'Georgia', 'serif']
			},
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1rem' }],
				'sm': ['0.875rem', { lineHeight: '1.25rem' }],
				'base': ['1rem', { lineHeight: '1.5rem' }],
				'lg': ['1.125rem', { lineHeight: '1.75rem' }],
				'xl': ['1.25rem', { lineHeight: '1.75rem' }],
				'2xl': ['1.5rem', { lineHeight: '2rem' }],
				'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
				'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
				'5xl': ['3rem', { lineHeight: '1.2' }],
				'6xl': ['3.75rem', { lineHeight: '1.1' }],
				'7xl': ['4.5rem', { lineHeight: '1.1' }],
				'8xl': ['6rem', { lineHeight: '1' }],
				'9xl': ['8rem', { lineHeight: '1' }],
				'hero': ['clamp(2.5rem, 5vw, 6rem)', { lineHeight: '1.1' }],
				'display': ['clamp(2rem, 4vw, 4.5rem)', { lineHeight: '1.2' }]
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-surroundai': 'var(--gradient-surroundai)',
				'gradient-datacoffee': 'var(--gradient-datacoffee)',
				'gradient-seismic': 'var(--gradient-seismic)',
				'gradient-finance': 'var(--gradient-finance)',
				'gradient-healthcare': 'var(--gradient-healthcare)',
				'gradient-government': 'var(--gradient-government)',
				'gradient-retail': 'var(--gradient-retail)',
				'gradient-mesh': 'var(--gradient-mesh)',
				'gradient-animated': 'var(--gradient-animated)',
				'gradient-card-subtle': 'var(--gradient-card-subtle)',
				'gradient-glass': 'var(--gradient-glass)',
				'gradient-border': 'var(--gradient-border)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
