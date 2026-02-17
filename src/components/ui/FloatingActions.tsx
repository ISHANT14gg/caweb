'use client';

import { useState, useEffect } from 'react';
import { X, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_NUMBER = '919805931332';
const WHATSAPP_MESSAGE = encodeURIComponent(
    'Hello! I would like to know more about your services.'
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function FloatingActions() {
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    // Delay entrance so buttons don't flash on page load
    useEffect(() => {
        const showTimer = setTimeout(() => setIsVisible(true), 1500);
        return () => clearTimeout(showTimer);
    }, []);

    // Auto-show tooltip 2s after buttons appear, hide after 6s
    useEffect(() => {
        if (!isVisible) return;
        const show = setTimeout(() => setShowTooltip(true), 2000);
        const hide = setTimeout(() => setShowTooltip(false), 8000);
        return () => {
            clearTimeout(show);
            clearTimeout(hide);
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            {/* Tooltip bubble */}
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-xl shadow-xl border border-gray-100 px-4 py-3 mr-1 max-w-[210px] relative"
                    >
                        <button
                            onClick={() => setShowTooltip(false)}
                            className="absolute -top-2 -right-2 w-5 h-5 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
                            aria-label="Close"
                        >
                            <X className="h-3 w-3 text-gray-600" />
                        </button>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            <span className="font-semibold text-gray-900">Need help?</span>
                            <br />
                            Chat with us on WhatsApp 💬
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Buttons row */}
            <div className="flex flex-col items-center gap-3">
                {/* Email button */}
                <motion.a
                    href="mailto:jyotithakurassociates@gmail.com"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-gray-800 text-white hover:bg-gray-700 transition-colors rounded-full shadow-lg flex items-center justify-center"
                    aria-label="Email us"
                >
                    <Mail className="h-5 w-5" />
                </motion.a>

                {/* WhatsApp button */}
                <motion.a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    onClick={() => setShowTooltip(false)}
                    className="w-14 h-14 bg-[#25D366] hover:bg-[#1fbe5d] rounded-full shadow-lg flex items-center justify-center transition-colors"
                    aria-label="Chat on WhatsApp"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    </svg>
                </motion.a>
            </div>
        </div>
    );
}
