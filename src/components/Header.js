import NavLinks from "./NavLinks";
import { motion } from "framer-motion";

const Header = () => {
  const iconVariants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(226, 61, 49, 1)",
      transition: {
        default: { duration: 5, ease: "easeInOut" },
        fill: { duration: 5, ease: [1, 0, 0.8, 1] },
      },
    },
  };

  return (
    <header className="header">
      <motion.svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 637.66 285.07">
        <motion.path
          className="item"
          d="m5.36,282.34L195.25,56.9,142.9,2.5c93.62,0,89.77-.03,187.81.37L95.14,282.56l-89.77-.23ZM301.69,60.56L350.55,3.36c148.68-1.33,6.44-.34,155.16-.34,71.47,0,129.45,39.75,129.45,88.77s-57.98,88.77-129.45,88.77c-163.78,0-36.36.11-200.74.11-20.6,24.34-64.42,76.81-85.69,100.89h-103.08c36.4-43.36,96.34-114.64,132.78-158,182.72,0,73.29.11,257.22.11,25.8,0,46.72-14.35,46.72-32.06s-20.93-32.06-46.72-32.06c-129.93,0-204.85,1-204.85,1h.34Z"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
        />
      </motion.svg>
      <NavLinks />
    </header>
  );
};

export default Header;
