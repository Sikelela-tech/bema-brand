import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "They completely transformed our digital presence. Within 3 months, our sales increased by 45%.",
      client: "Sarah Johnson",
      company: "TechStart Solutions",
      rating: 5
    },
    {
      text: "Working with BEMA was seamless. They understood our vision and delivered beyond expectations.",
      client: "Michael Chen",
      company: "Urban Fashion Co.",
      rating: 5
    },
    {
      text: "The ROI on our marketing campaigns has never been better. BEMA knows what they're doing.",
      client: "Emma Rodriguez",
      company: "GreenLife Organics",
      rating: 5
    }
  ];

  const clientLogos = [
    "TechStart", "Urban Fashion", "GreenLife", "Innovate", "Digital Pro", "NextGen"
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Brands That Dare to Grow
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about working with BEMA.
          </p>
        </div>

        {/* Client Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16 opacity-60">
          {clientLogos.map((logo, index) => (
            <div key={index} className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors duration-300">
              {logo}
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 hover:shadow-medium transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
                
                <blockquote className="text-foreground text-lg leading-relaxed mb-6">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">
                    {testimonial.client}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 bg-card rounded-2xl p-8 shadow-soft">
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "1200+", label: "Projects Delivered" },
            { number: "98%", label: "Client Retention" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;