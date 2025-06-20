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
      className="rounded-xl border border-zinc-200 bg-white p-5 shadow-none transition-shadow duration-300"
    >
      <div
        className={`bg-gradient-to-r ${feature.bgGradient} mb-4 flex h-16 w-16 items-center justify-center rounded-lg`}
      >
        <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
      </div>
      <h3 className="mb-3 text-xl font-semibold text-gray-900">
        {feature.title}
      </h3>
      <p className="leading-relaxed text-gray-600">{feature.description}</p>
    </div>
  );

  const renderServiceCard = (service: ServiceInfo, index: number) => (
    <div
      key={index}
      className="overflow-hidden rounded-xl border border-zinc-200 bg-white p-5 shadow-none"
    >
      <div className="p-6">
        <h3 className="mb-3 text-xl font-semibold text-gray-900">
          {service.title}
        </h3>
        <p className="mb-4 text-gray-600">{service.description}</p>
        <ul className="space-y-2">
          {service.details.map((detail, detailIndex) => (
            <li key={detailIndex} className="flex items-start gap-2">
              <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500"></div>
              <span className="text-gray-700">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderContactInfo = (contact: ContactInfo, index: number) => (
    <div key={index} className="flex items-center gap-4">
      <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
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
        <div className="relative bg-gradient-to-r from-gray-900/90 to-gray-800/90">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/80"></div>
          <div className="relative mx-auto max-w-6xl px-4 py-20">
            <div className="max-w-3xl">
              <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                The Ceamark Journey
              </h2>
              <p className="mb-8 text-xl leading-relaxed text-white">
                At Ceamark Shipping Lines, we're committed to delivering a
                hassle-free and efficient ferry booking experience. Our
                web-based system lets you secure seats, pay securely, and
                download your ticket anytime, anywhere—making travel simpler
                than ever.
              </p>
              <div className="rounded-lg border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                <blockquote className="text-lg text-white italic">
                  "Join us as we navigate towards a smarter and more connected
                  travel experience."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Company Overview */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">Our Story</h2>
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Operating since 2015, we proudly serve the route between
              Concepcion, Palawan and San Jose, Mindoro with a modern
              50-passenger boats, ensuring comfort, safety, and reliability. We
              follow a first-come, first-served policy with ticket prices
              ranging from ₱500 to ₱1000, depending on passenger type.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              We prioritize safety, convenience, and customer satisfaction—so
              your journey is as smooth from booking to boarding. Thank you for
              choosing Ceamark. We look forward to sailing with you!
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Why Choose Us
          </h2>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {features.map(renderFeatureCard)}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Our Services
          </h2>
          <div className="grid gap-3 md:grid-cols-1 lg:grid-cols-3">
            {services.map(renderServiceCard)}
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-16 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-white">
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8" />
              </div>
              <div className="mb-2 text-3xl font-bold">2015</div>
              <div className="text-emerald-100">Operating Since</div>
            </div>
            <div>
              <div className="mb-4 flex items-center justify-center">
                <Users className="h-8 w-8" />
              </div>
              <div className="mb-2 text-3xl font-bold">50</div>
              <div className="text-emerald-100">Passenger Capacity</div>
            </div>
            <div>
              <div className="mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8" />
              </div>
              <div className="mb-2 text-3xl font-bold">2</div>
              <div className="text-emerald-100">Key Routes</div>
            </div>
            <div>
              <div className="mb-4 flex items-center justify-center">
                <Star className="h-8 w-8" />
              </div>
              <div className="mb-2 text-3xl font-bold">100%</div>
              <div className="text-emerald-100">Safety Commitment</div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-white p-8 shadow-none">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-emerald-100 p-3">
                <Waves className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="leading-relaxed text-gray-600">
              To provide safe, reliable, and comfortable maritime transportation
              services while delivering exceptional customer experiences through
              innovative booking solutions and professional service standards.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-8 shadow-none">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-blue-100 p-3">
                <Anchor className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="leading-relaxed text-gray-600">
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
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Get In Touch</h2>
            <p className="mx-auto max-w-2xl text-lg text-emerald-100">
              Ready to start your journey with us? Contact our team for
              bookings, inquiries, or any assistance you need.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {contactInfo.map(renderContactInfo)}
          </div>
        </div>
      </div>
    </div>
  );
}
