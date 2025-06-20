import {
  Shield,
  FileText,
  CreditCard,
  AlertTriangle,
  Phone,
  Mail,
} from "lucide-react";

// Types
interface TermsSection {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  bgGradient: string;
  iconBgColor: string;
  iconColor: string;
  subsections?: {
    title: string;
    items: string[];
  }[];
  content?: string[];
  additionalContent?: {
    title: string;
    description: string;
  }[];
}

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
}

export default function TermsAndConditions() {
  // Data arrays
  const termsData: TermsSection[] = [
    {
      id: "booking-payment",
      title: "Booking and Payment",
      icon: CreditCard,
      bgGradient: "from-emerald-50 to-teal-50",
      iconBgColor: "bg-emerald-100",
      iconColor: "text-emerald-600",
      subsections: [
        {
          title: "Booking Policy",
          items: [
            "All reservations are made on a first-come, first-served basis, subject to availability.",
            "Passengers can book seats online through our official website or at designated booking agents.",
            "Bookings are considered tentative until full payment has been made and confirmed.",
            "Passengers must provide accurate information when booking.",
          ],
        },
        {
          title: "Payment Policy",
          items: [
            "Full payment is required to secure a seat. No partial payments are accepted.",
            "Accepted payment methods include: E-wallets (GCash and Maya)",
            "Upon successful payment, passengers will receive a booking confirmation via email or SMS and afterward passenger can download their e-ticket in MY TICKET tab.",
          ],
        },
      ],
    },
    {
      id: "ticket-issuance",
      title: "Ticket Issuance",
      icon: FileText,
      bgGradient: "from-blue-50 to-indigo-50",
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      content: [
        "Your e-ticket must be presented (printed or digital) along with a valid ID upon check-in.",
        "A booking reference number will be provided; please keep this safe for tracking and inquiries.",
      ],
    },
    {
      id: "booking-errors",
      title: "Booking Errors",
      icon: AlertTriangle,
      bgGradient: "from-amber-50 to-orange-50",
      iconBgColor: "bg-amber-100",
      iconColor: "text-amber-600",
      content: [
        "It is the responsibility of the passenger to ensure correct information is entered during booking (name, date, destination, contact info).",
        "Ceamark Shipping Lines is not liable for errors made during booking. Modifications may be allowed under the conditions as stated.",
      ],
    },
    {
      id: "additional-terms",
      title: "Additional Terms",
      icon: Shield,
      bgGradient: "from-purple-50 to-pink-50",
      iconBgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      additionalContent: [
        {
          title: "Cancellation and Refunds",
          description:
            "Cancellation policies vary by route and timing. Please refer to our refund policy for detailed information about cancellation fees and refund processes.",
        },
        {
          title: "Safety and Security",
          description:
            "All passengers must comply with safety regulations and security procedures. Prohibited items are not allowed on board.",
        },
        {
          title: "Liability",
          description:
            "Travel Express operates under maritime laws and regulations. Our liability is subject to the terms and conditions of carriage.",
        },
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
      value: "support@travelexpress.com",
    },
  ];

  // Component renderers
  const renderTermsSection = (section: TermsSection) => (
    <div
      key={section.id}
      className="bg-white rounded-xl border border-gray-100 overflow-hidden"
    >
      <div
        className={`bg-gradient-to-r ${section.bgGradient} px-6 py-4 border-b border-gray-100`}
      >
        <div className="flex items-center gap-3">
          <div className={`p-2 ${section.iconBgColor} rounded-lg`}>
            <section.icon className={`h-5 w-5 ${section.iconColor}`} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            {section.title}
          </h3>
        </div>
      </div>
      <div className="p-6">
        {section.subsections && (
          <div className="space-y-4">
            {section.subsections.map((subsection, index) => (
              <div key={index}>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  {subsection.title}
                </h4>
                <ul className="space-y-2 text-gray-700 ml-4">
                  {subsection.items.map((item, itemIndex) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        {section.content && (
          <div className="space-y-3 text-gray-700">
            {section.content.map((content, index) => (
              <p key={index}>{content}</p>
            ))}
          </div>
        )}
        {section.additionalContent && (
          <div className="space-y-4">
            {section.additionalContent.map((item, index) => (
              <div key={index}>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const renderContactInfo = (contact: ContactInfo, index: number) => (
    <div key={index} className="flex items-center gap-3">
      <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
        <contact.icon className="h-5 w-5" />
      </div>
      <div>
        <p className="font-semibold">{contact.title}</p>
        <p className="text-emerald-100">{contact.value}</p>
      </div>
    </div>
  );
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Terms and Conditions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using our
            travel booking services. By accessing or using Travel Express, you
            agree to be bound by these terms.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Last updated: June 20, 2025
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">{termsData.map(renderTermsSection)}</div>

        {/* Contact Information */}
        <div className="mt-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl text-white p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Need Help?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map(renderContactInfo)}
          </div>
          <div className="mt-6 text-center">
            <p className="text-emerald-100">
              For any questions or concerns regarding these terms and
              conditions, please don't hesitate to contact us.
            </p>
          </div>
        </div>

        {/* Agreement Notice */}
        <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-emerald-100 rounded-full mt-1">
              <Shield className="h-4 w-4 text-emerald-600" />
            </div>
            <div>
              <h4 className="font-semibold text-emerald-900 mb-2">
                Agreement to Terms
              </h4>
              <p className="text-emerald-800">
                By using our services, you acknowledge that you have read,
                understood, and agree to be bound by these terms and conditions.
                These terms may be updated from time to time, and continued use
                of our services constitutes acceptance of any changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
