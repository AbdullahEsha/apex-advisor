import { useState } from "react";
import { send } from "emailjs-com";
import Swal from "sweetalert2";

const QuickInquiry = () => {
  const [button, setButton] = useState(true);
  const [emailForm, setEmailForm] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    organization: "",
    message: "",
  });

  const SendMail = (e) => {
    e.preventDefault();
    send("service_ktnnn3r", "template_9rb4ngw", emailForm, "GmHPw5sambWaKFRLk")
      .then((response) => {
        console.log("response", response);
        Swal.fire({
          icon: "success",
          text: "Thanks for being awesome! We have received your message and would like to thank you for writing to us.",
        }).then(() => {
          setEmailForm({
            fname: "",
            lname: "",
            phone: "",
            email: "",
            organization: "",
            message: "",
          });
        });
      })
      .catch((err) => {
        console.log("err", err);
        Swal.fire({
          icon: "error",
          text: "Something went wrong!",
        }).then(() => {
          setEmailForm({
            fname: "",
            lname: "",
            phone: "",
            email: "",
            organization: "",
            message: "",
          });
        });
      });
  };
  return (
    <div className="quick-inquiry">
      <form onSubmit={SendMail}>
        <div className="quick-inquiry-form">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={emailForm.fname}
            onChange={(event) => {
              setEmailForm({
                ...emailForm,
                fname: event.target.value,
              });
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={emailForm.email}
            onChange={(event) => {
              setEmailForm({
                ...emailForm,
                email: event.target.value,
              });
            }}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number."
            value={emailForm.phone}
            onChange={(event) => {
              setEmailForm({
                ...emailForm,
                phone: event.target.value,
              });
            }}
          />
          <textarea
            rows={3}
            name="message"
            placeholder="You can drop us a message, We will get back to you."
            value={emailForm.message}
            onChange={(event) => {
              setEmailForm({
                ...emailForm,
                message: event.target.value,
              });
            }}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
      {button ? (
        <p
          className="quick-inquiry-btn"
          id="quick-inquiry-btn-after"
          onClick={() => {
            document.querySelector(".quick-inquiry-form").style.display =
              "grid";
            setButton(false);
          }}
        >
          Quick Inquiry
        </p>
      ) : (
        <p
          className="quick-inquiry-btn"
          id="quick-inquiry-btn-before"
          onClick={() => {
            document.querySelector(".quick-inquiry-form").style.display =
              "none";
            setButton(true);
          }}
        >
          Quick Inquiry
        </p>
      )}
    </div>
  );
};

export default QuickInquiry;
