'use client';

import { motion, useInView, UseInViewOptions, Variants } from 'framer-motion';
import { useRef, ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';
type AnimationType = 'fade' | 'scale' | 'slide';

interface ScrollAnimationProps {
    children: ReactNode;
    className?: string;
    direction?: Direction;
    type?: AnimationType;
    delay?: number;
    duration?: number;
    viewport?: UseInViewOptions;
    once?: boolean;
}

export default function ScrollAnimation({
    children,
    className = "",
    direction = 'up',
    type = 'fade',
    delay = 0,
    duration = 0.5,
    viewport = { amount: 0.2 },
    once = true,
}: ScrollAnimationProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { ...viewport, once });

    const getVariants = (): Variants => {
        const variants = {
            hidden: { opacity: 0, x: 0, y: 0, scale: 1 },
            visible: {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                transition: {
                    duration,
                    delay,
                    type: "spring" as const,
                    stiffness: 50,
                    damping: 20
                }
            },
        };

        if (type === 'fade') {
            if (direction === 'up') variants.hidden.y = 50;
            if (direction === 'down') variants.hidden.y = -50;
            if (direction === 'left') variants.hidden.x = 50;
            if (direction === 'right') variants.hidden.x = -50;
        }

        if (type === 'scale') {
            variants.hidden.scale = 0.8;
            variants.hidden.opacity = 0;
        }

        if (type === 'slide') {
            if (direction === 'up') variants.hidden.y = 100;
            if (direction === 'down') variants.hidden.y = -100;
            if (direction === 'left') variants.hidden.x = 100;
            if (direction === 'right') variants.hidden.x = -100;
        }

        return variants;
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={getVariants()}
            className={className}
        >
            {children}
        </motion.div>
    );
}
