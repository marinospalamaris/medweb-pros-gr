import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone,
  MapPin,
  Clock,
  Calendar,
  Smile,
  Sparkles,
  Shield,
  Users,
  ArrowLeft,
  Star,
  Camera
} from "lucide-react";

const Dental = () => {
  const beforeAfterCases = [
    { before: "/api/placeholder/300/200", after: "/api/placeholder/300/200", title: "Orthodontic Treatment" },
    { before: "/api/placeholder/300/200", after: "/api/placeholder/300/200", title: "Teeth Whitening" },
    { before: "/api/placeholder/300/200", after: "/api/placeholder/300/200", title: "Dental Implants" },
    { before: "/api/placeholder/300/200", after: "/api/placeholder/300/200", title: "Smile Makeover" }
  ];

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

      {/* Dental Practice Website Template */}
      <div className="bg-gradient-to-b from-green-50 to-white">
        {/* Top Bar */}
        <div className="bg-success text-white py-2">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  210-456-7890
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Κηφισίας 45, Μαρούσι
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Δευ-Σαβ: 08:00-20:00
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-white shadow-sm py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Smile className="w-8 h-8 text-success" />
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Smile Dental Clinic</h1>
                  <p className="text-sm text-gray-600">Δρ. Γιάννης Αντωνίου</p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-6">
                <a href="#" className="text-gray-700 hover:text-success">Αρχική</a>
                <a href="#" className="text-gray-700 hover:text-success">Υπηρεσίες</a>
                <a href="#" className="text-gray-700 hover:text-success">Πριν/Μετά</a>
                <a href="#" className="text-gray-700 hover:text-success">Τιμές</a>
                <a href="#" className="text-gray-700 hover:text-success">Επικοινωνία</a>
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
                <Badge className="mb-4 bg-green-100 text-green-800">
                  Πιστοποιημένο Οδοντιατρείο
                </Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Το Χαμόγελό σας είναι η Δουλειά μας
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Προσφέρουμε ολοκληρωμένες οδοντιατρικές υπηρεσίες με τη νεότερη τεχνολογία 
                  και προσωπική φροντίδα για κάθε ασθενή.
                </p>
                <div className="flex items-center gap-4">
                  <Button variant="cta" size="lg">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Δωρεάν Consultation
                  </Button>
                  <Button variant="outline" size="lg">
                    Δες τη Δουλειά μας
                  </Button>
                </div>
                <div className="flex items-center gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success">500+</div>
                    <div className="text-sm text-gray-600">Χαμόγελα</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success">10+</div>
                    <div className="text-sm text-gray-600">Χρόνια</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success">98%</div>
                    <div className="text-sm text-gray-600">Ικανοποίηση</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/api/placeholder/500/400" 
                  alt="Σύγχρονο Οδοντιατρείο"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="font-semibold">4.8/5</span>
                    <span className="text-gray-600">(189 reviews)</span>
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
                Οι Υπηρεσίες μας
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Από προληπτική φροντίδα έως αισθητική οδοντιατρική
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <CardTitle className="text-lg">Προληπτική</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Καθαρισμός, εξέταση, πρόληψη
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Sparkles className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <CardTitle className="text-lg">Αισθητική</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Λεύκανση, veneer, bonding
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <CardTitle className="text-lg">Ορθοδοντικά</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Σιδεράκια, Invisalign
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Smile className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <CardTitle className="text-lg">Εμφυτεύματα</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Dental implants, οδοντοστοιχίες
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Before/After Gallery */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Πριν & Μετά
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Δείτε τα εντυπωσιακά αποτελέσματα των θεραπειών μας
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {beforeAfterCases.map((case_, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-center">{case_.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-semibold text-gray-600 mb-2">ΠΡΙΝ</p>
                        <img 
                          src={case_.before} 
                          alt="Before treatment"
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-600 mb-2">ΜΕΤΑ</p>
                        <img 
                          src={case_.after} 
                          alt="After treatment"
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                <Camera className="w-5 h-5 mr-2" />
                Δες Περισσότερα Αποτελέσματα
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Διαφανείς Τιμές
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Χωρίς κρυφές χρεώσεις - ξέρετε πάντα τι πληρώνετε
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6">
                <CardHeader className="text-center">
                  <CardTitle>Καθαρισμός</CardTitle>
                  <div className="text-3xl font-bold text-success">€80</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Αφαίρεση πλάκας</li>
                    <li>✓ Πολίρισμα</li>
                    <li>✓ Οδηγίες υγιεινής</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6 ring-2 ring-success">
                <CardHeader className="text-center">
                  <Badge className="mb-2">Δημοφιλές</Badge>
                  <CardTitle>Λεύκανση</CardTitle>
                  <div className="text-3xl font-bold text-success">€250</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Επαγγελματική λεύκανση</li>
                    <li>✓ LED τεχνολογία</li>
                    <li>✓ Εγγύηση αποτελέσματος</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="text-center">
                  <CardTitle>Εμφύτευμα</CardTitle>
                  <div className="text-3xl font-bold text-success">€800</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Τιτάνιο implant</li>
                    <li>✓ Κορώνα πορσελάνης</li>
                    <li>✓ 5ετής εγγύηση</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact/CTA */}
        <section className="py-16 bg-success text-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ξεκινήστε το Ταξίδι προς το Τέλειο Χαμόγελο
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Κλείστε τη δωρεάν σας συμβουλευτική σήμερα
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Calendar className="w-5 h-5 mr-2" />
                Δωρεάν Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-success">
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

export default Dental;