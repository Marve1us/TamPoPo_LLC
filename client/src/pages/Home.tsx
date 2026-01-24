import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Zap, Globe, BarChart3, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5 }}
            src={heroBg}
            alt="Cyberpunk Austin Cityscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
        </div>

        <div className="container relative z-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-black mb-6 text-white tracking-tight leading-tight">
              AI Automation for <br />
              <span className="text-primary neon-text">Texas Businesses</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
              Faster. Smarter. Scalable. TamPoPo LLC delivers futuristic AI tools so you can run 24/7 without hiring more staff.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo">
                <Button size="lg" className="bg-primary text-black font-bold uppercase tracking-widest text-lg px-8 py-6 hover:bg-white hover:shadow-[0_0_30px_var(--color-primary)] transition-all">
                  Schedule Free Demo
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary/10 font-bold uppercase tracking-widest text-lg px-8 py-6">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 bg-black/50 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Bot className="w-10 h-10 text-primary" />}
              title="24/7 AI Agents"
              description="Automated voice and chat assistants that never sleep, handling customer inquiries instantly."
            />
            <FeatureCard 
              icon={<Globe className="w-10 h-10 text-primary" />}
              title="Smart Websites"
              description="High-converting, SEO-optimized websites built to capture leads and showcase your brand."
            />
            <FeatureCard 
              icon={<BarChart3 className="w-10 h-10 text-primary" />}
              title="Growth CRM"
              description="Manage leads and automate follow-ups with our integrated CRM solutions."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-primary/20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">Ready to Upgrade Your Business?</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Join the AI revolution. Get a custom solution tailored for the Texas market.
          </p>
          <Link href="/contact">
            <Button className="bg-transparent border border-primary text-primary hover:bg-primary hover:text-black transition-all text-lg px-8 py-6 uppercase tracking-widest">
              Get Started Now <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <Card className="bg-card border-white/10 hover:border-primary/50 transition-colors group">
      <CardHeader>
        <div className="mb-4 p-3 bg-primary/10 w-fit rounded-lg group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <CardTitle className="text-2xl font-display">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}