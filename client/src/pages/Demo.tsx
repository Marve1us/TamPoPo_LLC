import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  date: z.string().min(1, "Preferred date is required"),
  message: z.string().optional(),
});

export default function Demo() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Demo Request Received",
      description: "We'll be in touch shortly to confirm your time slot.",
    });
    form.reset();
  }

  return (
    <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-display font-bold mb-6 neon-text">See the Future</h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Schedule a personalized demo to see how our AI agents can transform your business operations.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center text-gray-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 border border-primary/20">
                  <Calendar className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">Flexible Scheduling</h3>
                  <p className="text-sm text-gray-400">Choose a time that works for you</p>
                </div>
              </div>
              
              <div className="flex items-center text-gray-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 border border-primary/20">
                  <Clock className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">30-Minute Overview</h3>
                  <p className="text-sm text-gray-400">Concise, impactful demonstration</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-card border-primary/20 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <CardHeader>
              <CardTitle className="font-display text-2xl">Book Your Demo</CardTitle>
              <CardDescription>Fill out the form below to get started.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="bg-black/50 border-white/10 focus:border-primary/50" />
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
                        <FormLabel>Work Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@company.com" {...field} className="bg-black/50 border-white/10 focus:border-primary/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Inc" {...field} className="bg-black/50 border-white/10 focus:border-primary/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Date/Time</FormLabel>
                        <FormControl>
                          <Input type="datetime-local" {...field} className="bg-black/50 border-white/10 focus:border-primary/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-primary text-black font-bold uppercase hover:bg-white transition-colors">
                    Confirm Booking
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}