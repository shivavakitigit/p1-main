import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Featured = () => {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const variants = {
    left: { x: "-10vw", opacity: 0 },
    right: { x: "5vw", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <>
      <p className="play-featured">FEATURED</p>
      <h2 className="play-title">
        It's a RACE where driver knowledge reigns supreme! Do you have what it takes to come out on TOP with P1 Heroes?
      </h2>
      <div className="play-text">
        <p>
          Welcome to P1 Heroes, the ultimate card game where driver knowledge is key! In this game, you'll be dealt a
          card with a driver on it, along with several stats such as experience, wins, podiums, and more. Your goal is
          to choose a stat you think is better than your opponent's card. But be careful – your opponent might have a
          trick up their sleeve! Are you ready to show off your knowledge? Let's find out!
        </p>
        <motion.img
          className="landing-image"
          src="./images/landing-image2.jpeg"
          alt="F1 Heroes"
          ref={ref}
          variants={variants}
          initial="left"
          animate={inView ? "visible" : "left"}
          transition={{ duration: 0.4, ease: "easeInOut", type: "spring", stiffness: 260, damping: 20 }}
        />
      </div>
    </>
  );
};

export default Featured;
