import AboutImg from "../assets/images/about.png";
const Aboutus = () =>{
    return(
        <>
            <section className="mainSec">
                <div className="aboutBan text-center p-4 m-5">
                    <h1>About Us</h1>
                </div>
                <div className="aboutCon container">
                    <div className="row">
                        <div className="col-md-7">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat pellentesque adipiscing commodo elit at imperdiet dui. Accumsan tortor posuere ac ut. Sapien et ligula ullamcorper malesuada proin libero nunc. Auctor urna nunc id cursus metus aliquam eleifend mi. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Dictum non consectetur a erat nam at. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. Massa vitae tortor condimentum lacinia quis vel. Tellus orci ac auctor augue mauris augue neque. Mattis vulputate enim nulla aliquet. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo.</p>
                        </div>
                        <div className="col-md-5">
                            <img src={AboutImg} alt="About Images"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Aboutus;