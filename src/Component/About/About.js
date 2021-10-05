import React from 'react';
const img=`https://suntekitsolutions.com/wp-content/uploads/2019/05/about.png`

const About = () => {
    return (
        
        
            <div className=" mt-5 pt-5 text-center text-dark">
                <div className="container my-5 w-50">
                    <h1>Achieve Your
                        Goals With Coder online learning platfrom</h1>
                    <p>To address the skill gap of HR in the industry, BASIS started its own training activities in 2007. Later in 2012, coder institutionalized its training activities and set up Coder with the support of World Bank. coder was established with a vision to be a world-class IT institute in Bangladesh for the purpose of enhancing the competitiveness of the IT Sector in Bangladesh by creating a pool of qualified IT professionals and quality certified IT companies.</p>
                </div>
                <div className="container my-5 w-50">
                <img className="img-fluid" src={img} alt=""/>
                </div>
                <button className="btn btn-outline-dark px-5 py-2 mb-5">Learn More..</button>
            </div>

            

    );
};

export default About;