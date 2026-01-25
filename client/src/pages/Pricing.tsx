import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, Globe, MessageSquare, Phone, ClipboardList } from "lucide-react";

export default function Pricing() {
  const services = [
    {
      name: "AI Website",
      icon: Globe,
      tagline: "Your 24/7 Lead Machine",
      description: "A modern landing page that converts visitors into leads automatically.",
      setupPrice: "$500 – $3,000",
      monthlyPrice: null,
      popular: true,
      features: [
        "1–5 page responsive website",
        "Mobile-friendly design",
        "Contact form with email/text alerts",
        "Basic SEO setup (Google indexing)",
        "Google Business Profile setup"
      ]
    },
    {
      name: "AI Chatbot",
      icon: MessageSquare,
      tagline: "Your Lead Assistant",
      description: "A chatbot that answers FAQs and captures leads while you work.",
      setupPrice: "$200 – $1,000",
      monthlyPrice: "$29 – $99",
      features: [
        "Website chat widget",
        "Pre-trained FAQ responses",
        "Lead capture (name, phone, email)",
        "Sends leads to email or Google Sheets",
        "Custom branding"
      ]
    },
    {
      name: "AI Voice Assistant",
      icon: Phone,
      tagline: "Your Phone Receptionist",
      description: "An automated system that answers calls so you never miss a lead.",
      setupPrice: "$300 – $1,000",
      monthlyPrice: "$50 – $300",
      features: [
        "Answers calls professionally",
        "Takes messages",
        "Schedules appointments",
        "Forwards emergencies to you",
        "Works 24/7"
      ]
    },
    {
      name: "AI Simple CRM",
      icon: ClipboardList,
      tagline: "Your Lead Tracker",
      description: "A simple dashboard to track leads and jobs. Not Salesforce—just what you need.",
      setupPrice: "$300 – $2,000",
      monthlyPrice: "$29 – $99",
      features: [
        "List of all your leads",
        "Customer notes",
        "Job status tracking",
        "Google Calendar integration",
        "Export contacts anytime"
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-display font-bold mb-6 neon-text" data-testid="text-pricing-title">Simple Automation, Real Results</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Built for solo local businesses—garage door techs, pool cleaners, locksmiths, and more. 
            No complex enterprise software. Just the tools you need to capture more leads.
          </p>
        </div>

        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-medium">
            Setup + Monthly Options Available
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-xl border ${service.popular ? 'bg-card border-primary shadow-[0_0_30px_rgba(0,255,213,0.15)]' : 'bg-black/40 border-white/10'}`}
              data-testid={`card-service-${index}`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-black font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wider">
                  Core Offer
                </div>
              )}
              
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold">{service.name}</h3>
                  <p className="text-primary text-sm">{service.tagline}</p>
                </div>
              </div>

              <p className="text-gray-400 mb-6">{service.description}</p>
              
              <div className="bg-black/30 rounded-lg p-4 mb-6">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Setup</span>
                    <span className="text-xl font-bold text-white">{service.setupPrice}</span>
                  </div>
                  {service.monthlyPrice && (
                    <div className="flex justify-between items-center border-t border-white/10 pt-2">
                      <span className="text-gray-500 text-sm">Monthly</span>
                      <span className="text-lg font-bold text-primary">{service.monthlyPrice}<span className="text-sm text-gray-500">/mo</span></span>
                    </div>
                  )}
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300 text-sm">
                    <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/demo">
                <Button 
                  variant={service.popular ? "default" : "outline"}
                  className="w-full font-bold uppercase"
                  data-testid={`button-get-started-${index}`}
                >
                  Get Started
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-black/40 border border-white/10 rounded-xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-display font-bold mb-4">Bundle & Save</h2>
            <p className="text-gray-400 mb-6">
              Need multiple services? We offer custom packages for businesses that want the full automation stack. 
              Get a website, chatbot, and CRM working together seamlessly.
            </p>
            <Link href="/contact">
              <Button variant="outline" className="font-bold uppercase" data-testid="button-contact-bundle">
                Contact for Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
