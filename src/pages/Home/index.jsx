import Features from "../../components/Features";
import HowItWorks from "../../components/HowItWorks";
import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <section className="home__hero"></section>
      <section className="home__features">
        <Features />
      </section>
      <section className="works">
        <HowItWorks />
      </section>
    </div>
  );
};

export default Home;
