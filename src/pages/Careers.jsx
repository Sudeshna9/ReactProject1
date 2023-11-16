function Careers() {
        const items = [
            {
                heading: 'Developer',
                Required: 'Next Js',
                Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',

            },
            {
                heading: 'UI/UX Designer',
                Required: 'Figma',
                Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',

            },
            {
                heading: 'Cloud',
                Required: 'Cloud',
                Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',

            },
        ];
            return(
                <>
                    <section className="mainSec">
                        <div className="aboutBan text-center p-4 m-5">
                            <h1>Stay Connected with Us</h1>
                        </div>
                        <div className="careerSec container text-center">
                            <div>
                                <h3>Our Requirements:</h3>
                                <ul>
                                    {items.map((item, index) => (
                                    <li key={index}>
                                        <h4>{item.heading}</h4>
                                        <h5>{item.Required}</h5>
                                        <p>{item.Description}</p>
                                    </li>
                                    ))}
                                </ul>
                            </div>                            
                        </div>
                    </section>
                </>
    )
}
export default Careers;