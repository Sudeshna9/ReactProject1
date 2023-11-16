import imgBg from '../assets/images/visionBg.jpg';
function Vision (){

    const visonBg={
        background: `url("${imgBg}")`
    }
    return(
        <>
            <section className="mainSec visonSec" style={visonBg}>
                <div className="aboutBan text-center p-4 m-5">
                    <h1>Our Vision</h1>
                </div>
                <div className="aboutCon container text-center">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat pellentesque adipiscing commodo elit at imperdiet dui. Accumsan tortor posuere ac ut. Sapien et ligula ullamcorper malesuada proin libero nunc. Auctor urna nunc id cursus metus aliquam eleifend mi. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Dictum non consectetur a erat nam at. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. Massa vitae tortor condimentum lacinia quis vel.</p>
                </div>
            </section>
        </>
    )
}
export default Vision;