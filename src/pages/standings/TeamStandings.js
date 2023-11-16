import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./standings.css";

// STATE VARIABLES
function TeamStandings() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [standings, setStandings] = useState([]);

  // RUN THE FUNCTION TO GET THE CONSTRUCTOR STANDINGS BY YEAR
  useEffect(() => {
    const fetchStandings = async () => {
      const response = await fetch(
        `https://ergast.com/api/f1/${selectedYear}/constructorStandings.json`
      );
      const data = await response.json();
      setStandings(
        data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
      );
    };
    fetchStandings();
  }, [selectedYear]);

  // CHANGES THE STANDINGS FROM YEAR SELECT
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  // SHOULD FALLBACK TO COUNTRY FLAG WHEN CONSTRUCTOR IMAGE IS MISSING, JUST DISPLAYS TEAM NAME STILL RESEARCHING
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = `images/logo.svg`;
  };

  // RENDERING DATA TO THE DOM
  return (
    <div>
      <label className="standingsLbl" htmlFor="year"></label>
      <select
        className="standingsDrop"
        id="year"
        value={selectedYear}
        onChange={handleYearChange}
      >
        <option value={new Date().getFullYear()}>
          {new Date().getFullYear()}
        </option>
        <option value={new Date().getFullYear() - 1}>
          {new Date().getFullYear() - 1}
        </option>
        <option value={new Date().getFullYear() - 2}>
          {new Date().getFullYear() - 2}
        </option>
        <option value={new Date().getFullYear() - 3}>
          {new Date().getFullYear() - 3}
        </option>
        <option value={new Date().getFullYear() - 4}>
          {new Date().getFullYear() - 4}
        </option>
        <option value={new Date().getFullYear() - 5}>
          {new Date().getFullYear() - 5}
        </option>
        <option value={new Date().getFullYear() - 6}>
          {new Date().getFullYear() - 6}
        </option>
      </select>
      <motion.table
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <thead>
          <tr>
            <th>Position</th>
            <th>Team</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((team) => (
            <tr key={team.position}>
              <td>{team.position}</td>
              <td>
                <img
                  src={`images/teams/${team.Constructor.constructorId}.svg`}
                  alt={team.Constructor.nationality}
                  className="team-svg"
                  onError={handleImageError}
                />
                {team.Constructor.name}
              </td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  );
}

export default TeamStandings;
