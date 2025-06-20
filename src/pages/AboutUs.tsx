import {
  MapPin,
  Users,
  Shield,
  Award,
  Anchor,
  Waves,
  Star,
  Phone,
  Mail,
  Calendar,
} from "lucide-react";

// Types
interface FeatureCard {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  bgGradient: string;
  iconColor: string;
}

interface ServiceInfo {
  title: string;
  description: string;
  details: string[];
}

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
}

export default function AboutUs() {
  // Data arrays
  const features: FeatureCard[] = [
    {
      id: "safety",
      icon: Shield,
      title: "Safety First",
      description:
        "We prioritize safety, convenience, and customer satisfaction in every journey.",
      bgGradient: "from-emerald-50 to-teal-50",
      iconColor: "text-emerald-600",
    },
    {
      id: "modern-fleet",
      icon: Anchor,
      title: "Modern Fleet",
      description:
        "Operating since 2015 with modern 50-passenger boats ensuring comfort and reliability.",
      bgGradient: "from-blue-50 to-indigo-50",
      iconColor: "text-blue-600",
    },
    {
      id: "experience",
      icon: Award,
      title: "Trusted Experience",
      description:
        "Years of experience in maritime transportation with a commitment to excellence.",
      bgGradient: "from-purple-50 to-pink-50",
      iconColor: "text-purple-600",
    },
    {
      id: "routes",
      icon: MapPin,
      title: "Key Routes",
      description:
        "Connecting Concepcion, Palawan and San Jose, Mindoro with reliable ferry services.",
      bgGradient: "from-amber-50 to-orange-50",
      iconColor: "text-amber-600",
    },
  ];

  const services: ServiceInfo[] = [
    {
      title: "Ferry Services",
      description:
        "Reliable transportation between key destinations in the Philippines.",
      details: [
        "Modern 50-passenger boats",
        "Regular schedules with punctual departures",
        "Comfortable seating and amenities",
        "Professional and experienced crew",
      ],
    },
    {
      title: "Booking Experience",
      description:
        "Hassle-free and efficient ferry booking experience for all passengers.",
      details: [
        "Online booking through our web platform",
        "E-ticket system for convenience",
        "Secure payment processing",
        "Customer support throughout your journey",
      ],
    },
    {
      title: "Safety & Reliability",
      description:
        "Our commitment to delivering a hassle-free and efficient ferry booking experience.",
      details: [
        "Regular maintenance and safety checks",
        "Trained crew following maritime standards",
        "Weather monitoring and safety protocols",
        "Emergency equipment and procedures",
      ],
    },
  ];

  const contactInfo: ContactInfo[] = [
    {
      icon: Phone,
      title: "Customer Service",
      value: "+63 123 456 7890",
    },
    {
      icon: Mail,
      title: "Email Support",
      value: "info@travelexpress.com",
    },
    {
      icon: Calendar,
      title: "Operating Hours",
      value: "Daily: 6:00 AM - 6:00 PM",
    },
  ];

  // Component renderers
  const renderFeatureCard = (feature: FeatureCard) => (
    <div
      key={feature.id}
      className="bg-white rounded-xl shadow-none border border-zinc-200 p-5 transition-shadow duration-300"
    >
      <div
        className={`bg-gradient-to-r ${feature.bgGradient} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}
      >
        <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {feature.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
    </div>
  );

  const renderServiceCard = (service: ServiceInfo, index: number) => (
    <div
      key={index}
      className="bg-white rounded-xl shadow-none border border-zinc-200 p-5 overflow-hidden"
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <ul className="space-y-2">
          {service.details.map((detail, detailIndex) => (
            <li key={detailIndex} className="flex items-start gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderContactInfo = (contact: ContactInfo, index: number) => (
    <div key={index} className="flex items-center gap-4">
      <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
        <contact.icon className="h-6 w-6" />
      </div>
      <div>
        <p className="font-semibold text-white">{contact.title}</p>
        <p className="text-emerald-100">{contact.value}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 relative">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/80"></div>
          <div className="relative max-w-6xl mx-auto px-4 py-20">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                The Ceamark Journey
              </h2>
              <p className="text-xl text-white mb-8 leading-relaxed">
                At Ceamark Shipping Lines, we're committed to delivering a
                hassle-free and efficient ferry booking experience. Our
                web-based system lets you secure seats, pay securely, and
                download your ticket anytime, anywhere—making travel simpler
                than ever.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <blockquote className="text-white italic text-lg">
                  "Join us as we navigate towards a smarter and more connected
                  travel experience."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Company Overview */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Operating since 2015, we proudly serve the route between
              Concepcion, Palawan and San Jose, Mindoro with a modern
              50-passenger boats, ensuring comfort, safety, and reliability. We
              follow a first-come, first-served policy with ticket prices
              ranging from ₱500 to ₱1000, depending on passenger type.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We prioritize safety, convenience, and customer satisfaction—so
              your journey is as smooth from booking to boarding. Thank you for
              choosing Ceamark. We look forward to sailing with you!
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(renderFeatureCard)}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map(renderServiceCard)}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl text-white p-8 mb-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold mb-2">2015</div>
              <div className="text-emerald-100">Operating Since</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold mb-2">50</div>
              <div className="text-emerald-100">Passenger Capacity</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold mb-2">2</div>
              <div className="text-emerald-100">Key Routes</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Star className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-emerald-100">Safety Commitment</div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-none border border-zinc-200 p-5 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-emerald-100 rounded-lg">
                <Waves className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To provide safe, reliable, and comfortable maritime transportation
              services while delivering exceptional customer experiences through
              innovative booking solutions and professional service standards.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-none border border-zinc-200 p-5 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Anchor className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To be the leading ferry service provider in the Philippines, known
              for safety, reliability, and customer satisfaction, connecting
              communities and enhancing travel experiences across the
              archipelago.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
              Ready to start your journey with us? Contact our team for
              bookings, inquiries, or any assistance you need.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map(renderContactInfo)}
          </div>
        </div>
      </div>
    </div>
  );
}
