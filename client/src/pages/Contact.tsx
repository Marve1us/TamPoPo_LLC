import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thanks for reaching out! We'll reply within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(values: InsertContact) {
    mutation.mutate(values);
  }

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold mb-4 neon-text">Contact Us</h1>
          <p className="text-gray-400 mb-6">
            Have questions about our AI solutions? Send us a message or give us a call.
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-2 rounded-lg">
            <span className="text-gray-400 text-sm">Tech Assistance:</span>
            <a href="tel:+18323508143" className="text-primary font-bold" data-testid="link-phone">(832) 350-8143</a>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input 
                        data-testid="input-name"
                        placeholder="Your Name" 
                        {...field} 
                        className="bg-black/50 border-white/10" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input 
                        data-testid="input-email"
                        placeholder="you@example.com" 
                        {...field} 
                        className="bg-black/50 border-white/10" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        data-testid="input-message"
                        placeholder="How can we help you?" 
                        {...field} 
                        className="bg-black/50 border-white/10 min-h-[150px]" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                data-testid="button-submit"
                type="submit" 
                disabled={mutation.isPending}
                className="w-full font-bold uppercase"
              >
                {mutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
