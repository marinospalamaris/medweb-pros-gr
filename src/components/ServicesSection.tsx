import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  MessageSquare, 
  Calendar, 
  CheckCircle,
  ArrowRight
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Essential Package",
      description: "Βασική ιστοσελίδα με chat και κρατήσεις",
      features: [
        "Responsive Ιστοσελίδα", 
        "Live Chat System", 
        "Basic Online Κρατήσεις", 
        "GDPR Compliance", 
        "SSL Ασφάλεια", 
        "Mobile Optimization"
      ],
      price: "€750",
      popular: false
    },
    {
      icon: MessageSquare,
      title: "Professional Package",
      description: "Προχωρημένες λειτουργίες για αύξηση ασθενών",
      features: [
        "Premium Ιστοσελίδα Design", 
        "Advanced Chat με AI", 
        "Smart Booking System", 
        "SEO Optimization", 
        "WhatsApp Integration", 
        "Analytics Dashboard", 
        "Email Marketing"
      ],
      price: "€1,200",
      popular: true
    },
    {
      icon: Calendar,
      title: "Premium Package",
      description: "Πλήρης λύση για μέγιστη απόδοση",
      features: [
        "Custom Design & Branding", 
        "AI-Powered Chat Assistant", 
        "Advanced Booking με Reminders", 
        "Multi-location Support", 
        "Patient Portal", 
        "Social Media Management", 
        "Monthly Performance Reports", 
        "Priority Support"
      ],
      price: "€1,500",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Υπηρεσίες
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ολοκληρωμένες{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Υπηρεσίες
            </span>{" "}
            για Ιατρικές Πρακτικές
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Από τον αρχικό σχεδιασμό έως τη συνεχή συντήρηση, προσφέρουμε όλα όσα χρειάζεστε 
            για μια επιτυχημένη ψηφιακή παρουσία
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-strong border-0 shadow-soft group ${
                service.popular ? 'ring-2 ring-primary shadow-medium' : ''
              }`}
            >
              {service.popular && (
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  Δημοφιλής
                </Badge>
              )}
              
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-light mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-primary">{service.price}</span>
                  </div>
                  
                  <Button 
                    variant={service.popular ? "cta" : "outline"} 
                    className="w-full group"
                  >
                    Μάθε Περισσότερα
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Χρειάζεστε μια προσαρμοσμένη λύση; Ας μιλήσουμε για τις ανάγκες σας.
          </p>
          <Button variant="hero" size="lg">
            Κλείσε Δωρεάν Συμβουλευτική
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;