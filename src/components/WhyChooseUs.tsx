import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  TrendingUp, 
  Shield, 
  Smartphone, 
  Zap, 
  HeartHandshake 
} from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Εξειδίκευση στον Ιατρικό Κλάδο",
      description: "Κατανοούμε τις απαιτήσεις συμμόρφωσης GDPR στον ιατρικό κλάδο και τις ανάγκες των ασθενών",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Αποδεδειγμένα Αποτελέσματα",
      description: "Οι ιστοσελίδες μας αυξάνουν τις online κρατήσεις κατά μέσο όρο 40%",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Shield,
      title: "GDPR Συμμόρφωση",
      description: "Όλες οι ιστοσελίδες δημιουργούνται με πρότυπα ασφαλείας healthcare και συμμόρφωση GDPR",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Βελτιστοποιημένες για ασθενείς που αναζητούν υπηρεσίες από κινητές συσκευές",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: Zap,
      title: "Γρήγορη Φόρτωση",
      description: "Χρόνοι φόρτωσης κάτω από 3 δευτερόλεπτα για μείωση του bounce rate",
      gradient: "from-yellow-500 to-yellow-600"
    },
    {
      icon: HeartHandshake,
      title: "Συνεχής Υποστήριξη",
      description: "24/7 τεχνική υποστήριξη και συντήρηση για αδιάλειπτη λειτουργία",
      gradient: "from-red-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Γιατί MedWeb Pro
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Γιατί να Επιλέξετε{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Εμάς
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Συνδυάζουμε βαθιά κατανόηση του ιατρικού κλάδου με σύγχρονες τεχνολογίες 
            για να δημιουργήσουμε ιστοσελίδες που φέρνουν αποτελέσματα
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden group hover:shadow-strong transition-all duration-300 border-0 shadow-soft"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-light/0 to-accent-light/0 group-hover:from-primary-light/20 group-hover:to-accent-light/20 transition-all duration-300" />
              
              <CardHeader className="relative z-10">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${benefit.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 bg-gradient-primary rounded-2xl p-8 lg:p-12 text-primary-foreground">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">300+</div>
              <div className="text-primary-light">Ικανοποιημένοι Πελάτες</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">40%</div>
              <div className="text-primary-light">Αύξηση Κρατήσεων</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">8+</div>
              <div className="text-primary-light">Χρόνια Εμπειρίας</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;