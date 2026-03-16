/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Scene from './components/Scene';
import Navbar from './components/Navbar';
import { ArrowRight, PlaneTakeoff, MapPin, ShoppingBag } from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-zinc-50 overflow-x-hidden selection:bg-zinc-800 selection:text-white">
      <Navbar />
      
      {/* Hero Section with 3D Scene */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Scene />
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#d6c5b3] animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-300">New Collection Available</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-6"
          >
            <span className="block text-white">NOXXE</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col items-center gap-2 mb-10"
          >
            <p className="text-xl md:text-2xl text-zinc-300 font-light tracking-wide">
              Minimal. Effortless. Everyday.
            </p>
            <p className="text-sm md:text-base text-zinc-500 font-light tracking-widest uppercase">
              ลุคประจำวัน ที่ดูดีแบบไม่ต้องพยายาม
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a href="#shop" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-zinc-950 font-bold uppercase tracking-widest overflow-hidden rounded-none transition-transform hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                Shop Collection <ShoppingBag className="w-4 h-4" />
              </span>
              <div className="absolute inset-0 h-full w-0 bg-[#d6c5b3] transition-all duration-300 ease-out group-hover:w-full z-0" />
            </a>
            <a href="#about" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">
              Discover Brand
            </a>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 rotate-90 mb-8">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-zinc-500 to-transparent" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-12"
          >
            About <span className="text-[#d6c5b3]">Noxxe</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-lg md:text-xl text-zinc-400 font-light leading-relaxed"
          >
            <p>
              Noxxe คือเสื้อผ้าที่ออกแบบมาเพื่อทุกวันของคนที่อยากดูดีแบบไม่ต้องพยายามมาก
              เราเชื่อว่าความเรียบไม่ได้แปลว่าธรรมดา แต่คือการเลือกสิ่งที่พอดี ชัดเจน และอยู่ได้นานกว่ากระแส
            </p>
            <p>
              Noxxe จึงเกิดขึ้นจากแนวคิดของ everyday look ลุคที่ใส่ได้จริงในชีวิตประจำวัน
              ไม่ว่าจะเป็นวันทำงาน วันเดินทาง วันไปคาเฟ่ หรือวันธรรมดาที่อยากรู้สึกมั่นใจขึ้นอีกนิด
            </p>
            <p>
              สไตล์ของเรามีกลิ่นของ airport look เรียบ คลีน สบาย แต่ยังดูมีรสนิยม
              เป็นเสื้อผ้าที่ช่วยให้คนใส่ดูดีในแบบที่ไม่ต้องพูดเยอะ
              เพราะรายละเอียดที่ดี เนื้อผ้าที่ใช่ และทรงที่คิดมาแล้ว จะทำหน้าที่ของมันเอง
            </p>
            <p className="text-white font-medium pt-6">
              Noxxe ไม่ได้ต้องการให้คุณแต่งตัวเยอะ เราแค่อยากให้คุณหยิบมาใส่ได้บ่อย ใส่ง่าย แมตช์ง่าย
              และยังรู้สึกว่า “นี่แหละตัวเรา”
            </p>
          </motion.div>
        </div>
      </section>

      {/* Airport Look Section */}
      <section id="airport" className="relative py-32 px-6 md:px-12 lg:px-24 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                <span className="text-[#d6c5b3]">01.</span> Airport Look
              </h2>
              <p className="text-zinc-400 max-w-md font-light">
                เรียบ คลีน สบาย แต่ยังดูมีรสนิยม แรงบันดาลใจจากลุคเดินทาง สู่การแต่งตัวในทุกวัน
              </p>
            </div>
            <a href="#shop" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-[#d6c5b3] transition-colors group">
              Shop The Look <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="md:col-span-7 relative aspect-[4/5] md:aspect-auto md:h-[800px] overflow-hidden group"
            >
              <img 
                src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop" 
                alt="Airport Fashion" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 text-xs font-mono uppercase tracking-widest bg-white/10 backdrop-blur-md border border-white/20">Comfortable</span>
                  <span className="px-3 py-1 text-xs font-mono uppercase tracking-widest bg-[#d6c5b3]/20 text-[#d6c5b3] backdrop-blur-md border border-[#d6c5b3]/30">Refined</span>
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight">The Minimalist Coat</h3>
              </div>
            </motion.div>

            <div className="md:col-span-5 flex flex-col gap-8">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-square overflow-hidden group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1550614000-4b95d415dc96?q=80&w=2070&auto=format&fit=crop" 
                  alt="Airport Lounge" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[30%]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#0a0a0a]/40 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-lg font-bold uppercase tracking-tight">Travel Ready</h3>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative aspect-[4/3] overflow-hidden group bg-zinc-900 p-8 flex flex-col justify-center"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <PlaneTakeoff className="w-32 h-32" />
                </div>
                <h4 className="text-xl font-bold uppercase tracking-tight mb-4 relative z-10">Brand DNA</h4>
                <ul className="space-y-4 relative z-10">
                  <li className="flex items-center gap-4 text-zinc-400 font-mono text-sm uppercase tracking-widest">
                    <span className="w-8 h-[1px] bg-[#d6c5b3]" /> เรียบ แต่ไม่จืด
                  </li>
                  <li className="flex items-center gap-4 text-zinc-400 font-mono text-sm uppercase tracking-widest">
                    <span className="w-8 h-[1px] bg-[#d6c5b3]" /> สบาย แต่ยังดูแพง
                  </li>
                  <li className="flex items-center gap-4 text-zinc-400 font-mono text-sm uppercase tracking-widest">
                    <span className="w-8 h-[1px] bg-[#d6c5b3]" /> ใส่ง่าย แต่มีคาแรกเตอร์
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Everyday Look Section */}
      <section id="street" className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                <span className="text-[#d6c5b3]">02.</span> Everyday Look
              </h2>
              <p className="text-zinc-400 max-w-md font-light">
                ลุคที่ใส่ได้จริงในชีวิตประจำวัน ไม่ว่าจะเป็นวันทำงาน วันเดินทาง หรือวันไปคาเฟ่
              </p>
            </div>
            <a href="#shop" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-[#d6c5b3] transition-colors group">
              Shop The Look <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5 flex flex-col gap-8 order-2 md:order-1">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-square overflow-hidden group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?q=80&w=2070&auto=format&fit=crop" 
                  alt="Everyday Style Detail" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[50%]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#0a0a0a]/30 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-lg font-bold uppercase tracking-tight">Clean Details</h3>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative aspect-[4/3] overflow-hidden group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1489987707023-af0824cdb11f?q=80&w=2070&auto=format&fit=crop" 
                  alt="Minimalist White Shirt" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-lg font-bold uppercase tracking-tight">Effortless White</h3>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="md:col-span-7 relative aspect-[4/5] md:aspect-auto md:h-[800px] overflow-hidden group order-1 md:order-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop" 
                alt="Everyday Fashion" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[40%]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 text-xs font-mono uppercase tracking-widest bg-white/10 backdrop-blur-md border border-white/20">Modern</span>
                  <span className="px-3 py-1 text-xs font-mono uppercase tracking-widest bg-[#d6c5b3]/20 text-[#d6c5b3] backdrop-blur-md border border-[#d6c5b3]/30">Confident</span>
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight">The Everyday Essential</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="relative py-32 px-6 md:px-12 lg:px-24 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              Shop <span className="text-[#d6c5b3]">Collection</span>
            </h2>
            <p className="text-zinc-400 font-light uppercase tracking-widest text-sm">
              Clean / Effortless / Modern / Everyday
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" 
                  alt="The Everyday Tee" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-6 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs">Quick Add</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-1">The Everyday Tee</h3>
                  <p className="text-xs text-zinc-500 uppercase">White / Cotton</p>
                </div>
                <span className="text-sm font-mono">฿990</span>
              </div>
            </motion.div>

            {/* Product 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1974&auto=format&fit=crop" 
                  alt="Airport Trousers" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[10%]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-6 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs">Quick Add</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-1">Airport Trousers</h3>
                  <p className="text-xs text-zinc-500 uppercase">Light Brown / Relaxed</p>
                </div>
                <span className="text-sm font-mono">฿1,890</span>
              </div>
            </motion.div>

            {/* Product 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1935&auto=format&fit=crop" 
                  alt="Minimalist Jacket" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[30%]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-6 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs">Quick Add</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-1">Minimalist Jacket</h3>
                  <p className="text-xs text-zinc-500 uppercase">Black / Tech Fabric</p>
                </div>
                <span className="text-sm font-mono">฿2,490</span>
              </div>
            </motion.div>

            {/* Product 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop" 
                  alt="Comfort Knit" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-6 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs">Quick Add</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-1">Comfort Knit</h3>
                  <p className="text-xs text-zinc-500 uppercase">Gray / Oversized</p>
                </div>
                <span className="text-sm font-mono">฿1,590</span>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-16 text-center">
            <a href="#" className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
              View All Products
            </a>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-32 px-6 bg-[#0a0a0a] text-center border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-light tracking-wide mb-6"
          >
            "Noxxe is not about dressing louder.<br/>It’s about dressing clearer."
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 font-light"
          >
            Noxxe ไม่ได้ทำเสื้อผ้าเพื่อให้คุณดูเยอะขึ้น แต่ทำให้คุณดูชัดขึ้น ในแบบของตัวเอง
          </motion.p>
        </div>
      </section>

      {/* Marquee / Footer */}
      <footer className="bg-zinc-900 text-zinc-50 py-12 overflow-hidden border-t border-white/10">
        <div className="flex whitespace-nowrap opacity-50">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            className="flex items-center gap-8 text-4xl md:text-6xl font-black uppercase tracking-tighter"
          >
            <span>NOXXE</span>
            <span className="text-[#d6c5b3]">•</span>
            <span>Minimal</span>
            <span className="text-[#d6c5b3]">•</span>
            <span>Effortless</span>
            <span className="text-[#d6c5b3]">•</span>
            <span>Everyday</span>
            <span className="text-[#d6c5b3]">•</span>
            <span>NOXXE</span>
            <span className="text-[#d6c5b3]">•</span>
            <span>Minimal</span>
            <span className="text-[#d6c5b3]">•</span>
            <span>Effortless</span>
            <span className="text-[#d6c5b3]">•</span>
            <span>Everyday</span>
            <span className="text-[#d6c5b3]">•</span>
            <span>NOXXE</span>
            <span className="text-[#d6c5b3]">•</span>
            <span>Minimal</span>
            <span className="text-[#d6c5b3]">•</span>
            <span>Effortless</span>
            <span className="text-[#d6c5b3]">•</span>
            <span>Everyday</span>
            <span className="text-[#d6c5b3]">•</span>
          </motion.div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-mono font-medium text-zinc-500">
          <p>&copy; 2026 NOXXE. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Line Official</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

