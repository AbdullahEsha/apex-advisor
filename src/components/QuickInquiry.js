import { useState } from 'react'

const QuickInquiry = () => {
  const [button, setButton] = useState(true)
  return (
    <div className="quick-inquiry">
      <div className="quick-inquiry-form">
        <input type="text" name="name" placeholder="Enter your name" />
        <input type="email" name="email" placeholder="Enter your email" />
        <input type="tel" name="phone" placeholder="Enter your phone number." />
        <textarea
          rows={3}
          name="message"
          placeholder="You can drop us a message, We will get back to you."
        />
        <button type="submit">Submit</button>
      </div>
      {button ? (
        <p
          className="quick-inquiry-btn"
          id="quick-inquiry-btn-after"
          onClick={() => {
            document.querySelector('.quick-inquiry-form').style.display = 'grid'
            setButton(false)
          }}
        >
          Quick Inquiry
        </p>
      ) : (
        <p
          className="quick-inquiry-btn"
          id="quick-inquiry-btn-before"
          onClick={() => {
            document.querySelector('.quick-inquiry-form').style.display = 'none'
            setButton(true)
          }}
        >
          Quick Inquiry
        </p>
      )}
    </div>
  )
}

export default QuickInquiry
