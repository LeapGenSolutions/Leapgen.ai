import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShoppingCart, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const CompleteRetailSolution = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/use-cases" className="hover:text-primary">Use Cases</Link>
            <span>/</span>
            <Link to="/use-cases/retail" className="hover:text-primary">Retail</Link>
            <span>/</span>
            <span>Complete Solution</span>
          </nav>
          
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Complete Retail Transformation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Combine Data Coffee and Surround AI for end-to-end retail intelligence - from unified data preparation to AI-powered customer insights and business optimization.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact?product=complete-solution&industry=retail">Request Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/resources/surroundai-roi-calculator">Calculate ROI</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready for Complete Retail Intelligence?</h2>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact?product=complete-solution&industry=retail">
                Schedule Demo <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/use-cases/retail">Back to Retail</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default CompleteRetailSolution;