import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import {
  container,
  item,
} from "../animations/variants";

export function Section({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.section
      className={`mx-auto max-w-6xl py-24 ${className}`}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.section>
  );
}

export const SectionItem = motion.div;
export const itemVariants = item;
