import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "AI Voice & Chat Assistants",
      description: "Replace missed calls with instant AI responses. Our bots handle scheduling, FAQs, and lead qualification 24/7.",
      features: ["Natural Language Processing", "Appointment Booking", "Multi-channel Support", "Custom Personality"],
      price: "Starting at $299/mo"
    },
    {
      title: "Modern AI Websites",
      description: "Fast, secure, and beautiful websites designed to convert. Built with the latest tech stack for maximum performance.",
      features: ["SEO Optimization", "Mobile Responsive", "CMS Integration", "Analytics Dashboard"],
      price: "Custom Quotes"
    },
    {
      title: "Intelligent CRM Systems",
      description: "Stop losing leads in spreadsheets. Our CRM solutions automate follow-ups and keep your customer data organized.",
      features: ["Email Automation", "Pipeline Management", "Lead Scoring", "Integration Ready"],
      price: "Starting at $199/mo"
    }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-display font-bold mb-6 neon-text">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive AI solutions designed to modernize your business operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card border-white/10 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,255,213,0.1)] transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-display text-primary mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-lg text-gray-300">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-400">
                        <Check className="w-5 h-5 text-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6 border-t border-white/10">
                    <p className="text-lg font-bold text-white mb-4">{service.price}</p>
                    <Link href="/contact">
                      <Button className="w-full bg-white/5 hover:bg-primary hover:text-black border border-white/10 text-white transition-all">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}