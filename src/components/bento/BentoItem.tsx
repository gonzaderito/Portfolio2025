"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface BentoItemProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  id?: string;
  style?: React.CSSProperties;
}

export default function BentoItem({ children, className, onClick, id, style }: BentoItemProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`bg-(--color-bento) rounded-2xl p-4 shadow-lg ${className ?? ""}`}
      onClick={onClick}
      id={id}
      style={style}
    >
      {children}
    </motion.div>
  );
}
