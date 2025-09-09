import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Strategy First",
      description: "Every campaign starts with a clear strategy and measurable goals."
    },
    {
      icon: Lightbulb,
      title: "Creative Excellence",
      description: "We blend creativity with data to produce campaigns that stand out."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "Your success is our success. We work as an extension of your team."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-accent px-4 py-2 rounded-full text-accent-foreground text-sm font-medium mb-6">
              <span>🚀</span>
              <span>About BEMA</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're a team of strategists, designers, and storytellers who believe every brand has a story worth telling. Our mission is simple: to turn your story into influence, impact, and growth.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded in 2018, BEMA has grown from a small creative studio to a full-service marketing agency that partners with ambitious brands to create meaningful connections with their audiences.
            </p>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Link to="/team">
                <span className="mr-2">👉</span>
                Meet the Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Right Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <Card key={index} className="border-border/50 hover:shadow-medium transition-all duration-300 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Team by the Numbers
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A diverse team of experts passionate about driving your success.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "25+", label: "Team Members", description: "Across strategy, design, and development" },
              { number: "8", label: "Years Experience", description: "Average team experience in marketing" },
              { number: "15+", label: "Certifications", description: "Google, Facebook, and industry certifications" },
              { number: "3", label: "Global Offices", description: "Serving clients worldwide" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;