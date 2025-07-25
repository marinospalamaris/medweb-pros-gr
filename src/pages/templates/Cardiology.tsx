import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  ExternalLink, 
  Heart, 
  Phone, 
  Clock, 
  MapPin, 
  Calendar, 
  Stethoscope,
  Activity,
  Shield,
  Star,
  CheckCircle,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";
import doctorImage from "@/assets/doctor-laptop.jpg";

const Cardiology = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/templates">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Πίσω στα Templates
            </Button>
          </Link>
          <Button variant="cta">
            <ExternalLink className="w-4 h-4 mr-2" />
            Χρησιμοποίησε Template
          </Button>
        </div>
      </div>

      {/* Preview Content */}
      <div className="bg-gradient-to-br from-red-50 to-pink-50 min-h-screen">
        {/* Top Bar */}
        <div className="bg-red-900 text-white py-2">
          <div className="container mx-auto px-4 flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>210 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Βασιλίσσης Σοφίας 45, Αθήνα</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Δευ-Παρ: 9:00-17:00, Σαβ: 9:00-14:00</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Heart className="w-8 h-8 text-red-600" />
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Δρ. Μαρία Παπαδάκη</h1>
                  <p className="text-sm text-gray-600">Καρδιολόγος - Παθολόγος</p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-6">
                <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors">Αρχική</a>
                <a href="#services" className="text-gray-700 hover:text-red-600 transition-colors">Υπηρεσίες</a>
                <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors">Σχετικά</a>
                <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">Επικοινωνία</a>
                <Button variant="cta" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Κλείσε Ραντεβού
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <Badge className="mb-4 bg-red-100 text-red-800">
                    <Heart className="w-4 h-4 mr-2" />
                    Ειδικός Καρδιολόγος
                  </Badge>
                  <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                    Φροντίδα για την{" "}
                    <span className="text-red-600">Καρδιά σας</span>{" "}
                    με Εμπειρία 20+ Ετών
                  </h1>
                  <p className="text-lg text-gray-600 mt-6">
                    Προσφέρω ολοκληρωμένη καρδιολογική φροντίδα με τις πιο σύγχρονες 
                    μεθόδους διάγνωσης και θεραπείας. Η υγεία της καρδιάς σας είναι η προτεραιότητά μου.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="cta" size="lg">
                    <Calendar className="w-5 h-5 mr-2" />
                    Κλείσε Ραντεβού Τώρα
                  </Button>
                  <Button variant="outline" size="lg">
                    <Phone className="w-5 h-5 mr-2" />
                    Κάλεσε Τώρα
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">5,000+</div>
                    <div className="text-sm text-gray-600">Ασθενείς</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">20+</div>
                    <div className="text-sm text-gray-600">Χρόνια Εμπειρίας</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">98%</div>
                    <div className="text-sm text-gray-600">Ικανοποίηση</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={doctorImage} 
                    alt="Δρ. Μαρία Παπαδάκη - Καρδιολόγος"
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="absolute -top-4 -right-4 bg-white shadow-lg rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="font-semibold">5.0</span>
                  </div>
                  <div className="text-sm text-gray-600">Google Reviews</div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white shadow-lg rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold">Διαθέσιμη Σήμερα</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4">Καρδιολογικές Υπηρεσίες</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Ειδικευμένες Υπηρεσίες Καρδιολογίας
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Προσφέρω πλήρη φάσμα καρδιολογικών υπηρεσιών με τη χρήση 
                των πιο σύγχρονων τεχνολογιών
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Stethoscope className="w-12 h-12 text-red-600 mb-4" />
                  <CardTitle>Καρδιολογικός Έλεγχος</CardTitle>
                  <CardDescription>
                    Πλήρης καρδιολογική εξέταση με ηλεκτροκαρδιογράφημα και υπερηχοκαρδιογράφημα
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">ΗΚΓ & Triplex Καρδιάς</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Holter Ρυθμού & Πίεσης</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Test Κοπώσεως</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Activity className="w-12 h-12 text-red-600 mb-4" />
                  <CardTitle>Διαχείριση Υπέρτασης</CardTitle>
                  <CardDescription>
                    Εξειδικευμένη αντιμετώπιση της υψηλής αρτηριακής πίεσης
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">24ωρη Καταγραφή Πίεσης</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Προσαρμοσμένη Θεραπεία</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Διαιτητικές Οδηγίες</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Shield className="w-12 h-12 text-red-600 mb-4" />
                  <CardTitle>Πρόληψη Καρδιοπάθειας</CardTitle>
                  <CardDescription>
                    Προληπτική ιατρική για την πρόληψη καρδιαγγειακών νοσημάτων
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Έλεγχος Καρδιαγγειακού Κινδύνου</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Συμβουλές Υγιεινής Διατροφής</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Πρόγραμμα Άσκησης</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4">Εμπειρία & Εξειδίκευση</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Αφοσιωμένη στην Καρδιολογία εδώ και 20 χρόνια
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Ως ειδικός καρδιολόγος με μεταπτυχιακές σπουδές στην Καρδιαγγειακή Ιατρική, 
                  έχω αφιερώσει την καριέρα μου στην παροχή υψηλής ποιότητας φροντίδας για 
                  ασθενείς με καρδιολογικά προβλήματα.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Users className="w-6 h-6 text-red-600" />
                      <span className="font-semibold">5,000+ Ασθενείς</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Heart className="w-6 h-6 text-red-600" />
                      <span className="font-semibold">20+ Χρόνια Εμπειρίας</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Shield className="w-6 h-6 text-red-600" />
                      <span className="font-semibold">Πιστοποιημένη ESC</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-6 h-6 text-red-600" />
                      <span className="font-semibold">5.0 Αξιολόγηση</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">98%</div>
                    <div className="text-sm text-gray-600">Ικανοποίηση Ασθενών</div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Επείγουσα Υποστήριξη</div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">15min</div>
                    <div className="text-sm text-gray-600">Μέσος Χρόνος Αναμονής</div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600">Ψηφιακή Διαχείριση</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-red-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Έτοιμοι να Φροντίσουμε την Καρδιά σας;
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Κλείστε το ραντεβού σας σήμερα και ξεκινήστε το ταξίδι προς μια υγιή καρδιά
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Calendar className="w-5 h-5 mr-2" />
                Κλείσε Ραντεβού Online
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-900">
                <Phone className="w-5 h-5 mr-2" />
                Κάλεσε: 210 123 4567
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cardiology;