import React, { useEffect, useState } from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import Homeservice from '../Homeservice/Homeservice';
const img = `https://thumbs.dreamstime.com/b/informational-poster-office-programming-cartoon-life-company-employees-guy-standing-near-interactive-whiteboard-data-man-157469300.jpg`;

const Home = () => {
    const [homedb, sethomedb] = useState([]);
    useEffect(() => {
        fetch('./Homedb.json')
        .then(res => res.json())
        .then(data => sethomedb(data))
    },[])
    return (


            <div>
                <div className=' mt-5'>

                        <div className="container d-flex">
                            <div className="col-6 d-flex align-items-center justify-content-between me-5-">
                                <div className="text-dark">
                                    <h1>The Best Online Coder Course
                                    </h1>
                                    <p>A course outline is a document that benefits students and instructors. It is an essential piece when designing any course. The course outline has a few purposes.
                                    </p>
                                    
                                    <button className="btn btn-success">Learn More</button>
                                </div>

                            </div>
                            <div className="col-6 ms-5">
                             
                            <img className="img-fluid" src={img} alt=""/>
                            </div>
                            
                           

                        </div>
                </div>

                        <Container className="my-5">

                            <Row xs={4} md={4} className="g-4">
                            
                            {
                                    homedb.map(services => <Homeservice service={services}></Homeservice>)
                            }
                            </Row>

                            </Container>
                         <div>
                                <h1> Coder Event</h1>
                                <hr />
                                <div className="d-flex justify-content-center      align-items-center">
                                    <div class="card text-dark bg-light mb-3 w-50  ">
                                        <div class="card-header"><i class="fas fa-book-reader"></i> Code Warriors' Challenge, 2014
                                                6 Jun 2014</div>
                                        <div class="card-body">
                                            
                                            <p class="card-text">For the third time,Coder, an initiative of Bangladesh Association of Software & Information Services (BASIS), is going to organize the “Code Warriors' Challenge” competition. The competition is unlike any other programming...</p>
                                            <hr />
                                            <button className="btn btn-primary rounded w-25">Details</button>
                                        </div>
                                    
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-center align-items-center">
                                <div class="card text-dark bg-light mb-3 w-50  ">
                                    <div class="card-header"><i class="fas fa-book-reader"></i>  Code Warriors' Challenge, 2015
                                     2 Jul 2016</div>
                                    <div class="card-body">
                                        
                                        <p class="card-text">For the third time,Coder, an initiative of Bangladesh Association of Software & Information Services (BASIS), is going to organize the “Code Warriors' Challenge” competition. The competition
                                         is unlike any other programming...</p>
                                         <hr />
                                        <button className="btn btn-primary rounded w-25">Details</button>
                                    </div>
                               </div>
                                </div>
                         </div>
            </div>
                            
            


   

            

    
    );
};

export default Home;

