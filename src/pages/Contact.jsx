// eslint-disable-next-line no-unused-vars
import React from "react"
import { useState } from "react";


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    // handel data
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            alert("");
        } catch (err) {
            console.log(err);
        }
    };
    // handel data

    return(
        <>
        <section className="contact_page bg-second-light">
            <div className="container">
                
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up">
                        <h2 className="headline text-center">Get In Touch</h2>
                        
                    </div>
                    <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up">
                        
                    <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="my-3">
                                        <label className="form-label">Full Name*</label>
                                        <input
                                            type="text"
                                            value={name}
                                            className="form-control"
                                            placeholder="Full Name"
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="my-3">
                                        <label className="form-label">Email*</label>
                                        <input
                                            type="email"
                                            value={email}
                                            className="form-control"
                                            placeholder="Email Id"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="my-3">
                                        <label className="form-label">Contact Number</label>
                                        <input
                                            type="tel"
                                            value={mobileNumber}
                                            className="form-control"
                                            placeholder="Contact Number"
                                            onChange={(e) => setMobileNumber(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="my-3">
                                <label className="form-label">Message</label>
                                <textarea className="form-control" placeholder="Message Body" onChange={(e) => setMessage(e.target.value)}></textarea>
                            </div>
                            <button type="submit" className="btn mt-3 primary_btn">SEND <svg xmlns="http://www.w3.org/2000/svg" width="17" height="22" viewBox="0 0 17 22" fill="none">
                                    <path d="M14.9782 0.792496C14.8636 0.252232 14.3328 -0.0928354 13.7925 0.0217657L4.98839 1.8893C4.44812 2.00391 4.10306 2.53478 4.21766 3.07504C4.33226 3.61531 4.86313 3.96037 5.4034 3.84577L13.2293 2.18574L14.8893 10.0116C15.0039 10.5519 15.5348 10.8969 16.075 10.7823C16.6153 10.6677 16.9604 10.1369 16.8458 9.5966L14.9782 0.792496ZM1.83844 21.545L14.8384 1.54499L13.1616 0.455012L0.161556 20.455L1.83844 21.545Z" fill="white"/>
                                </svg></button>
                            <div className="message">{message ? <p>{message}</p> : null}</div>
                        </form>
                            
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact;