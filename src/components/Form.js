import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // ALL FIELDS NEED TO BE FILLED
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message || !subject) {
      setError("Please fill in all fields.");
      return;
    }
    setError(null);
    setSuccess(false);

    // DEMOSTRATING DATA THAT CAN BE SENT TO A SERVER AND SEND BACK THE DATA ENTERED, IN THIS CASE A DATA OBJECT LOGGED TO THE CONSOLE
    const data = { name, email, message, subject };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setSuccess(true);
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setError(error.message);
      });
    console.log("yo");
  };

  // CLEAR THE FORM AND REMOVE THE ERROR
  const clearForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setSubject("");
    setError(null);
    setSuccess(false);
  };
  return (
    <form className="mailing-form" onSubmit={handleSubmit}>
      <div
        className="col-12 col-md-6 form-group"
        style={{ display: "inline-block" }}
      >
        <input
          type="text"
          className="form-control"
          value={name}
          id="name"
          name="name"
          placeholder="Name"
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div
        className="col-12 col-md-6 form-group"
        style={{ display: "inline-block" }}
      >
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          name="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="col-12 form-group">
        <input
          type="text"
          className="form-control"
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
          id="subject"
          name="subject"
          placeholder="Subject"
          required
        />
      </div>
      <div className="col-12 form-group">
        <textarea
          className="form-control"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="message"
          id="message"
          rows="5"
          placeholder="Message"
          required
        ></textarea>
      </div>
      <div className="col-12 form-group form-btns">
        <button type="submit" className="form-submit">
          {success ? "Message sent" : error ? "Error" : "Send"}
        </button>

        <button type="button" className="form-clear" onClick={clearForm}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default Form;
