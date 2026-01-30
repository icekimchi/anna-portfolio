'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-[calc(84vh-72px)] overflow-hidden bg-stone-50">

      <div className="mx-auto max-w-7xl h-full flex flex-col justify-between p-6 md:px-4 md:py-10">

        {/* Top Section */}
        <div className="w-full flex justify-between items-start z-10">
          <div className="hidden md:block w-1/3" />

          {/* Welcome Message */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/3 text-right"
          >
            <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-black mb-2">
              Welcome
            </h2>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-light">
              I craft digital experiences with<br />
              <span className="text-black font-medium">code</span> and{' '}
              <span className="text-black font-medium">passion</span>.
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end z-10">
          
          {/* Left Bottom */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-left"
          >
            <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-black mb-2">
              Anna Park
            </h2>
            <p className="text-xl md:text-2xl text-gray-400">
              Software Engineer &<br className="md:hidden" /> Product Designer
            </p>
          </motion.div>

          {/* Right Bottm */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="hidden md:block text-lg text-green-800 animate-pulse"
          >
            SCROLL TO EXPLORE ↓
          </motion.div>
        </div>

      </div>
    </section>
  );
}
