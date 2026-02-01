"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, X } from "lucide-react";

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ delay: 1.3 }}
        className="fixed bottom-6 left-4 sm:left-6 z-40"
      >
        <div className="relative bg-slate-900/95 backdrop-blur-md rounded-full p-2 shadow-xl border border-white/10">
          <div className="flex items-center gap-2">
            <a
              href="tel:+919876543210"
              className="bg-teal-600 hover:bg-teal-700 text-white px-3 sm:px-4 py-2.5 rounded-full flex items-center gap-2 font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">Phone</span>
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-3 sm:px-4 py-2.5 rounded-full flex items-center gap-2 font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">WhatsApp</span>
            </a>
            <button
              onClick={() => setIsVisible(false)}
              className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition-colors ml-1"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
