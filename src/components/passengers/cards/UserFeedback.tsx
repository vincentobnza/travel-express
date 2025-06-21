import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function UserFeedback() {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    rating: 5,
    category: "general",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after showing success message
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
      setFeedback({
        name: "",
        email: "",
        rating: 5,
        category: "general",
        message: "",
      });
    }, 2000);
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFeedback((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="mx-4 mb-6">
      {" "}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button className="w-full cursor-pointer rounded-lg border border-green-100 bg-gradient-to-br from-emerald-50 to-white p-4 text-left transition-all hover:border-emerald-200 hover:shadow-md">
            <div className="mb-3 flex items-center">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                  <svg
                    className="h-4 w-4 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <h4 className="text-sm font-semibold text-emerald-900">
                  Share Your Experience
                </h4>
              </div>
            </div>
            <p className="mb-3 text-xs leading-relaxed text-emerald-700">
              Help us improve our services by sharing your feedback and
              suggestions.
            </p>
          </button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md">
          {isSubmitted ? (
            <div className="py-8 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-medium text-gray-900">
                Thank you for your feedback!
              </h3>
              <p className="text-sm text-gray-600">
                We appreciate your input and will use it to improve our
                services.
              </p>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="text-left">
                  Share Your Feedback
                </DialogTitle>
                <DialogDescription className="text-left">
                  Help us improve by sharing your experience with our travel
                  services.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={feedback.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={feedback.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Rating</Label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleInputChange("rating", star)}
                        className="text-2xl transition-colors hover:scale-110"
                      >
                        <span
                          className={
                            star <= feedback.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }
                        >
                          ★
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    value={feedback.category}
                    onChange={(e) =>
                      handleInputChange("category", e.target.value)
                    }
                    className="border-input bg-background ring-offset-background focus:ring-ring w-full rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-offset-2"
                  >
                    <option value="general">General Feedback</option>
                    <option value="booking">Booking Experience</option>
                    <option value="customer-service">Customer Service</option>
                    <option value="website">Website/App</option>
                    <option value="travel-experience">Travel Experience</option>
                    <option value="suggestion">Suggestion</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    placeholder="Tell us about your experience..."
                    rows={4}
                    value={feedback.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className="border-input bg-background ring-offset-background focus:ring-ring w-full resize-none rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-offset-2"
                    required
                  />
                </div>

                <DialogFooter>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsOpen(false)}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <svg
                          className="mr-2 -ml-1 h-4 w-4 animate-spin text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Submit Feedback"
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
