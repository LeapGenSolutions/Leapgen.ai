import React from 'react';
import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { EnhancedCard } from '@/components/ui/enhanced-card';
import { AnimatedBackground } from '@/components/ui/animated-background';
import { FloatingElements } from '@/components/ui/floating-elements';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Building2,
  Shield,
  Target
} from 'lucide-react';

const CustomerSuccess = () => {
  const stats = [
    {
      value: "50-80%",
      label: "Efficiency Gains",
      description: "Average improvement across all implementations"
    },
    {
      value: "3",
      label: "Industry Leaders",
      description: "Transformed with our solutions"
    },
    {
      value: "Proven",
      label: "ROI",
      description: "Measurable return on investment"
    }
  ];

  const successStories = [
    {
      title: "Healthcare Sales Transformation",
      company: "Leading Healthcare Organization",
      industry: "Healthcare",
      size: "Large Enterprise",
      description: "Revolutionized sales operations with AI-powered automation, reducing response times and boosting productivity.",
      results: [
        { metric: "50%", label: "Response Time Reduction" },
        { metric: "40%", label: "Sales Productivity Boost" },
        { metric: "Increased", label: "Conversion Rate" },
        { metric: "Instant", label: "Real-time Insights" }
      ],
      challenge: "Manual workflows, fragmented data, and delayed customer response times",
      solution: "AI Sales Assistant with CRM integration and real-time insights",
      link: "/customer-success/healthcare-sales-transformation",
      product: "SurroundAI",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Government Data Modernization", 
      company: "Leading Government Agency",
      industry: "Government/Public Sector",
      size: "Medium Enterprise",
      description: "Transformed data processing and citizen services with secure AI-powered document automation.",
      results: [
        { metric: "80%", label: "Document Review Time" },
        { metric: "60%", label: "Citizen Response Speed" },
        { metric: "Enhanced", label: "Compliance" },
        { metric: "Real-time", label: "Decision Making" }
      ],
      challenge: "Processing vast unstructured data while ensuring strict compliance",
      solution: "Azure-based AI with automated document processing and virtual assistants",
      link: "/customer-success/government-data-modernization",
      product: "DataCoffee",
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      title: "Medical Documentation Revolution",
      company: "Healthcare Practice",
      industry: "Healthcare Industry", 
      size: "Small Business",
      description: "Eliminated documentation burden with ambient AI transcription, reducing documentation time while enhancing patient care.",
      results: [
        { metric: "50%", label: "Documentation Time" },
        { metric: "Increased", label: "Patient Engagement" },
        { metric: "Enhanced", label: "HIPAA Compliance" },
        { metric: "Reduced", label: "Physician Burnout" }
      ],
      challenge: "Healthcare professionals spending 30-40% of time on documentation",
      solution: "Ambient AI transcription with seamless EHR integration",
      link: "/customer-success/medical-documentation-revolution",
      product: "Seismic",
      gradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground variant="mesh" theme="government" className="absolute inset-0" />
      <FloatingElements count={8} variant="mixed" theme="government" className="absolute inset-0" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-hero mb-6 gradient-text-government">
              Customer Success Stories
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover how organizations across industries are transforming their operations with LeapGen.AI solutions, achieving measurable results and driving innovation.
            </p>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <EnhancedCard
                  key={index}
                  variant="glass"
                  className="text-center p-6"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="text-4xl font-bold gradient-text-government mb-2">{stat.value}</div>
                    <div className="text-lg font-semibold mb-1">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </motion.div>
                </EnhancedCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              >
                <EnhancedCard
                  variant="gradient"
                  theme={story.product === 'SurroundAI' ? 'surroundai' : story.product === 'DataCoffee' ? 'datacoffee' : 'seismic'}
                  className="overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Left Column - Story Info */}
                      <div className="lg:w-2/3">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">
                            {story.product}
                          </span>
                          <span className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">
                            {story.size}
                          </span>
                        </div>
                        
                        <h2 className="text-section-header text-white mb-4">{story.title}</h2>
                        <p className="text-lg text-white/80 mb-6">{story.description}</p>
                        
                        <div className="text-sm text-white/70 mb-6">
                          <span className="font-medium">{story.company}</span> • {story.industry}
                        </div>

                        {/* Results Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          {story.results.map((result, idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-2xl font-bold text-white mb-1">{result.metric}</div>
                              <div className="text-sm text-white/70">{result.label}</div>
                            </div>
                          ))}
                        </div>

                        {/* Challenge & Solution */}
                        <div className="space-y-4 mb-6">
                          <div>
                            <h4 className="font-semibold mb-2 flex items-center gap-2 text-white">
                              <Target className="w-4 h-4" />
                              Challenge
                            </h4>
                            <p className="text-white/80 text-sm">{story.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 flex items-center gap-2 text-white">
                              <CheckCircle className="w-4 h-4" />
                              Solution
                            </h4>
                            <p className="text-white/80 text-sm">{story.solution}</p>
                          </div>
                        </div>

                        <GradientButton 
                          variant="secondary" 
                          asChild 
                          className="group bg-white/20 hover:bg-white/30 text-white border-white/30"
                        >
                          <Link to={story.link} className="flex items-center gap-2">
                            Read Full Case Study 
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </GradientButton>
                      </div>
                    </div>
                  </div>
                </EnhancedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how LeapGen.AI can transform your organization with measurable results and proven ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton variant="government" size="lg" asChild>
              <Link to="/contact?type=demo" className="flex items-center gap-2">
                Schedule Your Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </GradientButton>
            <GradientButton variant="secondary" size="lg" asChild>
              <Link to="/resources/roi-calculator">Calculate Your ROI</Link>
            </GradientButton>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default CustomerSuccess;