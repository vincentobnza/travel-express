import TextField from "@/components/TextField";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Banknote,
  ChartArea,
  Copy,
  MoveLeft,
  NotebookTabs,
  PackageCheck,
  Upload,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Booking() {
  const navigate = useNavigate();
  return (
    <div className="flex w-full flex-col items-start gap-2 rounded-lg border border-zinc-200 bg-white p-8">
      <Button
        onClick={() => navigate(-1)}
        variant="ghost"
        className="mb-4 rounded"
      >
        <MoveLeft />
        Back to Dashboard
      </Button>
      <div className="mb-10 flex w-full justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Booking Page</h1>
          <p className="text-sm text-zinc-600">
            Welcome to the booking page for passengers.
          </p>
        </div>

        <Button
          onClick={() => navigate(-1)}
          variant="outline"
          className="rounded"
        >
          <ChartArea />
          View Seat Status
        </Button>
      </div>

      <Form />
    </div>
  );
}

const Form = () => {
  return (
    <form className="w-full flex-row space-y-8 md:flex md:space-x-8">
      <div className="w-full space-y-4 md:w-1/2">
        <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2">
          <TextField
            label="Seat No."
            placeholder="Enter your seat number"
            className="w-full"
            name="seatNo"
            required
            type="number"
            max={5}
            onChange={(e) => {
              const value = parseInt(e.target.value, 10);
              if (!isNaN(value) && value > 5) {
                toast.error("Seat number cannot exceed 5.");
                e.target.value = "";
              }
            }}
          />
          <div className="flex flex-col gap-2">
            <label className="-mt-0.5 text-sm text-gray-700">
              Type of Passenger
              <span className="ml-1 text-red-200">*</span>
            </label>
            <SelectPassengerType />
          </div>
        </div>

        <TextField
          label="Full Name"
          placeholder="Enter your full name"
          className="w-full"
          name="fullName"
          required
          type="text"
        />

        <div className="flex w-full gap-3">
          <TextField
            label="Contact Number"
            placeholder="Enter your contact number"
            className="w-full md:w-3/4"
            name="contactNumber"
            required
            type="tel"
          />
          <TextField
            label="Contact Number"
            placeholder="Enter your contact number"
            className="w-full md:w-1/2"
            name="contactNumber"
            required
            type="tel"
          />
        </div>

        <TextField
          label="Address"
          placeholder="Enter your address"
          className="w-full"
          name="address"
          required
          type="text"
        />

        <TextField label="Upload your ID" name="id" required type="file" />

        <div className="aspect-video w-full overflow-hidden rounded border border-zinc-200 bg-zinc-100">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGh5WFH8TOIfRKxUrIgJZoDCs1yvQ4hIcppw&s"
            alt="id"
            className="h-full w-full overflow-hidden rounded object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex w-full flex-col gap-3 md:w-1/2">
        <div className="h-40 w-full rounded-lg border border-zinc-200">
          <div className="w-full border-b border-zinc-200 bg-zinc-50 p-5">
            <h2 className="flex items-center gap-3 text-lg font-semibold text-zinc-800">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100">
                <NotebookTabs className="h-4 w-4 text-amber-600" />
              </span>
              Booking Details
            </h2>
          </div>
        </div>{" "}
        <div className="w-full rounded-lg border border-zinc-200 bg-white">
          <div className="w-full border-b border-zinc-200 bg-gradient-to-r from-zinc-100 to-zinc-100/50 px-6 py-4">
            <h2 className="flex items-center gap-3 text-lg font-semibold text-zinc-800">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                <Banknote className="h-4 w-4 text-blue-600" />
              </span>
              Payment Method
            </h2>
          </div>

          <div className="p-6">
            <div className="rounded border border-zinc-200 bg-gradient-to-br from-blue-50 via-white to-blue-50/30 p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.seeklogo.com/logo-png/52/1/gcash-logo-png_seeklogo-522261.png"
                    alt="gcash"
                    className="size-8"
                  />
                  <div>
                    <h3 className="font-semibold text-zinc-800">GCash</h3>
                    <p className="text-xs text-zinc-500">Digital Wallet</p>
                  </div>
                </div>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                  Active
                </span>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-zinc-700">
                  Reference Number
                </p>
                <div className="flex items-center justify-between rounded border border-zinc-100 bg-white/80 p-3">
                  <span className="font-mono text-lg font-bold tracking-wider text-zinc-800">
                    095647365748
                  </span>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="h-8 rounded px-3 text-xs text-zinc-600 hover:bg-zinc-100"
                    onClick={() => {
                      navigator.clipboard.writeText("095647365748");
                      toast.success("Reference number copied!");
                    }}
                  >
                    <Copy />
                    Copy
                  </Button>
                </div>
              </div>

              <div className="mt-4 rounded border border-amber-200 bg-amber-50 p-3">
                <p className="text-xs text-amber-700">
                  <span className="font-medium">Note:</span> Please save this
                  reference number for your transaction records.
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-col items-center justify-center gap-4 rounded border border-zinc-200 bg-zinc-50 p-12">
              <Button className="rounded" variant="outline">
                <Upload />
                Upload
              </Button>

              <h4 className="text-xs text-zinc-500">Upload Proof of Payment</h4>
            </div>
          </div>
        </div>
        <div className="w-full space-y-3">
          <Button
            className="text-md h-14 w-full rounded-lg bg-gradient-to-r from-emerald-600 to-green-600"
            onClick={() => toast.success("Booking successful!")}
          >
            <PackageCheck />
            Confirm Payment
          </Button>
          <Button
            className="text-md h-14 w-full rounded-lg"
            onClick={() => toast.success("Booking successful!")}
            variant="outline"
          >
            Cancel Booking
          </Button>
        </div>
      </div>
    </form>
  );
};

const SelectPassengerType = () => {
  return (
    <Select>
      <SelectTrigger className="mb-1 w-full">
        <SelectValue placeholder="Select type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Type</SelectLabel>
          <SelectItem value="regular">Regular</SelectItem>
          <SelectItem value="students">Students</SelectItem>
          <SelectItem value="senior-citizen">Senior Citizen</SelectItem>
          <SelectItem value="child">Child</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
