import "./styles.css";
function ContactData() {
  return (
    <div className="from-container">
      <h1>Send a message to use!</h1>
      <form>
        <input placeholder="Name"></input>
        <input placeholder="Email"></input>
        <input placeholder="Subject"></input>
        <input placeholder="Message" rows="4"></input>
        <button>Send Message</button>
      </form>
    </div>
  );
}
export default ContactData;
