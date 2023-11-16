// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Form from "../../components/Form";
import "./mailing.css";

function Mailing() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const variants = {
    left: { x: "-15vw", opacity: 0 },
    right: { x: "15vw", opacity: 0 },

    visible: { x: 0, opacity: 1 },
  };

  return (
    <section className="contact">
      <h1 className="page-title">It's Time to Box</h1>
      <div className="contact-wrap container-fluid">
        <div className="row">
          <div className="contact-image-wrap col-12 col-lg-6">
            <motion.img
              className="contact-img"
              src="./images/pitstop.png"
              alt="Pitcrew servicing an F1 car"
              ref={ref}
              variants={variants}
              initial="left"
              animate={inView ? "visible" : "left"}
              transition={{ duration: 0.4, ease: "easeInOut", type: "spring", stiffness: 260, damping: 20 }}
            />
          </div>
          <motion.div
            className="contact-form-wrap col-12 col-lg-6"
            ref={ref}
            variants={variants}
            initial="right"
            animate={inView ? "visible" : "right"}
            transition={{ duration: 0.4, ease: "easeInOut", type: "spring", stiffness: 260, damping: 20 }}
          >
            <h3 className="contact-text">Make a pitstop and connect with us!</h3>
            <p className="contact-text">
              Join the conversation about all things F1! Use the form below to reach out to our team of experts with
              your questions, comments, or feedback. We're always happy to hear from fellow F1 enthusiasts and look
              forward to connecting with you.
            </p>
            <Form />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Mailing;
