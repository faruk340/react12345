import React from "react";
import new_bike from "./images/new_bike.png";
import new_car from "./images/new_car.png";
import "./css/contact.css";

const Contact = () => {
    return (
        <>
            <section className="contact">
                <div className="contact_header">
                    <h4>To Get Best Deal</h4>
                    <h2>Contact Us</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7fffd1" fill-opacity="1" d="M0,256L60,224C120,192,240,128,360,138.7C480,149,600,235,720,272C840,309,960,299,1080,250.7C1200,203,1320,117,1380,74.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </div>
                <div className="container">
                    <div className="contact_container">
                        <div className="contactInfo">
                            <div className="box">
                                <diiv className="icon"><i class="fa fa-location-arrow" /></diiv>
                                <div className="text">
                                    <h3>Address</h3>
                                    <p>Khamarrameswar Pur, Barasat<br />North 24 pgs, Wesst bengal,<br />743423</p>
                                </div>
                            </div>
                            <div className="box">
                                <diiv className="icon"><i className="fa fa-phone" /></diiv>
                                <div className="text">
                                    <h3>Phone</h3>
                                    <p>8101790648</p>
                                </div>
                            </div>
                            <div className="box">
                                <diiv className="icon"><i className="fa fa-whatsapp" /></diiv>
                                <div className="text">
                                    <h3>Phone</h3>
                                    <p>8101790648</p>
                                </div>
                            </div>
                            <div className="box">
                                <diiv className="icon"><i class="fa fa-envelope" /></diiv>
                                <div className="text">
                                    <h3>Email</h3>
                                    <p>uddinfaruk340@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="contactForm">
                            <form>
                                <h2>Send Message</h2>
                                <div className="inputBox">
                                    <input type="text" name="" required />
                                    <span>Full Name</span>
                                </div>
                                <div className="inputBox">
                                    <input type="text" name="" required />
                                    <span>Email</span>
                                </div>
                                <div className="inputBox">
                                    <input type="text" name="" required />
                                    <span>Contact Number</span>
                                </div>
                                <div className="inputBox">
                                    <select>
                                        <option selected>Policy Required</option>
                                        <option value="Motor Insurance">Motor Insurance</option>
                                        <option value="Health Insurance">Health Insurance</option>
                                        <option value="Group Mediclaim">Group Mediclaim</option>
                                        <option value="Employee Mediclaim">Employee Mediclaim</option>
                                        <option value="Critical Illness">Critical Illness</option>
                                    </select>
                                </div>
                                <div className="inputBox">
                                    <textarea required />
                                    <span>Type your message...</span>
                                </div>
                                <div className="inputBox">
                                    <input type="submit" name="" value="send" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ads_section">
                <div className="container">
                    <div className="ads_box">
                        <div className="ads">
                            <div className="ads_box1">
                                <img src={new_car} alt="new_car" />
                            </div>
                            <div className="ads_box2">
                                <h3>Got new car or Renew car insurance?</h3>
                                <p>Save upto 80% on Car insurance</p>
                                <button className="ads_btn">Enquire Now</button>
                            </div>
                        </div>
                        <div className="ads">
                            <div className="ads_box3">
                                <img src={new_bike} alt="new_bike" />
                            </div>
                            <div className="ads_box4">
                                <h3>Bought new bike or Renew bike insurance?</h3>
                                <p>Save upto 80% on bike insurance</p>
                                <button className="ads_btn">Enquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;