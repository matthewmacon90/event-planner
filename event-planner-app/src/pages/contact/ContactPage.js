import './ContactStyles.css';

const ContactPage = () => {
    return (
        <div className="contact-container">
            <form className="contact-form">
                <label className='contact-label' htmlFor="firstName">First Name:</label>
                <input className='contact-input' type="text" id="firstName" name="firstName" />

                <label className='contact-label' htmlFor="lastName">Last Name:</label>
                <input className='contact-input' type="text" id="lastName" name="lastName" />

                <label className='contact-label' htmlFor="email">Email:</label>
                <input className='contact-input' type="email" id="email" name="email" />

                <label className='contact-label' htmlFor="message">Message:</label>
                <textarea className='contact-message' id="message" name="message"></textarea>

                <button className='contact-cta' type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactPage;