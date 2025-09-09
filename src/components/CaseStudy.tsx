import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudy = () => {
  const results = [
    {
      icon: TrendingUp,
      metric: "220%",
      description: "increase in engagement"
    },
    {
      icon: ShoppingBag,
      metric: "35%",
      description: "boost in online sales"
    },
    {
      icon: Users,
      metric: "3x",
      description: "brand awareness growth"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-accent px-4 py-2 rounded-full text-accent-foreground text-sm font-medium mb-6">
                <span>💼</span>
                <span>Case Study</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                How We Make an Impact
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <span className="font-semibold text-foreground">Client:</span> XYZ Clothing Brand
                </div>
                <div>
                  <span className="font-semibold text-foreground">Challenge:</span> Low online engagement and inconsistent brand identity across all platforms.
                </div>
                <div>
                  <span className="font-semibold text-foreground">Solution:</span> Complete rebrand, targeted Instagram ad campaigns, and strategic influencer partnerships.
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6 mb-8">
              <h3 className="text-xl font-bold text-foreground">Results:</h3>
              
              <div className="grid gap-4">
                {results.map((result, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-accent/30 rounded-xl border border-accent">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <result.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{result.metric}</div>
                      <div className="text-muted-foreground text-sm">{result.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Link to="/contact">
                <span className="mr-2">👉</span>
                See More Success Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <Card className="bg-gradient-subtle border-border/50 overflow-hidden">
              <CardContent className="p-0">
                {/* Mock Dashboard */}
                <div className="bg-card p-6 border-b border-border">
                  <h4 className="font-semibold text-foreground mb-4">Campaign Performance</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Instagram Reach</span>
                      <span className="font-semibold text-primary">2.4M</span>
                    </div>
                    <div className="w-full bg-accent rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6 border-b border-border">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Conversion Rate</span>
                      <span className="font-semibold text-primary">12.8%</span>
                    </div>
                    <div className="w-full bg-accent rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Brand Mentions</span>
                      <span className="font-semibold text-primary">+340%</span>
                    </div>
                    <div className="w-full bg-accent rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-light rounded-full opacity-30 animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;