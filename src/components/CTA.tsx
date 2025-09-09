import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 bg-white rounded-full opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-8">
            <Sparkles className="h-4 w-4" />
            <span>Ready to Transform Your Brand?</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to take your brand to the next level?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Let's create something unforgettable together. Your success story starts with a single conversation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 transition-all duration-300 text-lg px-8 py-4 shadow-soft"
            >
              <Link to="/contact">
                Start a Project Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 text-lg px-8 py-4"
            >
              <Link to="/contact">Schedule a Free Consultation</Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/80 mb-4">
              Or reach out directly:
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/90">
              <a href="mailto:hello@bema.com" className="hover:text-white transition-colors duration-300">
                📧 hello@bema.com
              </a>
              <a href="tel:+27123456789" className="hover:text-white transition-colors duration-300">
                📞 +27 123 456 7890
              </a>
              <span>📍 Cape Town, South Africa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;