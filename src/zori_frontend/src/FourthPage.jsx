import "./assets/css/Fourthpage.css";

const FourthPage = () => {
  return (
    <div className="fourth-page">
      <h1>GET IN TOUCH</h1>
      <form
        className="flex flex-col gap-8 cu-form "
        action="https://docs.google.com/forms/d/e/1FAIpQLSf-Dnw-PxOQDfcoX4d1F_daGXGsofaA4RG3WavRX-FDzkdUiw/formResponse"
      >
        <div className="form-field">
          <label className="label" htmlFor="entry.188529269">
            Name:
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
            Email:
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
          <label className="label" htmlFor="entry.1759612096">
            Subject:
          </label>
          <input
            type="text"
            className="cu-input"
            id="entry.1759612096"
            name="entry.1759612096"
          />
        </div>
        <div className="form-field">
          <label className="label" htmlFor="entry.342776823">
            Message:
          </label>
          <input
            type="text"
            className="cu-input"
            id="entry.342776823"
            name="entry.342776823"
          />
        </div>
        <div className="form-field">
          <button className="submit-btn" type="submit">
            <p>Submit</p>
            <ion-icon name="arrow-forward-sharp"></ion-icon>
          </button>
        </div>
      </form>
    </div>
  );
};

export default FourthPage;
