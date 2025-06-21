import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  CreditCard,
  TicketX,
  MessageSquare,
  Send,
  User,
  Mail,
  FileText,
  AlertCircle,
} from "lucide-react";
import { toast } from "sonner";
import HeaderCard from "@/components/header-card";

const issueCategories = [
  {
    id: "cancel-request",
    title: "Cancel Request",
    icon: AlertCircle,
    description: "Request cancellation for your booking",
  },
  {
    id: "payment-issue",
    title: "Payment Issue",
    icon: CreditCard,
    description: "Problems with payments or refunds",
  },
  {
    id: "ticket-error",
    title: "Ticket Error",
    icon: TicketX,
    description: "Issues with your ticket or booking",
  },
  {
    id: "feedback-suggestion",
    title: "Feedback / Suggestion",
    icon: MessageSquare,
    description: "Share your feedback or suggestions",
  },
];

export default function HelpCenter() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      !selectedCategory ||
      !formData.name ||
      !formData.email ||
      !formData.description
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success(
      "Thank you for reporting the issue. Our team will review it and take appropriate action. You'll receive an update via email.",
    );

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      description: "",
    });
    setSelectedCategory(null);
  };

  const selectedCategoryData = issueCategories.find(
    (cat) => cat.id === selectedCategory,
  );
  return (
    <div className="flex w-full flex-col items-start gap-6 rounded-lg border border-zinc-200 bg-white p-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex w-full items-center justify-between">
          <HeaderCard
            title="Help Center"
            description="Need assistance? Report an issue or get help with your booking."
          />

          <Button
            className="rounded-md text-sm has-[>svg]:px-5"
            variant="outline"
          >
            <MessageCircle />
            Chat With US
          </Button>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Sidebar - Issue Categories */}
          <div className="space-y-4 lg:col-span-4">
            {issueCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full rounded-lg border-2 p-4 text-left transition-all${
                    selectedCategory === category.id
                      ? "border border-emerald-500 bg-emerald-50"
                      : "border-zinc-200 bg-white hover:border-zinc-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                        selectedCategory === category.id
                          ? "bg-emerald-100"
                          : "bg-zinc-100"
                      }`}
                    >
                      <IconComponent
                        className={`h-5 w-5 ${
                          selectedCategory === category.id
                            ? "fill-emerald-600 text-white"
                            : "text-zinc-600"
                        }`}
                      />
                    </div>
                    <div>
                      <h3
                        className={`font-semibold ${
                          selectedCategory === category.id
                            ? "text-emerald-900"
                            : "text-zinc-900"
                        }`}
                      >
                        {category.title}
                      </h3>
                      <p
                        className={`text-xs ${
                          selectedCategory === category.id
                            ? "text-emerald-700"
                            : "text-zinc-500"
                        }`}
                      >
                        {category.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>{" "}
          {/* Right Side - Report Form */}
          <div className="lg:col-span-8">
            <div className="rounded-xl border border-zinc-200 bg-white p-8 shadow-sm">
              <div className="mb-6 text-center">
                <h2 className="mb-2 text-2xl font-bold text-zinc-900">
                  {selectedCategoryData
                    ? selectedCategoryData.title
                    : "Report An Issue"}
                </h2>
                <p className="text-zinc-600">
                  Let us know your concern, and our support team will get back
                  to you shortly.
                </p>
              </div>

              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-700">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className="w-full rounded-lg border border-zinc-300 bg-white py-3 pr-4 pl-10 text-zinc-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full rounded-lg border border-zinc-300 bg-white py-3 pr-4 pl-10 text-zinc-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-700">
                    Subject
                  </label>
                  <div className="relative">
                    <FileText className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        handleInputChange("subject", e.target.value)
                      }
                      className="w-full rounded-lg border border-zinc-300 bg-white py-3 pr-4 pl-10 text-zinc-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                      placeholder="Brief subject of your issue"
                    />
                  </div>
                </div>

                {/* Description Field */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-zinc-700">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                    rows={6}
                    className="w-full rounded-lg border border-zinc-300 bg-white p-4 text-zinc-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                    placeholder="Please describe your issue in detail..."
                  />
                  <div className="mt-2 flex items-center gap-2 text-zinc-500">
                    <AlertCircle className="h-4 w-4" />
                    <span className="text-xs">
                      Please provide as much detail as possible
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    onClick={handleSubmit}
                    className="w-full rounded-lg bg-emerald-600 py-4 text-lg font-semibold hover:bg-emerald-700"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
