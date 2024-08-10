import logo from '../../assets/img/Logo.png';
import Footer from '../sections/Footer';
import './ContactUsPage.css';
import { IoMdHome } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from 'react';
function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: "", email: "", phoneNumber: "",services: "", message: "",
  })
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    if (name === "phoneNumber") {
      const phoneNumber = value.replace(/\D/g, '').slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: phoneNumber }));
    }
    else {
      setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    }
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData)
    setFormData({
      firstName: "", email: "", phoneNumber: "",services: "" ,message: "",
    });
  }
  return (
    <div className='contact'>
      <section>
        <div class="section-header">
          <div class="container">
            <h2>Contact Us</h2>
            <p>Feel free to connect with us for any of our needs regarding our services. Our support team is ready to slve any of your issues. Just push a text to us and we will get back to you immediately.</p>
          </div>
        </div>

        <div class="container">
          <div class="row">

            <div class="contact-info">
              <div class="contact-info-item">
                <div class="contact-info-icon home-icon">
                  <IoMdHome />
                </div>

                <div class="contact-info-content">
                  <h4>Address</h4>
                  <p>B28 Sewak Park,<br /> Dwarka Mor, <br />New Delhi 110059</p>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-info-icon phone-icon">
                  <FaPhone />
                </div>

                <div class="contact-info-content">
                  <h4>Phone</h4>
                  <p>+91 9560321883</p>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-info-icon email-icon" >
                  <MdEmail />
                </div>

                <div class="contact-info-content">
                  <h4>Email</h4>
                  <p>sales@nexgendigitalsolution.com</p>
                </div>
              </div>
            </div>

            <div class="contact-form">
              <form action="" id="contact-form" onSubmit={submitHandler}>
                <h2>Send Message</h2>
                <div class="input-box">
                  <input type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Full Name"
                    value={formData.firstName}
                    onChange={changeHandler}
                    className="outline" />
                </div>

                <div class="input-box">
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Mobile Number"
                    value={formData.phoneNumber}
                    onChange={changeHandler}
                    className="outline"
                  />
                </div>

                <div class="input-box">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="abc@gmail.com"
                    value={formData.email}
                    onChange={changeHandler}
                    className="outline" />
                </div>
                
                  <select name='service' id='selectService' value={formData.services} onChange={changeHandler}>
                  <option value="">Select Service</option>
                    <option value="Bulk SMS Services">Bulk SMS Services</option>
                    <option value="Bulk Email Services">Bulk Email Services</option>
                    <option value="Bulk Whatsapp Services">Bulk Whatsapp Services</option>
                    <option value="Digital Marketing Services">Digital Marketing Services</option>
                    <option value="Voice Broadcasting Services">Voice Broadcasting Services</option>
                    <option value="IVR Services">IVR Services</option>
                    <option value="Website Development Services">Website Development Services</option>
                    <option value="Mobile App Development Services">Mobile App Development Services</option>
                  </select>


                <div class="input-box">
                  <textarea required="true" name="message" placeholder='Type your message...' value={formData.message} onChange={changeHandler}></textarea>

                </div>


                <div class="input-box">
                  <input type="submit" value="Send" name="" />
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default ContactUsPage;