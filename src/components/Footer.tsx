import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Shield, 
  Award,
  Linkedin,
  Facebook,
  Instagram
} from "lucide-react";

const Footer = () => {
  const services = [
    "Σχεδιασμός Ιατρικών Ιστοσελίδων",
    "HIPAA-Compliant Portals",
    "Online Κρατήσεις",
    "Medical SEO",
    "Telemedicine Setup",
    "Website Maintenance"
  ];

  const quickLinks = [
    { label: "Για Εμάς", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Υπηρεσίες", href: "#services" },
    { label: "Τιμοκατάλογος", href: "#pricing" },
    { label: "Blog", href: "#blog" },
    { label: "Επικοινωνία", href: "#contact" }
  ];

  const resources = [
    { label: "HIPAA Compliance Guide", href: "#hipaa" },
    { label: "Medical Website Checklist", href: "#checklist" },
    { label: "SEO για Γιατρούς", href: "#seo" },
    { label: "Case Studies", href: "#cases" },
    { label: "Συχνές Ερωτήσεις", href: "#faq" },
    { label: "Τεχνική Υποστήριξη", href: "#support" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <div>
                <div className="font-bold text-lg text-background">MedWeb Pro</div>
                <div className="text-xs text-background/70">Medical Web Design</div>
              </div>
            </div>
            
            <p className="text-background/80 text-sm leading-relaxed">
              Ειδικευόμαστε στη δημιουργία επαγγελματικών, 
              HIPAA-compliant ιστοσελίδων για ιατρικές πρακτικές 
              που μετατρέπουν επισκέπτες σε ασθενείς.
            </p>

            {/* Trust Badges */}
            <div className="flex gap-4">
              <div className="flex items-center gap-2 bg-background/10 rounded-lg px-3 py-2">
                <Shield className="w-4 h-4 text-success" />
                <span className="text-xs font-medium">HIPAA</span>
              </div>
              <div className="flex items-center gap-2 bg-background/10 rounded-lg px-3 py-2">
                <Award className="w-4 h-4 text-warning" />
                <span className="text-xs font-medium">Certified</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-background">Υπηρεσίες</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-background/70 hover:text-background transition-colors text-sm story-link"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-background">Γρήγοροι Σύνδεσμοι</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm story-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Resources */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-6 text-background">Επικοινωνία</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-background/80 text-sm">210-123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-background/80 text-sm">info@medwebpro.gr</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-background/80 text-sm">Αθήνα, Ελλάδα</span>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-medium text-background mb-3">Πόροι</h4>
              <ul className="space-y-2">
                {resources.slice(0, 3).map((resource, index) => (
                  <li key={index}>
                    <a 
                      href={resource.href}
                      className="text-background/70 hover:text-background transition-colors text-sm story-link"
                    >
                      {resource.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/60 text-sm">
              © 2024 MedWeb Pro. Όλα τα δικαιώματα κατοχυρωμένα.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-background/60 text-sm">Ακολουθήστε μας:</span>
              <div className="flex gap-3">
                <a href="#" className="text-background/60 hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-background/60 hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-background/60 hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency CTA */}
        <div className="border-t border-background/20 py-6">
          <div className="text-center">
            <p className="text-background/80 text-sm mb-4">
              Χρειάζεστε άμεση βοήθεια με την ιστοσελίδα σας;
            </p>
            <Button variant="cta" size="lg">
              <Phone className="w-4 h-4 mr-2" />
              Κλήση Έκτακτης Ανάγκης
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;