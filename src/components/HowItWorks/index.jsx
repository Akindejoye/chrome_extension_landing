import Works from "../../assets/images/works.svg";
import "./style.css";

const HowItWorks = () => {
  return (
    <div className="howitworks">
      <h1>How It Works</h1>
      <div className="howitworks__column">
        <div className="howitworks__column-1 how-1">
          <div className="how-spanbox">
            <span>1</span>
          </div>
          <h3>Record Screen</h3>
          <p>
            Click the "Start Recording" button in our extension. choose which
            part of your screen to capture and who you want to send it to.
          </p>
          <div className="howitworks__imgbox">
            <img src={Works} alt="" />
          </div>
        </div>
        <div className="howitworks__column-1 how-2">
          <div className="how-spanbox">
            <span>2</span>
          </div>
          <h3>Share Your Recording</h3>
          <p>
            We generate a shareable link for your video. Simply send it to your
            audience via email or copy the link to send via any platform.
          </p>
          <div className="howitworks__imgbox">
            <img src={Works} alt="" />
          </div>
        </div>
        <div className="howitworks__column-1 how-3">
          <div className="how-spanbox">
            <span>3</span>
          </div>
          <h3>Learn Effortlessly</h3>
          <p>
            Recipients can access your video effortlessly through the provided
            link, with our user-friendly interface suitable for everyone.
          </p>
          <div className="howitworks__imgbox">
            <img src={Works} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
