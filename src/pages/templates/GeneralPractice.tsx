import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone,
  MapPin,
  Clock,
  Calendar,
  Stethoscope,
  Heart,
  Users,
  Award,
  ArrowLeft,
  Star
} from "lucide-react";

const GeneralPractice = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Πίσω
              </Button>
              <Badge variant="secondary">Template Preview</Badge>
            </div>
            <Button variant="cta">
              Χρήση Template
            </Button>
          </div>
        </div>
      </header>

      {/* Medical Practice Website Template */}
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Top Bar */}
        <div className="bg-primary text-primary-foreground py-2">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  210-123-4567
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Βασιλίσσης Σοφίας 123, Αθήνα
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Δευ-Παρ: 09:00-17:00
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-white shadow-sm py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Stethoscope className="w-8 h-8 text-primary" />
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Δρ. Μαρία Παπαδοπούλου</h1>
                  <p className="text-sm text-gray-600">Γενική Ιατρική</p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-6">
                <a href="#" className="text-gray-700 hover:text-primary">Αρχική</a>
                <a href="#" className="text-gray-700 hover:text-primary">Υπηρεσίες</a>
                <a href="#" className="text-gray-700 hover:text-primary">Σχετικά</a>
                <a href="#" className="text-gray-700 hover:text-primary">Επικοινωνία</a>
                <Button variant="cta" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Κλείσε Ραντεβού
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-blue-100 text-blue-800">
                  Εμπειρία 15+ Ετών
                </Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Ολοκληρωμένη Φροντίδα για όλη την Οικογένεια
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Παρέχω ποιοτική ιατρική φροντίδα με προσωπική προσέγγιση. 
                  Από προληπτικές εξετάσεις έως τη διαχείριση χρόνιων παθήσεων.
                </p>
                <div className="flex items-center gap-4">
                  <Button variant="cta" size="lg">
                    Κλείσε Ραντεβού Online
                  </Button>
                  <Button variant="outline" size="lg">
                    Μάθε Περισσότερα
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/api/placeholder/500/400" 
                  alt="Δρ. Μαρία Παπαδοπούλου"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="font-semibold">4.9/5</span>
                    <span className="text-gray-600">(247 αξιολογήσεις)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Υπηρεσίες Γενικής Ιατρικής
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Προσφέρω ολοκληρωμένες υπηρεσίες για την υγεία σας και της οικογένειάς σας
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <CardHeader>
                  <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <CardTitle>Προληπτική Ιατρική</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Τακτικές εξετάσεις και screening για πρώιμη διάγνωση προβλημάτων υγείας
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardHeader>
                  <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <CardTitle>Οικογενειακή Ιατρική</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Φροντίδα για όλα τα μέλη της οικογένειας, από παιδιά έως ηλικιωμένους
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardHeader>
                  <Award className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <CardTitle>Χρόνιες Παθήσεις</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Διαχείριση και παρακολούθηση χρόνιων νοσημάτων όπως διαβήτης, υπέρταση
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/api/placeholder/500/350" 
                  alt="Ιατρείο"
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Γιατί να επιλέξετε τη Δρ. Παπαδοπούλου;
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">15+ Χρόνια Εμπειρίας</h4>
                      <p className="text-gray-600">Εκτενής εμπειρία στη γενική ιατρική και οικογενειακή φροντίδα</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Προσωπική Προσέγγιση</h4>
                      <p className="text-gray-600">Κάθε ασθενής λαμβάνει εξατομικευμένη φροντίδα και προσοχή</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Σύγχρονος Εξοπλισμός</h4>
                      <p className="text-gray-600">Χρήση της πιο σύγχρονης τεχνολογίας για ακριβή διάγνωση</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Έτοιμοι για την επόμενη επίσκεψή σας;
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Κλείστε το ραντεβού σας online ή καλέστε μας σήμερα
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Calendar className="w-5 h-5 mr-2" />
                Κλείσε Ραντεβού Online
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <Phone className="w-5 h-5 mr-2" />
                Κάλεσε Τώρα
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GeneralPractice;