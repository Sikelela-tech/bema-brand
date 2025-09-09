import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Target, 
  Users, 
  Lightbulb, 
  ArrowRight, 
  Rocket, 
  Palette, 
  Handshake,
  TrendingUp,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
  const whatMakesUsDifferent = [
    {
      icon: Target,
      title: "Vision",
      description: "Where you want your brand to go"
    },
    {
      icon: Users,
      title: "Challenges", 
      description: "What's holding you back"
    },
    {
      icon: Lightbulb,
      title: "Audience",
      description: "Who you're speaking to"
    }
  ];

  const trustStats = [
    {
      icon: Rocket,
      number: "20+",
      label: "Brands Elevated",
      description: "Successfully transformed brands"
    },
    {
      icon: Palette,
      number: "100+",
      label: "Campaigns Launched",
      description: "Creative campaigns delivered"
    },
    {
      icon: Handshake,
      label: "Driven by",
      description: "Creativity, Strategy & Integrity"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-accent px-4 py-2 rounded-full text-accent-foreground text-sm font-medium mb-6">
                <span>📖</span>
                <span>About Us</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                About Us
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                At BEMA (Brand Elevate Marketing Agency), we believe every brand has a story worth telling. What makes us special is how we combine creativity, strategy, and technology to bring that story to life.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Who We Are
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  We're not just marketers — we're storytellers, designers, and growth partners. From social media marketing and paid ads to branding, web design, and graphic solutions, we tailor everything to help businesses not just stand out, but create real impact in their industries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  What Makes Us Different
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Unlike typical agencies, we don't deliver one-size-fits-all services. We take the time to understand each client's:
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {whatMakesUsDifferent.map((item, index) => (
                  <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-medium transition-all duration-300">
                        <item.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  With these insights, we craft strategies that fuel growth, build trust, and elevate your brand.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Our mission is simple: to help ambitious businesses grow with bold ideas, creative storytelling, and strategies that convert. Whether you're a startup finding your identity or an established business ready to scale, BEMA is your partner in building a brand that lasts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Builder Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Our Impact
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Numbers tell a story, but our commitment to creativity, strategy, and integrity tells the whole story.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {trustStats.map((stat, index) => (
                  <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-medium transition-all duration-300">
                        <stat.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      {stat.number && (
                        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                          {stat.number}
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {stat.label}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {stat.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Ready to Tell Your Brand's Story?
              </h2>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Let's work together to elevate your brand and create the impact you've been dreaming of.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  asChild
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 transition-all duration-300 text-lg px-8 py-4 shadow-soft"
                >
                  <Link to="/contact">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 text-lg px-8 py-4"
                >
                  <Link to="/team">Meet Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
