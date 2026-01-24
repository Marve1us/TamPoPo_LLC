import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-black/80 border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-display font-bold text-primary cursor-pointer">TamPoPo</Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering Texas small businesses with affordable, futuristic AI automation tools. Compete with giants.
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-white mb-6 uppercase tracking-widest">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-primary transition-colors cursor-pointer">Home</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors cursor-pointer">Services</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors cursor-pointer">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors cursor-pointer">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-white mb-6 uppercase tracking-widest">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/legal" className="hover:text-primary transition-colors cursor-pointer">Disclaimer</Link></li>
              <li><Link href="/legal" className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</Link></li>
              <li><Link href="/legal" className="hover:text-primary transition-colors cursor-pointer">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-white mb-6 uppercase tracking-widest">Connect</h4>
            <p className="text-gray-400 text-sm mb-4">Austin, Texas</p>
            <a href="mailto:hello@tampopo.ai" className="text-primary hover:text-white transition-colors">hello@tampopo.ai</a>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© 2026 TamPoPo LLC. All rights reserved.</p>
          <div className="flex gap-4">
            {/* Social icons would go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}