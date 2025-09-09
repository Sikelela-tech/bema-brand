import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import kamogeloImage from "@/assets/Kamogelo_C_Skoon.png";
import tlotloImage from "@/assets/Tlotlo_Mogwera.png";
import terenceImage from "@/assets/Terence_Makanyane.png";

const Team = () => {
  const teamMembers = [
    {
      name: "Kamogelo Climent Skoon",
      role: "Founder & Creative Director",
      bio: "Passionate about turning ideas into brands that last, Kamogelo leads BEMA with a sharp eye for design, strategy, and innovation. He specializes in Graphic Design, Website Solutions, Branding, and Email Marketing, while driving the overall vision and growth of the agency. His mix of creativity and business insight ensures every client gets more than just marketing — they get a brand built to make an impact.",
      image: kamogeloImage
    },
    {
      name: "Tlotlo Mogwera", 
      role: "Social Media & Paid Ads Specialist",
      bio: "Tlotlo is the energy behind BEMA's digital campaigns. With a deep understanding of social media trends, content strategy, and advertising, he helps businesses connect with their audiences in meaningful ways. His creative ideas and data-driven approach bring clients both engagement and results.",
      image: tlotloImage
    },
    {
      name: "Terence Makanyane",
      role: "Strategy & Growth Consultant", 
      bio: "Terence focuses on the bigger picture. From SEO and Influencer Marketing to high-level consultations, he helps clients build sustainable growth strategies. With his ability to blend creativity and strategy, Terence ensures brands don't just look good but also scale effectively.",
      image: terenceImage
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Meet the Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Behind every campaign and brand story at BEMA is a team of passionate creators, 
              strategists, and problem-solvers dedicated to helping businesses grow.
            </p>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-6 relative overflow-hidden rounded-2xl">
                    <img
                      src={member.image}
                      alt={`${member.name} headshot`}
                      className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-4 text-lg">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              We're more than just a marketing agency — we're a team invested in your success.
            </h2>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 hover:shadow-strong transition-all duration-300 text-lg px-8 py-6"
            >
              Work With Us
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;