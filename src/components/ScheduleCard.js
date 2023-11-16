import { FlagIcon } from "react-flag-kit";
import lookup from "country-code-lookup";
import moment from "moment";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ScheduleCard = ({ race }) => {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const variants = {
    hidden: { y: "5vw", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const raceDate = moment(`${race.date} ${race.time}`);
  const formattedDate = raceDate.format("DD MMM");
  const formattedTime = raceDate.format("h:mm A");

  // get the country code from the country name, 3 races in US but 2 races don't count as the US GP
  const countryInfo = lookup.byCountry(race.Circuit.Location.country);
  const countryCode = countryInfo ? countryInfo.iso2 : "US";

  return (
    <motion.div
      className="race-card col"
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.4, ease: "easeInOut", type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="flag-title-wrap">
        <span>{countryCode && <FlagIcon code={countryCode} />}</span>
        <h3 className="race-title">
          R{race.round} - {race.raceName}
        </h3>
      </div>

      <p>Circuit: {race.Circuit.circuitName}</p>
      <p>Date: {formattedDate}</p>
      <p>Race Start: {formattedTime}</p>
    </motion.div>
  );
};

export default ScheduleCard;
