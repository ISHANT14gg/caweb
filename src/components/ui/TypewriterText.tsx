'use client';

import { motion } from 'framer-motion';

interface TypewriterTextProps {
    text: string;
    className?: string;
    delay?: number;
}

export default function TypewriterText({ text, className = "", delay = 0 }: TypewriterTextProps) {
    const letters = Array.from(text);

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: delay }
        })
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            } as const
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            } as const
        }
    };

    return (
        <motion.span
            className={`${className} inline-block overflow-hidden`}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index} className="inline-block relative">
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.span>
    );
}
