import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Share2, 
  Palette, 
  Code, 
  Search,
  ArrowRight,
  TrendingUp
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Share2,
      title: "Social Media Marketing & Ads",
      description: "Connect with your audience and drive growth through powerful campaigns that convert."
    },
    {
      icon: Palette,
      title: "Branding & Graphic Design",
      description: "Craft identities and visuals that make your brand unforgettable and stand out."
    },
    {
      icon: Code,
      title: "Web Design & Development",
      description: "Build sleek, responsive websites designed to engage visitors and convert them into customers."
    },
    {
      icon: Search,
      title: "SEO & Content Marketing",
      description: "Boost visibility, rank higher on search engines, and attract the right customers to your business."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What We Do
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            At BEMA, we combine creativity, strategy, and technology to help your brand thrive in today's competitive landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-border/50 hover:border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-300">
                    <service.icon className="h-8 w-8 text-accent-foreground group-hover:text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-4"
          >
            <span className="mr-2">👉</span>
            Explore All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Process Section */}
        <div className="mt-20 pt-20 border-t border-border">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Proven Process
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a strategic approach to ensure your success at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Strategy & Discovery",
                description: "We dive deep into your business goals, target audience, and competitive landscape."
              },
              {
                step: "02", 
                title: "Design & Development",
                description: "Our team creates compelling campaigns and experiences tailored to your brand."
              },
              {
                step: "03",
                title: "Launch & Optimize",
                description: "We execute your campaigns and continuously optimize for maximum performance."
              }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 group-hover:shadow-medium transition-all duration-300">
                  {process.step}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">
                  {process.title}
                </h4>
                <p className="text-muted-foreground">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;