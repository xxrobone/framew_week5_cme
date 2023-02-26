import { motion } from "framer-motion";
// styles
import styles from "./Backdrop.module.scss";

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      className={styles.backdrop}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
