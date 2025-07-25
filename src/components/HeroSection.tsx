import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Smartphone } from "lucide-react";
import heroImage from "@/assets/hero-medical-devices.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/50 to-transparent" />
      
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-2">
              <Badge variant="secondary" className="px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Συμμόρφωση με GDPR & Ιατρικό Απόρρητο
              </Badge>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Πάρτε{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  3x Περισσότερους Ασθενείς
                </span>{" "}
                με Ιστοσελίδα που ΠΡΑΓΜΑΤΙΚΑ Δουλεύει
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Ειδικευόμαστε στη δημιουργία ιστοσελίδων συμμορφωμένων με τον GDPR και 
                την ελληνική νομοθεσία για το ιατρικό απόρρητο, φιλικών προς τα κινητά, 
                που μετατρέπουν τους επισκέπτες σε ασθενείς
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm font-medium">+300 Ιατρικές Ιστοσελίδες</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm font-medium">40% Αύξηση Κρατήσεων</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Mobile-First Design</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="hero-cta" className="group">
                Λάβε Δωρεάν Έλεγχο Ιστοσελίδας
                <CheckCircle className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button variant="outline" size="hero-cta">
                Δες το Portfolio μας
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={heroImage} 
                alt="Επαγγελματικές ιατρικές ιστοσελίδες σε πολλαπλές συσκευές"
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-card shadow-medium rounded-lg p-4 animate-fade-in">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                <span className="text-sm font-medium">Live & Ενεργή</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card shadow-medium rounded-lg p-4 animate-fade-in">
              <div className="text-sm">
                <div className="font-semibold text-primary">+40%</div>
                <div className="text-muted-foreground">Νέες Κρατήσεις</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;