import TextField from "@/components/TextField";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Smartphone, Clock } from "lucide-react";
import { useActionState } from "react";

export default function ContactUs() {
  return (
    <div className="w-full min-h-screen bg-white flex p-12 flex-col items-center">
      <div className="w-full max-w-screen-xl mx-auto flex space-x-8 p-5">
        <RightBanner />
        <Form />
      </div>
    </div>
  );
}

const RightBanner = () => {
  const contactInfo = [
    {
      icon: <MapPin className="size-4 text-emerald-500" />,
      title: "Office Address",
      details: [
        "Cenamark Shipping Lines",
        "Baranggay Conception, Agtuya Palawan",
      ],
    },
    {
      icon: <Phone className="size-4 text-emerald-500" />,
      title: "Phone Number",
      details: ["Globe: 09123456779", "Smart: 09123456780"],
    },
    {
      icon: <Smartphone className="size-4 text-emerald-500" />,
      title: "Facebook Page / Messenger",
      details: ["facebook.com/cenamarkferry", "Send us a message on Facebook!"],
    },
    {
      icon: <Mail className="size-4 text-emerald-500" />,
      title: "Email Address",
      details: ["support@cenamarkferry.com"],
    },
    {
      icon: <Clock className="size-4 text-emerald-500" />,
      title: "Office Hours",
      details: ["Monday to Saturday: 8:00 AM - 5:00 PM", "Sunday: Closed"],
    },
  ];
  return (
    <div className="w-1/2 flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Contact Us</h1>
      <p>
        Got questions or need help with your booking? We're here to assists you.
      </p>

      <div className="w-full grid md:grid-cols-2 gap-2 mt-8">
        {contactInfo.map((info, index) => (
          <li
            key={index}
            className="flex items-start mb-4 border rounded-lg bg-zinc-50 border-zinc-200 p-5"
          >
            <div className="mr-4 mt-1">{info.icon}</div>
            <div>
              <h2 className="font-semibold mb-2">{info.title}</h2>
              <ul>
                {info.details.map((detail, idx) => (
                  <li key={idx} className="text-sm text-gray-700">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

type ActionState = {
  error?: string;
  success?: boolean;
  message?: string;
};
const Form = () => {
  const [state, action, pending] = useActionState(onSubmit, undefined);

  async function onSubmit(_: ActionState | undefined, formData: FormData) {
    const fullName = formData.get("fullName")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const message = formData.get("message")?.toString() || "";
    // Perform validation
    if (!fullName || !email || !message) {
      return { error: "All fields are required." };
    }

    // Simulate sending the message
    console.log("Message sent:", { fullName, email, message });
    return { success: true, message: "Message sent successfully!" };
  }

  return (
    <div className="w-1/2 flex-1 border border-zinc-200 rounded-lg bg-zinc-50 flex flex-col gap-4 p-8">
      <h1 className="text-xl font-medium mb-8">
        Feel free to drop us line below.
      </h1>

      <form className="h-full flex flex-col gap-4" action={action}>
        <TextField
          label="Full Name"
          name="fullName"
          placeholder="Enter your full name"
        />
        <TextField
          label="Email Address"
          name="email"
          placeholder="Enter your email address"
        />

        <textarea
          className="w-full flex-grow p-3 border border-zinc-300 rounded-lg"
          placeholder="Type your message here"
          rows={5}
          name="message"
        ></textarea>

        {state?.error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm">
            {state.error}
          </div>
        )}
        <Button className="h-12" disabled={pending}>
          {pending ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
};
