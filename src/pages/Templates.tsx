import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart,
  Smile,
  Brain,
  Eye,
  Baby,
  Stethoscope,
  ExternalLink
} from "lucide-react";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

const Templates = () => {
  const templates = [
    {
      id: "general-practice",
      title: "Γενική Ιατρική",
      specialty: "Γενικός Ιατρός",
      icon: Stethoscope,
      image: "/api/placeholder/600/400",
      description: "Πλήρως λειτουργικό template για γενικούς ιατρούς με ενσωματωμένο σύστημα κρατήσεων",
      features: [
        "Online Κρατήσεις",
        "Ιστορικό Ασθενή",
        "Συνταγογράφηση",
        "Εργαστηριακά Αποτελέσματα"
      ],
      color: "from-blue-500 to-blue-600",
      route: "/template/general-practice"
    },
    {
      id: "cardiology",
      title: "Καρδιολογία",
      specialty: "Καρδιολόγος",
      icon: Heart,
      image: "/api/placeholder/600/400",
      description: "Ειδικά σχεδιασμένο για καρδιολόγους με έμφαση στην εμπιστοσύνη",
      features: [
        "Καρδιολογικός Έλεγχος",
        "Holter Monitoring",
        "Επείγουσα Επικοινωνία",
        "Συμβουλές Υγείας"
      ],
      color: "from-red-500 to-red-600",
      route: "/template/cardiology"
    },
    {
      id: "dental",
      title: "Οδοντιατρική",
      specialty: "Οδοντίατρος",
      icon: Smile,
      image: "/api/placeholder/600/400",
      description: "Ειδικά σχεδιασμένο για οδοντιατρικά ιατρεία με gallery εργασιών",
      features: [
        "Πριν/Μετά Gallery",
        "Τιμοκατάλογος",
        "3D Προσομοιώσεις",
        "Οδοντιατρικό Plan"
      ],
      color: "from-green-500 to-green-600",
      route: "/template/dental"
    },
    {
      id: "neurology",
      title: "Νευρολογία",
      specialty: "Νευρολόγος",
      icon: Brain,
      image: "/api/placeholder/600/400",
      description: "Σύγχρονο template για νευρολόγους με εργαλεία διάγνωσης",
      features: [
        "Neurological Tests",
        "MRI Integration",
        "Cognitive Assessment",
        "Treatment Plans"
      ],
      color: "from-purple-500 to-purple-600",
      route: "/template/neurology"
    },
    {
      id: "ophthalmology",
      title: "Οφθαλμολογία",
      specialty: "Οφθαλμίατρος",
      icon: Eye,
      image: "/api/placeholder/600/400",
      description: "Template για οφθαλμιάτρους με εργαλεία οπτικής εξέτασης",
      features: [
        "Όραση Tests",
        "Retinal Imaging",
        "Contact Lens Fitting",
        "Surgery Planning"
      ],
      color: "from-cyan-500 to-cyan-600",
      route: "/template/ophthalmology"
    },
    {
      id: "pediatrics",
      title: "Παιδιατρική",
      specialty: "Παιδίατρος",
      icon: Baby,
      image: "/api/placeholder/600/400",
      description: "Φιλικό προς παιδιά template με παιχνιδιάρικα στοιχεία",
      features: [
        "Growth Charts",
        "Vaccination Schedule",
        "Parent Portal",
        "Child-Friendly UI"
      ],
      color: "from-pink-500 to-pink-600",
      route: "/template/pediatrics"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavigationBar />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Templates Portfolio
            </Badge>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6">
              Παραδείγματα{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Ιατρικών
              </span>{" "}
              Templates
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Εξερευνήστε τα έτοιμα templates μας για διαφορετικές ιατρικές ειδικότητες. 
              Κάθε template είναι πλήρως προσαρμόσιμο στις ανάγκες της πρακτικής σας.
            </p>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <Card 
                key={template.id} 
                className="group relative overflow-hidden transition-all duration-300 hover:shadow-strong border-0 shadow-soft"
              >
                {/* Template Preview Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${template.color} opacity-20`} />
                  <img 
                    src={template.image} 
                    alt={template.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-800">
                      {template.specialty}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <template.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {template.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {template.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-sm">Χαρακτηριστικά:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {template.features.map((feature, index) => (
                        <div key={index} className="text-xs text-muted-foreground">
                          • {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(template.route, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button 
                      variant="cta" 
                      size="sm"
                      className="flex-1"
                    >
                      Χρήση Template
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-card rounded-2xl p-8 border shadow-soft">
              <h3 className="text-2xl font-bold mb-4">
                Δε βλέπετε το template που χρειάζεστε;
              </h3>
              <p className="text-muted-foreground mb-6">
                Δημιουργούμε προσαρμοσμένα templates για οποιαδήποτε ιατρική ειδικότητα
              </p>
              <Button variant="cta" size="lg">
                Ζητήστε Προσαρμοσμένο Template
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Templates;