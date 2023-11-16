// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ImgSrc1 from  '.././assets/images/image1.png';
// eslint-disable-next-line react/prop-types
const TestiMonialsDetails = ({testiMonialDetail}) => {
    // eslint-disable-next-line react/prop-types
    const {img} = testiMonialDetail;
    return (
        <div className="item">
            <div className="">
                <img className="img-circle" src={img} />
            </div>
        </div>
    );
};



const Carousel = () => {
  
    const testiMonials = [
        {
            img: ImgSrc1,
        },
        {
            img: ImgSrc1,
        },
        {
            img: ImgSrc1,
        },
        {
            img: ImgSrc1,
        },
    ]
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: false,
        dots: false,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <section id="buCarousel" className="buCarousels pt-70 pb-70">
            <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                    {
                        testiMonials.length === 0 ?
                            <div className="item">
                                <div className="itemshow">
                                    <p>hello</p>
                                    <img className="img-circle" src={ImgSrc1} />
                                </div>
                            </div> :
                            testiMonials.map(testiMonialDetail => {
                                return (
                                    <TestiMonialsDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />

                                )
                            })
                    }
                </OwlCarousel>
        </section>
    );
};

export {Carousel, TestiMonialsDetails} ;