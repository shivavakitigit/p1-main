import Jumbo from "../../components/Jumbo";
import Featured from "../../components/Featured";
import Articles from "../../components/Articles";
import Schedule from "../../components/Schedule";
import "./landing.css";

const Landing = () => {
  return (
    <>
      <section className="jumbo-container row">
        <Jumbo />
      </section>
      <main className="landing-container container-fluid">
        <div className="row">
          <article className="col-12 col-lg-6 play-wrap">
            <Featured />
          </article>
          <article className="col-12 col-lg-6">
            <Articles />
          </article>
        </div>
        <section className="">
          <Schedule />
        </section>
      </main>
    </>
  );
};

export default Landing;
