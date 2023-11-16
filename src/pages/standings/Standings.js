import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import TeamStandings from "./TeamStandings";
import "./standings.css";

// STATE VARIABLES
function Standings() {
  const [standings, setStandings] = useState([]);
  const [showTeamRanking, setShowTeamRanking] = useState(false);
  const [showHeading, setShowHeading] = useState(true);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // RUN THE FUNCTION TO GET THE DRIVER STANDINGS DATA FOR THE SELECTED YEAR
  useEffect(() => {
    const fetchDriverStandings = async () => {
      const response = await fetch(
        // WAIT FOR THE RESPONSE
        `https://ergast.com/api/f1/${selectedYear}/driverStandings.json`
      );
      const data = await response.json();
      setStandings(
        data.MRData.StandingsTable.StandingsLists[0].DriverStandings
      );
    };

    fetchDriverStandings();
  }, [selectedYear]);

  // IF NO DRIVER IMAGE JUST DISPLAY DRIVER NAME
  const handleImageError = (e) => {
    e.target.onError = null;
    e.target.src = `images/drivers/blank.svg`;
  };

  const handleTeamImageError = (e) => {
    e.target.onError = null;
    e.target.src = `images/logo.svg`;
  };

  const handleDisplayTeamRanking = () => {
    setShowTeamRanking(true);
    setShowHeading(false);
  };

  const handleDisplayDriverStandings = () => {
    setShowTeamRanking(false);
    setShowHeading(true);
  };

  const handleSelectYear = (event) => {
    setSelectedYear(event.target.value);
    console.log(selectedYear);
  };

  // const countryInfo = lookup.byCountry(race.Circuit.Location.country);

  // RENDERING DATA TO THE DOM
  return (
    <section className="standings-container">
      <div className="title-wrap">
        <h1 className="page-title">
          {showHeading ? "Driver Standings" : "Team Standings"}
        </h1>
      </div>
      <div className="btn-wrap">
        <div className="btn-wrap-standings">
          <button
            id="test"
            className="standingsBtn"
            onClick={
              showTeamRanking
                ? handleDisplayDriverStandings
                : handleDisplayTeamRanking
            }
          >
            {showTeamRanking ? "Driver Standings" : "Team Ranking"}
          </button>
        </div>

        {showHeading && (
          <div className="dropdown">
            <label className="standingsLbl" htmlFor="yearSelect"></label>
            <select
              className="standingsDrop"
              value={selectedYear}
              onChange={handleSelectYear}
            >
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
            </select>
          </div>
        )}
      </div>
      {showTeamRanking && (
        <div>
          <TeamStandings
            selectedYear={selectedYear}
            showTeamRanking={showTeamRanking}
          />
        </div>
      )}
      {!showTeamRanking && (
        <div>
          <motion.table
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <thead>
              <tr>
                <th>Position</th>
                <th>Driver</th>
                <th>Team</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((driver) => (
                <tr key={driver.position}>
                  <td>{driver.position}</td>
                  <td>
                    <img
                      src={`images/drivers/${driver.Driver.driverId}.svg`}
                      alt={driver.Driver.driverId}
                      className="driver-svg"
                      onError={handleImageError}
                    />
                    {driver.Driver.givenName} {driver.Driver.familyName}
                  </td>
                  <td>
                    {driver.Constructors[0] &&
                      driver.Constructors[0].constructorId && (
                        <img
                          src={`images/teams/${driver.Constructors[0].constructorId}.svg`}
                          alt={driver.Constructors[0].constructorId}
                          className="team-svg"
                          onError={handleTeamImageError}
                        />
                      )}

                    {driver.Constructors[0]?.name}
                  </td>
                  <td>{driver.points}</td>
                </tr>
              ))}
            </tbody>
          </motion.table>
        </div>
      )}
    </section>
  );
}

export default Standings;
