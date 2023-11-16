

const CardExchange = (wonLost, wonCard) => {

    console.log(wonLost)
    return (
        <section className="CardExchange">
        <h1>you {wonLost}</h1>
        
        <div className="driver-wrap">
          <img className="team-logo" src={wonCard.team_image} alt="Team" />
          <img className="driver-image" src={wonCard.driver_image} alt="Driver" />
          <img className="card-brand" src="../../images/logo2.svg" alt="Team" />

          <div className="name-banner">
            <span className="name " >{wonCard.name}</span>
          </div>
        </div>
        <div className="stats-container" >
          <div className="stat-wrap" >
            <p className="stat-title">Experience</p>
            <p className="data experience" >{wonCard.experience}</p>
          </div>
          <div className="divider"></div>
          <div className="stat-wrap" >
            <p className="stat-title">Team Ranking</p>
            <p className="data team">{wonCard.team_ranking}</p>
          </div>
          <div className="divider"></div>
          <div className="stat-wrap" >
            <p className="stat-title">Wins:</p>
            <p className="data wins">{wonCard.wins}</p>
          </div>
          <div className="divider"></div>
          <div className="stat-wrap" >
            <p className="stat-title">Podiums</p>
            <p className="data podiums">{wonCard.podiums}</p>
          </div>
          <div className="divider"></div>
          <div className="stat-wrap" >
            <p className="stat-title">Rating</p>
            <p className="data score">{wonCard.rating}</p>
          </div>
          

        </div>
        </section>
    )
}

export default CardExchange