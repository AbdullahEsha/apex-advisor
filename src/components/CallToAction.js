import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="call-to-action container">
      <h3>Consultations for our service</h3>
      <p>
        By being available to our clients, we can respond to their concerns and
        questions and carry out our duty for keeping our clients up-to-date
        about the case.
      </p>
      <Link href="/contact">Contact Us</Link>
    </div>
  );
};

export default CallToAction;
