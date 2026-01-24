import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$499",
      description: "Perfect for small local businesses starting their automation journey.",
      features: [
        "Modern Landing Page",
        "Basic SEO Setup",
        "Contact Form Automation",
        "Google Business Profile Setup",
        "Email Support"
      ]
    },
    {
      name: "Growth",
      price: "$1,299",
      description: "Complete solution for businesses ready to scale aggressively.",
      popular: true,
      features: [
        "5-Page AI Website",
        "Advanced SEO Package",
        "AI Chatbot Integration",
        "CRM Setup",
        "Priority Support",
        "Monthly Performance Report"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored AI infrastructure for established organizations.",
      features: [
        "Custom Web Application",
        "Full AI Voice Assistant",
        "Custom Integrations",
        "Dedicated Account Manager",
        "24/7 Phone Support",
        "SLA Guarantee"
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-display font-bold mb-6 neon-text">Transparent Pricing</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the package that fits your growth stage. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-xl border ${plan.popular ? 'bg-card border-primary shadow-[0_0_30px_rgba(0,255,213,0.15)]' : 'bg-black/40 border-white/10'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-black font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-gray-500">/one-time</span>}
              </div>
              <p className="text-gray-400 mb-8 h-12">{plan.description}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300 text-sm">
                    <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/demo">
                <Button className={`w-full ${plan.popular ? 'bg-primary text-black hover:bg-white' : 'bg-white/10 hover:bg-primary hover:text-black'} transition-all font-bold uppercase`}>
                  Get Started
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}