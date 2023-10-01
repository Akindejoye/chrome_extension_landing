import PenFile from "../../assets/images/pen-file.svg";
import Copy from "../../assets/images/copy.svg";
import Facebook from "../../assets/images/facebook-box.svg";
import Whatsaap from "../../assets/images/whatsap-box.svg";
import Telegram from "../../assets/images/telegram-box.svg";
import Video from "../../assets/images/video-player.svg";
import Transcript from "../../assets/images/transcript.svg";
import "./style.css";

const Recordings = () => {
  return (
    <>
      <div className="recordings">
        <div className="recordings__left">
          <h1 className="recordings__left-heading">Your video is ready!</h1>
          <div className="recordings__left-box">
            <div className="left-box__idbox">
              <span className="idbox-name">Name</span>
              <div className="idbox__videoBox">
                <span>Untitled__Video_20232509</span>
                <img src={PenFile} alt="Upload File" />
              </div>
            </div>
            <div className="left-box__emailbox">
              <input type="email" placeholder="enter email of receiver" />
              <button>Send</button>
            </div>
            <div className="left-box__url">
              <h3>Video Url</h3>
              <div className="left-box__url-box">
                <input
                  type="text"
                  placeholder="https://www.helpmeout/Untitled_Video_20232509"
                />
                <button>
                  <img src={Copy} alt="Copy" />
                  Copy
                </button>
              </div>
            </div>
            <div className="left-box__icons">
              <h3>Share your video</h3>
              <div className="left-box__iconsbox">
                <button className="iconsbox-social">
                  <img src={Facebook} alt="Facebook" />
                </button>
                <button className="iconsbox-social">
                  <img src={Whatsaap} alt="Whatsaap" />
                </button>
                <button className="iconsbox-social">
                  <img src={Telegram} alt="Telegram" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="recordings__right">
          <div className="recordings__right-videoplayer">
            <img src={Video} alt="Video Player" />
          </div>
          <h3 className="recording__right-heading">Transcript</h3>
          <select className="recording__right-select">
            <option>English</option>
            <option>French</option>
            <option>Dutch</option>
          </select>
          <div className="recording__right-transcript">
            <img src={Transcript} alt="Transcript" />
          </div>
        </div>
      </div>
      <div className="recording__savevideo">
        <p className="recording__savevideo-text">
          To ensure the availability and privacy of your video,
          <br /> we recommend saving it to your account.
        </p>
        <div className="recording__savevideo-buttonBox">
          <button className="recording__savevideo-button">Save Video</button>
        </div>
        <p className="recording__savevideo-link">
          Don't have an account? <a href="#">Create account</a>
        </p>
      </div>
    </>
  );
};

export default Recordings;
