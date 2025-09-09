import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MessageCircle, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactOptions = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@bema.com",
      description: "(We respond within 24 hours — your message won't get lost in the inbox)",
      href: "mailto:hello@bema.com",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+27 XXX XXX XXX",
      description: "(Let's talk — sometimes a quick call is all it takes to spark big ideas)",
      href: "tel:+27xxxxxxxxx",
      action: "Call Now"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Us",
      value: "Chat with us directly",
      description: "(Fast and friendly — chat with us directly in real time)",
      href: "https://wa.me/27xxxxxxxxx",
      action: "Start Chat"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              {/* Header */}
              <div className="mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Let's Create Something{" "}
                  <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
                    Great Together
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  At BEMA, every message matters. Whether you have a quick question or a big project in mind, we're here to listen, collaborate, and help you grow.
                </p>
              </div>

              {/* Contact Options */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {contactOptions.map((option, index) => (
                  <Card key={index} className="border-border/50 hover:shadow-medium transition-all duration-300 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <option.icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {option.title}
                      </h3>
                      
                      <div className="text-lg font-semibold text-primary mb-2">
                        {option.value}
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                        {option.description}
                      </p>
                      
                      <Button 
                        asChild
                        variant="outline" 
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full"
                      >
                        <a href={option.href} target={option.href.startsWith('http') ? '_blank' : undefined}>
                          {option.action}
                          {option.href.startsWith('http') && <ExternalLink className="ml-2 h-4 w-4" />}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Extra CTA */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 mb-16">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Prefer a quick form?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Tell us what you need, and we'll get back with a tailored response
                </p>
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-primary hover:shadow-medium transition-all duration-300"
                >
                  <a href="#" target="_blank">
                    <span className="mr-2">👉</span>
                    Fill Out Our Quick Project Form
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>

              {/* Trust Builder */}
              <div className="bg-gradient-primary rounded-2xl p-8 text-center">
                <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto">
                  We know choosing the right agency is a big decision. That's why we listen first, act with care, and keep you in the loop at every step. Your vision, combined with our expertise, is where real impact begins.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;