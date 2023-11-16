import { useState, useEffect } from "react";
import moment from "moment";
import ScheduleCard from "./ScheduleCard";

const Schedule = () => {
  const [raceSchedule, setRaceSchedule] = useState([]);
  const [timeToNextRace, setTimeToNextRace] = useState("");

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await fetch(`https://ergast.com/api/f1/2023.json`);
        const data = await response.json();
        const raceSchedule = data.MRData.RaceTable.Races;

        setRaceSchedule(raceSchedule);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSchedule();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      (() => {
        // get the current time
        const now = moment();
        // find next race in the race schedule that comes after the current time
        const nextRace = raceSchedule.find((race) =>
          moment(`${race.date} ${race.time}`).isAfter(now)
        );

        // If there is a next race, get the name of the next race and update the state
        if (nextRace) {
          const nextRaceTitle = nextRace.raceName;
          const timeDiff = moment(`${nextRace.date} ${nextRace.time}`).diff(
            now
          );
          const duration = moment.duration(timeDiff);
          const hours = Math.floor(duration.asHours());
          const minutes = duration.minutes();
          const seconds = duration.seconds();
          setTimeToNextRace(
            `The ${nextRaceTitle} is starting in: ${hours}h, ${minutes}m, ${seconds}s`
          );
        }
      })();
    }, 1000);

    return () => clearInterval(interval);
  }, [raceSchedule]);

  // filter only upcoming races that haven't started yet
  const filteredRaceSchedule = raceSchedule
    .filter((race) =>
      moment(`${race.date} ${race.time}`).isSameOrAfter(moment())
    )
    .slice(0, 8);

  return (
    <section className="schedule">
      <div className="schedule-container">
        <h2 className="schedule-title">Upcoming Race Calendar:</h2>
        <p className="schedule-countdown">
          {" "}
          {timeToNextRace && <span>{timeToNextRace}</span>}
        </p>
        <div className="schedule-wrapper row">
          {filteredRaceSchedule.map((race) => (
            <ScheduleCard key={race.round} race={race} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
