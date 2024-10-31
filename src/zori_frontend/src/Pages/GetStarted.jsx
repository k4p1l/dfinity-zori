import { useState } from "react";
import "../assets/css/Waitlist.css";
import { useNavigate } from "react-router-dom";

const JoinWaitlist = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSf-Dnw-PxOQDfcoX4d1F_daGXGsofaA4RG3WavRX-FDzkdUiw/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );
      setSubmitted(true);
      navigate("/login");
    } catch (err) {
      setError("There was an error submitting your form. Please try again.");
    }
  };

  return (
    <div className="fourth-page">
      <h1>JOIN OUR WAITLIST</h1>
      <form className="flex flex-col gap-8 cu-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label className="label" htmlFor="entry.188529269">
            *Name:
          </label>
          <input
            className="cu-input"
            type="text"
            id="entry.188529269"
            name="entry.188529269"
            required
          />
        </div>
        <div className="form-field">
          <label className="label" htmlFor="entry.406433151">
            *Email:
          </label>
          <input
            className="cu-input"
            type="email"
            id="entry.406433151"
            name="entry.406433151"
            required
          />
        </div>
        <div className="form-field">
          <label className="label" htmlFor="entry.342776823">
            *Message:
          </label>
          <input
            type="text"
            className="cu-input"
            id="entry.342776823"
            name="entry.342776823"
            required
          />
        </div>
        <div className="form-field">
          <label className="label" htmlFor="entry.1419860086">
            *What interests you in Zori?
          </label>
          <select
            className="cu-input"
            name="entry.1419860086"
            id="entry.1419860086"
            required
          >
            <option value="3D Spaces">3D Spaces</option>
            <option value="3D Avatar">3D Avatar</option>
            <option value="NFT's">NFTs</option>
            <option value="All of the above">All of the Above</option>
          </select>
        </div>
        <div className="form-field">
          <label className="label" htmlFor="entry.553623353">
            *Phone No.
          </label>
          <input
            type="text"
            className="cu-input"
            id="entry.553623353"
            name="entry.553623353"
            required
          />
        </div>
        <div className="form-field">
          <label className="label" htmlFor="entry.852140100">
            *Twitter
          </label>
          <input
            type="text"
            className="cu-input"
            id="entry.852140100"
            name="entry.852140100"
          />
        </div>
        <div className="form-field">
          <label className="label" htmlFor="entry.1444762476">
            *Discord
          </label>
          <input
            type="text"
            className="cu-input"
            id="entry.1444762476"
            name="entry.1444762476"
          />
        </div>
        <div className="form-field">
          <label className="label" htmlFor="entry.442681221">
            *Telegram
          </label>
          <input
            type="text"
            className="cu-input"
            id="entry.442681221"
            name="entry.442681221"
          />
        </div>
        <div className="form-field">
          <button className="submit-btn" type="submit">
            <p>Submit</p>
            <ion-icon name="arrow-forward-sharp"></ion-icon>
          </button>
        </div>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default JoinWaitlist;
