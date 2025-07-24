import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Shield, Users, Award, TrendingUp } from "lucide-react";

const TrustIndicators = () => {
  const stats = [
    {
      icon: Users,
      number: "300+",
      label: "Ιατρικές Πρακτικές",
      description: "Έχουμε εξυπηρετήσει"
    },
    {
      icon: Shield,
      number: "100%",
      label: "GDPR Συμμόρφωση",
      description: "Όλες οι ιστοσελίδες μας"
    },
    {
      icon: TrendingUp,
      number: "40%",
      label: "Αύξηση Κρατήσεων",
      description: "Κατά μέσο όρο"
    },
    {
      icon: Award,
      number: "8+",
      label: "Χρόνια Εμπειρίας",
      description: "Στον ιατρικό κλάδο"
    }
  ];

  const clientLogos = [
    "Κλινική Αθηνών", "Ιατρικό Κέντρο Πατρών", "Οδοντιατρική Κλινική Elite",
    "Καρδιολογικό Κέντρο", "Παιδιατρική Κλινική", "Δερματολογικό Ινστιτούτο"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Trust badges */}
        <div className="text-center mb-12">
          <div className="flex justify-center gap-4 mb-8">
            <Badge variant="secondary" className="px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              GDPR Συμμόρφωση
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              Πιστοποιημένοι Σχεδιαστές
            </Badge>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-200 border-0 shadow-soft">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-light mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </Card>
          ))}
        </div>

        {/* Client logos */}
        <div className="text-center">
          <p className="text-muted-foreground mb-8">Εμπιστεύονται τις υπηρεσίες μας:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clientLogos.map((client, index) => (
              <div key={index} className="bg-card rounded-lg p-4 shadow-soft border text-center">
                <div className="text-sm font-medium text-muted-foreground">{client}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;