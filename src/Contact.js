import {BsArrowRight} from 'react-icons/bs';
import './Contact.css';

const Contact = ({closeMenu}) => {
  return (
    <div id="CONTACT" className="formCon" onClick={closeMenu}>
      <form action='#'>
        <label htmlFor='fullname'>FULL NAME</label>
          <input type="text" id="full-name" placeholder="Enter your full name" required />

        <label htmlFor='email'>EMAIL</label>
          <input type="email" id="email" placeholder="Enter your email" required />

        <label htmlFor='message'>MESSAGE</label>
          <textarea id="message" placeholder="What are your plans"></textarea>

        <button type="submit ">
          SEND MESSAGE <BsArrowRight className="arrowIcon"/>
        </button>
      </form>
    </div>
  )
}

export default Contact
