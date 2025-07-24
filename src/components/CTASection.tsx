import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Clock, 
  Users, 
  ArrowRight, 
  Star,
  Phone
} from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-0 shadow-strong bg-gradient-to-br from-card to-primary-light/10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-accent-light/20" />
            
            <div className="relative z-10 p-8 lg:p-12">
              <div className="text-center mb-8">
                <Badge variant="secondary" className="mb-4">
                  <Star className="w-4 h-4 mr-2" />
                  Περιορισμένη Προσφορά
                </Badge>
                
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Ξεκινήστε με Δωρεάν{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Έλεγχο Ιστοσελίδας
                  </span>
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8">
                  Θα αναλύσουμε την τρέχουσα ιστοσελίδα σας και θα σας δώσουμε 
                  συγκεκριμένες προτάσεις για βελτίωση - εντελώς δωρεάν!
                </p>
              </div>

              {/* What you get */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Τι περιλαμβάνει:</h3>
                  <ul className="space-y-3">
                    {[
                      "Ανάλυση UX/UI της τρέχουσας ιστοσελίδας",
                      "Έλεγχος GDPR συμμόρφωσης & ιατρικού απορρήτου",
                      "Ανάλυση ταχύτητας και SEO",
                      "Προτάσεις για αύξηση μετατροπών",
                      "Roadmap βελτιώσεων"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  {/* Urgency */}
                  <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-warning" />
                      <span className="font-semibold text-warning">Περιορισμένος Χρόνος</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Διαθέσιμο μόνο για τις πρώτες 20 αιτήσεις αυτόν τον μήνα
                    </p>
                  </div>

                  {/* Social proof */}
                  <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-success" />
                      <span className="font-semibold text-success">15 Γιατροί</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Έλαβαν δωρεάν έλεγχο αυτή την εβδομάδα
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="text-center space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="hero-cta" className="group">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Λάβε Δωρεάν Έλεγχο Τώρα
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <Button variant="outline" size="hero-cta" className="group">
                    <Phone className="w-5 h-5 mr-2" />
                    Κάλεσε Τώρα: 210-123-4567
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Χωρίς δέσμευση • Αποτελέσματα σε 24 ώρες • 100% δωρεάν
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTASection;