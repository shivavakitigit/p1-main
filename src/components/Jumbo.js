import { motion } from "framer-motion";

const Jumbo = () => {
  return (
    <div className="jumbo-wrap col-12">
      <div className="jumbo-text">
        <motion.h1
          initial={{ x: "-100vw" }}
          animate={{ x: "0" }}
          transition={{ type: "spring", delay: 0.3, duration: 3, ease: "easeInOut" }}
        >
          P1
        </motion.h1>
        <div className="dashed-line"></div>
        <motion.p
          initial={{ x: "-100vw" }}
          animate={{ x: "0" }}
          transition={{ type: "spring", bounce: "0.5", delay: 1, duration: 3.5, ease: [0.17, 0.67, 0.83, 0.67] }}
        >
          Fuel your passion
        </motion.p>
        <motion.img
          className="car-one f1-car"
          src="./images/car.svg"
          alt="Red F1 Car"
          initial={{ x: "-100vw" }}
          animate={{ x: "100vw" }}
          transition={{ type: "spring", duration: 8 }}
        />
        <motion.img
          className="car-two f1-car"
          src="./images/car2.svg"
          alt="Silver F1 Car"
          initial={{ x: "-100vw" }}
          animate={{ x: "100vw" }}
          transition={{ type: "spring", duration: 6 }}
        />
      </div>
    </div>
  );
};

export default Jumbo;
