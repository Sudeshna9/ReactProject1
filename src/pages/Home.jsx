import { Link } from "react-router-dom";
import { Carousel } from "../component/carousel";
import {SvgImage} from "../component/SvgImages";
import {SvgImage2} from "../component/SvgImages";
import {SvgImage3} from "../component/SvgImages";
import {SvgImage4} from "../component/SvgImages";
import AboutImg from "../assets/images/about.png";

const Home = () => {
    return(
        <>
        <div className="banner_sec">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <h1>Empower Your <span>Business</span> with <span>Technology</span></h1>
                        <p>From Idea to Implementation - We Make IT Happen</p>
                        <Link to="#">Learn More 
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="22" viewBox="0 0 17 22" fill="none">
                                    <path d="M14.9782 0.792496C14.8636 0.252232 14.3328 -0.0928354 13.7925 0.0217657L4.98839 1.8893C4.44812 2.00391 4.10306 2.53478 4.21766 3.07504C4.33226 3.61531 4.86313 3.96037 5.4034 3.84577L13.2293 2.18574L14.8893 10.0116C15.0039 10.5519 15.5348 10.8969 16.075 10.7823C16.6153 10.6677 16.9604 10.1369 16.8458 9.5966L14.9782 0.792496ZM1.83844 21.545L14.8384 1.54499L13.1616 0.455012L0.161556 20.455L1.83844 21.545Z" fill="white"/>
                                </svg>
                            </i> 
                        </Link>
                    </div>
                    <div className="col-md-5">
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="business_solution text-center">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <h2>Perfect Business Solutions</h2>
                        <p>Always Deliver More than you Expected<br/>
        when you are employed,your boss expects you to deliver above expectations....<br/>
        when you start a business you are expected to deliver more than it is expected....<br/>
        when you serve your customers,they expect services above their exceptions...<br/>
        End to End DevelopementEnd-to-end refers to delivering complex systems or services in </p>
                    </div>
                </div>
                <Carousel></Carousel>
            </div>
        </div>
        <div className="about_company">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="h5Heading">ABOUT OUR COMPANY</h5>
                        <h2>We Execute Our Ideas From The Start To Finish</h2>
                        <p>Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website is the first impression on visitors.</p>
                        <Link to="#" className="primary_btn">Learn More 
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="22" viewBox="0 0 17 22" fill="none">
                                    <path d="M14.9782 0.792496C14.8636 0.252232 14.3328 -0.0928354 13.7925 0.0217657L4.98839 1.8893C4.44812 2.00391 4.10306 2.53478 4.21766 3.07504C4.33226 3.61531 4.86313 3.96037 5.4034 3.84577L13.2293 2.18574L14.8893 10.0116C15.0039 10.5519 15.5348 10.8969 16.075 10.7823C16.6153 10.6677 16.9604 10.1369 16.8458 9.5966L14.9782 0.792496ZM1.83844 21.545L14.8384 1.54499L13.1616 0.455012L0.161556 20.455L1.83844 21.545Z" fill="white"/>
                                </svg>
                            </i> 
                        </Link>
                    </div>
                    <div className="col-md-6 about_company--img">
                        <span><img src={AboutImg} alt="About Images"/></span>
                    </div>
                </div>
            </div>
        </div>
        <div className="our_business">
            <div className="container-fluid">
                <div className="row">
                    <h3 className="h3Heading">OUR BUSINESS</h3>
                    <div id="accordion">
                        <div className="card">
                        <div className="card-header">
                            <a className="btn" data-bs-toggle="collapse" href="#collapseOne">
                            9X PRODCUTION
                            </a>
                        </div>
                        <div id="collapseOne" className="collapse" data-bs-parent="#accordion">
                            <div className="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-header">
                            <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
                            EKAI RESTAURANT
                        </a>
                        </div>
                        <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                            <div className="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-header">
                            <a className="collapsed btn" data-bs-toggle="collapse" href="#collapseThree">
                            MANTIS
                            </a>
                        </div>
                        <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
                            <div className="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
        <div className="services_sec">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="services_secDiv">
                            <h5 className="h5Heading">SERVICES WE’RE OFFERING</h5>
                            <h2>High quality products and services that we stand behind</h2>
                            <p>Web designing in a powerful way of just not an only professions, however, in a passion for our Company. We have to a tendency to believe the idea that smart looking of any website is the first impression on visitors.</p>
                        </div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
        <div className="cardSec">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>
        <div className="professional_sec">
            <div className="container-fluid">
                <div className="row professional_secRow align-items-center">
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                        <h2>Professional IT technology services you can trust</h2>
                        <p>9xTechnology that empower your business, support your mission and drive you into the future.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="professional_sec1">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2>IT Solutions & Services at your Fingertips</h2>
                        <Link to="#" className="primary_btn">Learn More 
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="22" viewBox="0 0 17 22" fill="none">
                                    <path d="M14.9782 0.792496C14.8636 0.252232 14.3328 -0.0928354 13.7925 0.0217657L4.98839 1.8893C4.44812 2.00391 4.10306 2.53478 4.21766 3.07504C4.33226 3.61531 4.86313 3.96037 5.4034 3.84577L13.2293 2.18574L14.8893 10.0116C15.0039 10.5519 15.5348 10.8969 16.075 10.7823C16.6153 10.6677 16.9604 10.1369 16.8458 9.5966L14.9782 0.792496ZM1.83844 21.545L14.8384 1.54499L13.1616 0.455012L0.161556 20.455L1.83844 21.545Z" fill="white"/>
                                </svg>
                            </i> 
                        </Link>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
        <div className="scopeSec">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <i className="text-center">
                            <SvgImage/>
                        </i>
                        <p>Smart visions</p>
                    </div>
                    <div className="col-md-3">
                        <i className="text-center">
                            <SvgImage2/>
                        </i>
                        <p>Platform Integration</p>
                    </div>
                    <div className="col-md-3">
                        <i className="text-center">
                            <SvgImage3/>
                        </i>
                        <p>Web Development</p>
                    </div>
                    <div className="col-md-3">
                        <i className="text-center">
                            <SvgImage4/>
                        </i>
                        <p>Tech Solutions</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};
  
  export default Home;