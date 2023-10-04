import Circle from "../../assets/images/circle-dot.svg";
import Email from "../../assets/images/email-dot.svg";
import Refresh from "../../assets/images/refresh-dot.svg";
import Video from "../../assets/images/video-repo.svg";
import "./style.css";

const Features = () => {
  return (
    <div>
      <h3 className="home__features-heading">Features</h3>
      <p className="home__features-text">Key Highlights of Our Extension</p>
      <div className="home__features-visual">
        <div className="features-visual-left">
          <div className="features-visual__left-list">
            <img src={Circle} alt="Icon" className="icon-point" />
            <div className="features-visual_left-listBox">
              <h3>Simple Screen Recording</h3>
              <p>
                Effortless screen recording for everyone. Record with ease, on
                tech expertise required.
              </p>
            </div>
          </div>
          <div className="features-visual__left-list">
            <img src={Email} alt="Icon" className="icon-point" />
            <div className="features-visual_left-listBox">
              <h3>Easy-to-Share URL</h3>
              <p>
                Share your recordings instantly with a single link. No
                attachments, no downloads.
              </p>
            </div>
          </div>
          <div className="features-visual__left-list">
            <img src={Refresh} alt="Icon" className="icon-point" />
            <div className="features-visual_left-listBox">
              <h3>Revisit Recordings</h3>
              <p>
                Access and review your past content effortlessly. Your
                recordings, always at your fingertips.
              </p>
            </div>
          </div>
        </div>
        <div className="features-visual-right">
          <div className="visual-right-imgBox">
            <img src={Video} alt="Video" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
