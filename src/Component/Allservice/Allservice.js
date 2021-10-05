import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Allservice = () => {
    const [homedb, sethomedb] = useState([]);
    useEffect(() => {
        fetch('./Allservices.json')
        .then(res => res.json())
        .then(data => sethomedb(data))
    },[])
    return (
        <div>

   
            <h1 className="mt-4 p-3 mb-2 bg-secondary text-white"> More Curses <i class="fas fa-arrow-circle-down"></i></h1>

          
              <Container className="my-5">

              <Row xs={4} md={4} className="g-4">
                
                {
                        homedb.map(services => <Service service={services}></Service>)
                }
              </Row>

              </Container>
          

        </div>
    );
};

export default Allservice;