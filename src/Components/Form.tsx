function Form() {
  const formStyle = {
    width: "300px", // Adjust the width as needed
    margin: "0 auto", // Center the form horizontally
    marginTop: "20px", // Add top margin to position it vertically
  };

  return (
    <div>
      <div className="form-floating" style={formStyle}>
        <textarea
          className="form-control placeholder-textarea"
          style={{ height: "100px", width: "80%", paddingBottom: "10px" }} // Adjust the width as needed
          placeholder="Enter your address, it's 100% safe, I pinky promise"
          id="floatingTextarea"
        ></textarea>
        <label htmlFor="floatingTextarea"></label>
        <div />
        <button
          type="button"
          className="btn btn-warning btn-lg"
          style={{
            fontFamily: "Fraiche",
            margin: "0 auto", // Center the form horizontally
          }}
        >
          Not a scam
        </button>
      </div>
    </div>
  );
}

export default Form;
