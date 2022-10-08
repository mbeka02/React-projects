import { motion } from "framer-motion";

export default function Backdrop({ children, Click }) {
  return (
    <motion.div
      className="backdrop"
      onClick={Click}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
