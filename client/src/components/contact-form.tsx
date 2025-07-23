import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to send message",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    submitMutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-neutral-dark mb-2">Thank you!</h3>
        <p className="text-neutral-gray mb-6">
          Your message has been sent successfully. We'll get back to you within 24 hours.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-primary-green text-primary-green hover:bg-primary-green hover:text-white"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-xl p-8">
      <h3 className="text-2xl font-semibold text-neutral-dark mb-6">Send us a message</h3>
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-neutral-dark">
            Name *
          </Label>
          <Input
            id="name"
            {...form.register("name")}
            placeholder="Your full name"
            className="mt-2 focus:ring-primary-green focus:border-primary-green"
          />
          {form.formState.errors.name && (
            <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-medium text-neutral-dark">
            Email *
          </Label>
          <Input
            id="email"
            type="email"
            {...form.register("email")}
            placeholder="your.email@company.com"
            className="mt-2 focus:ring-primary-green focus:border-primary-green"
          />
          {form.formState.errors.email && (
            <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="phone" className="text-sm font-medium text-neutral-dark">
            Phone *
          </Label>
          <Input
            id="phone"
            type="tel"
            {...form.register("phone")}
            placeholder="+1 (555) 123-4567"
            className="mt-2 focus:ring-primary-green focus:border-primary-green"
          />
          {form.formState.errors.phone && (
            <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="message" className="text-sm font-medium text-neutral-dark">
            Message *
          </Label>
          <Textarea
            id="message"
            rows={4}
            {...form.register("message")}
            placeholder="Tell us about your packaging requirements..."
            className="mt-2 resize-none focus:ring-primary-green focus:border-primary-green"
          />
          {form.formState.errors.message && (
            <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={submitMutation.isPending}
          className="w-full bg-primary-green hover:bg-secondary-green text-white font-semibold py-4"
        >
          {submitMutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </div>
  );
}
