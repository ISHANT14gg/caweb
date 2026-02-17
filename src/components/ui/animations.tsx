'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

/* ───────────────────────────────────────────────
   Animated Counter – counts from 0 to target
   Triggers when element scrolls into view
   ─────────────────────────────────────────────── */

export function AnimatedCounter({
    target,
    suffix = '',
    duration = 2000,
}: {
    target: number;
    suffix?: string;
    duration?: number;
}) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        const startTime = Date.now();
        const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));

            if (progress >= 1) {
                setCount(target);
                clearInterval(timer);
            }
        }, 16);

        return () => clearInterval(timer);
    }, [hasStarted, target, duration]);

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    );
}

/* ───────────────────────────────────────────────
   Scroll Progress Bar – thin gold line at top
   ─────────────────────────────────────────────── */

export function ScrollProgressBar() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left"
            style={{
                scaleX,
                background: 'linear-gradient(90deg, #C9A227, #C8A951)',
            }}
        />
    );
}

/* ───────────────────────────────────────────────
   Stagger Container + Item – for cascading reveals
   ─────────────────────────────────────────────── */

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

export const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

/* ───────────────────────────────────────────────
   Fade-in-up animation variant for sections
   ─────────────────────────────────────────────── */

export const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

export const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

export const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

/* ───────────────────────────────────────────────
   Typewriter Headline – reveals phrases one by one
   with a blinking cursor effect
   ─────────────────────────────────────────────── */

interface HeadlinePart {
    text: string;
    highlight?: boolean;
}

export function TypewriterHeadline({
    parts,
    className = '',
}: {
    parts: HeadlinePart[];
    className?: string;
}) {
    return (
        <h1 className={className}>
            {parts.map((part, idx) => (
                <motion.span
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: idx * 0.4,
                        duration: 0.5,
                        ease: 'easeOut',
                    }}
                    className={`inline ${part.highlight ? 'text-gold' : ''}`}
                >
                    {part.text}{' '}
                </motion.span>
            ))}
            {/* Blinking cursor */}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                    delay: parts.length * 0.4,
                    duration: 0.8,
                    repeat: 3,
                    ease: 'linear',
                }}
                className="inline-block w-[3px] h-[1em] bg-gold ml-1 align-middle"
            />
        </h1>
    );
}

/* ───────────────────────────────────────────────
   Parallax Section – subtle vertical parallax
   Wraps children in a container with scroll offset
   ─────────────────────────────────────────────── */

export function ParallaxSection({
    children,
    speed = 0.15,
    className = '',
}: {
    children: React.ReactNode;
    speed?: number;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <motion.div style={{ y }}>
                {children}
            </motion.div>
        </div>
    );
}

/* ───────────────────────────────────────────────
   Animated Divider – gold accent line that
   expands from center on scroll
   ─────────────────────────────────────────────── */

export function AnimatedDivider({
    color = '#C9A227',
    maxWidth = 120,
    thickness = 2,
    className = '',
}: {
    color?: string;
    maxWidth?: number;
    thickness?: number;
    className?: string;
}) {
    return (
        <div className={`flex justify-center ${className}`}>
            <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: maxWidth, opacity: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                    height: thickness,
                    background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                    borderRadius: thickness,
                }}
            />
        </div>
    );
}
