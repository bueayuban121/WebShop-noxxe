import { Menu, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="flex items-center gap-2">
        <span className="text-2xl font-black tracking-tighter text-white uppercase">NOXXE</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <a href="#about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-widest">About</a>
        <a href="#airport" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-widest">Airport Look</a>
        <a href="#street" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-widest">Everyday Look</a>
        <a href="#shop" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-widest">Shop</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-zinc-400 hover:text-white transition-colors">
          <ShoppingBag className="w-5 h-5" />
        </button>
        <button className="p-2 text-zinc-400 hover:text-white transition-colors md:hidden">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </motion.nav>
  );
}
