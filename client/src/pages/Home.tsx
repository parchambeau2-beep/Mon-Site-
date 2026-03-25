import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Clock, CheckCircle2, Wrench, Zap, Shield, Gauge } from "lucide-react";

/**
 * DESIGN SYSTEM: Industrial Minimalism
 * - Noir profond (#0A0A0A) + Blanc pur (#FFFFFF) + Rouge vif (#E63946)
 * - Montserrat (Display) + Inter (Body)
 * - Espace blanc agressif, géométrie nette
 * - CTA répété 6-8 fois, sticky sur mobile
 */

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicleType: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Intégrer avec backend/email service
    console.log("Form submitted:", formData);
    alert("Merci ! Nous vous recontacterons rapidement.");
    setFormData({ name: "", phone: "", email: "", vehicleType: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* ============================================
          STICKY CTA BUTTON - Mobile
          ============================================ */}
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
        <Button
          onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 font-bold text-lg rounded-sm"
        >
          Demander un devis gratuit
        </Button>
      </div>

      {/* ============================================
          HEADER / NAVIGATION
          ============================================ */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-30">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Wrench className="w-8 h-8 text-red-600" />
            <h1 className="text-2xl font-bold text-black">Auto GT Concept</h1>
          </div>
          <a href="tel:+33123456789" className="hidden md:flex items-center gap-2 text-red-600 font-semibold hover:underline">
            <Phone className="w-5 h-5" />
            +33 1 23 45 67 89
          </a>
        </div>
      </header>

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-start"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10, 10, 10, 0.4) 0%, rgba(10, 10, 10, 0.2) 100%), url('https://d2xsxph8kpxj0f.cloudfront.net/310519663472224319/8SadVUfJRgvaUbThmdVxXT/hero-garage-2HRmA6MdQtCoFmVKMfwUxN.webp')`,
        }}
      >
        <div className="container max-w-2xl">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Votre garage automobile de confiance près de chez vous
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 font-light">
              Réparation, entretien et diagnostic toutes marques
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-cta bg-red-600 hover:bg-red-700 text-white"
              >
                Demander un devis gratuit
              </Button>
              <a href="tel:+33123456789" className="btn-cta bg-white text-black hover:bg-gray-100">
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Red separator line */}
      <div className="separator-red"></div>

      {/* ============================================
          SERVICES SECTION
          ============================================ */}
      <section className="section-spacing bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Nos Services</h2>
          <p className="text-lg text-gray-600 mb-16 max-w-2xl">
            Diagnostic rapide • Devis clair • Réparation toutes marques • Service local fiable
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Gauge, title: "Diagnostic Électronique", desc: "Diagnostic complet de votre véhicule" },
              { icon: Wrench, title: "Mécanique Générale", desc: "Réparation et entretien tous types" },
              { icon: Shield, title: "Freinage", desc: "Plaquettes, disques, révision complète" },
              { icon: Zap, title: "Révision / Entretien", desc: "Vidange, filtres, révision périodique" },
              { icon: Gauge, title: "Pneus", desc: "Vente, montage et équilibrage" },
              { icon: Wrench, title: "Carrosserie", desc: "Réparation et peinture" },
            ].map((service, idx) => (
              <div key={idx} className="border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                <service.icon className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-black">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-cta bg-red-600 hover:bg-red-700 text-white"
            >
              Demander un devis gratuit
            </Button>
          </div>
        </div>
      </section>

      {/* Red separator line */}
      <div className="separator-red"></div>

      {/* ============================================
          SOCIAL PROOF / TESTIMONIALS SECTION
          ============================================ */}
      <section
        className="section-spacing bg-cover bg-center relative"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663472224319/8SadVUfJRgvaUbThmdVxXT/testimonials-bg-CrCQujydNE8n3jQ7s2NcLC.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Nos Clients Nous Font Confiance</h2>
          <p className="text-lg text-gray-200 mb-16">⭐ 4.5/5 basé sur des dizaines d'avis clients satisfaits</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Jean M.", text: "Service rapide et transparent. Devis clair avant les travaux." },
              { name: "Marie L.", text: "Très professionnel. Garage de confiance pour l'entretien de ma voiture." },
              { name: "Pierre D.", text: "Prix corrects et travail de qualité. Je recommande vivement !" },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur p-8 border border-white/20">
                <p className="text-white mb-4 italic">"{testimonial.text}"</p>
                <p className="text-gray-200 font-semibold">— {testimonial.name}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
            <div>
              <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-red-400" />
              <p className="font-bold">Garage Local</p>
            </div>
            <div>
              <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-red-400" />
              <p className="font-bold">Toutes Marques</p>
            </div>
            <div>
              <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-red-400" />
              <p className="font-bold">Devis Avant Travaux</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-cta bg-red-600 hover:bg-red-700 text-white"
            >
              Demander un devis gratuit
            </Button>
          </div>
        </div>
      </section>

      {/* Red separator line */}
      <div className="separator-red"></div>

      {/* ============================================
          HOW IT WORKS SECTION
          ============================================ */}
      <section className="section-spacing bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-black">Comment Ça Marche</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "1", title: "Décrivez votre problème", desc: "Remplissez le formulaire avec les détails de votre véhicule" },
              { num: "2", title: "Nous vous répondons", desc: "Réponse rapide de notre équipe" },
              { num: "3", title: "Diagnostic + Devis", desc: "Diagnostic complet et devis transparent" },
              { num: "4", title: "Réparation rapide", desc: "Travaux effectués avec qualité" },
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold mb-2 text-black">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-cta bg-red-600 hover:bg-red-700 text-white"
            >
              Demander un devis gratuit
            </Button>
          </div>
        </div>
      </section>

      {/* Red separator line */}
      <div className="separator-red"></div>

      {/* ============================================
          CONTACT FORM SECTION
          ============================================ */}
      <section
        id="contact-form"
        className="section-spacing bg-cover bg-center relative"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663472224319/8SadVUfJRgvaUbThmdVxXT/contact-form-bg-d9Vanky3BY77RaMeaxdBPW.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-white/95"></div>
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Demander un Devis Gratuit</h2>
            <p className="text-lg text-gray-600 mb-12">
              Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement avec un devis transparent.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Nom *</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Votre nom"
                  required
                  className="w-full border-gray-300 rounded-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Téléphone *</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+33 1 23 45 67 89"
                    required
                    className="w-full border-gray-300 rounded-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Email *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="votre@email.com"
                    required
                    className="w-full border-gray-300 rounded-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Type de Véhicule *</label>
                <select
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-sm px-4 py-2 text-black bg-white"
                >
                  <option value="">Sélectionnez un type</option>
                  <option value="voiture">Voiture</option>
                  <option value="suv">SUV</option>
                  <option value="monospace">Monospace</option>
                  <option value="utilitaire">Utilitaire</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Décrivez votre problème *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Ex: Bruit moteur, pneu crevé, révision d'entretien..."
                  required
                  className="w-full border-gray-300 rounded-sm min-h-32"
                />
              </div>

              <Button
                type="submit"
                className="w-full btn-cta bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-bold"
              >
                Recevoir mon devis gratuit
              </Button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-6">
              Nous vous recontacterons dans les 2 heures (jours ouvrables)
            </p>
          </div>
        </div>
      </section>

      {/* Red separator line */}
      <div className="separator-red"></div>

      {/* ============================================
          LOCATION SECTION
          ============================================ */}
      <section className="section-spacing bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-black">Nous Localiser</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <MapPin className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Adresse</h3>
                    <p className="text-gray-600">123 Rue de la Mécanique<br />75000 Paris, France</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Téléphone</h3>
                    <a href="tel:+33123456789" className="text-red-600 font-semibold hover:underline">
                      +33 1 23 45 67 89
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Horaires</h3>
                    <p className="text-gray-600">
                      Lun - Ven: 8h00 - 18h00<br />
                      Sam: 9h00 - 13h00<br />
                      Dimanche: Fermé
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <Button
                  onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                  className="btn-cta bg-red-600 hover:bg-red-700 text-white"
                >
                  Demander un devis gratuit
                </Button>
              </div>
            </div>

            <div className="bg-gray-200 rounded-sm h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Carte Google Maps (à intégrer)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Red separator line */}
      <div className="separator-red"></div>

      {/* ============================================
          FOOTER
          ============================================ */}
      <footer className="bg-black text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Wrench className="w-6 h-6 text-red-600" />
                <h3 className="text-lg font-bold">Auto GT Concept</h3>
              </div>
              <p className="text-gray-400">
                Votre garage de confiance pour l'entretien et la réparation de votre véhicule.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <p className="text-gray-400 mb-2">
                <a href="tel:+33123456789" className="hover:text-red-600 transition">
                  +33 1 23 45 67 89
                </a>
              </p>
              <p className="text-gray-400">
                123 Rue de la Mécanique<br />
                75000 Paris, France
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Horaires</h3>
              <p className="text-gray-400">
                Lun - Ven: 8h00 - 18h00<br />
                Sam: 9h00 - 13h00<br />
                Dimanche: Fermé
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="text-center mb-6">
              <Button
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-cta bg-red-600 hover:bg-red-700 text-white"
              >
                Demander un devis gratuit
              </Button>
            </div>
            <p className="text-center text-gray-500 text-sm">
              © 2024 Auto GT Concept. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
