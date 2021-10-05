import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Homeservice = (props) => {
    const {Course_name,Date,Time,img,price} = props.service;
    return(
      <div>
        <Col className=" shadow-lg p-3 mb-5 bg-body rounded shadow-none h-100 rounded">
          <Card className="shadow h-100">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title> <b>{Course_name}</b> </Card.Title>
                  <Card.Text>
                  <b><i class="far fa-calendar-alt"></i> Date:</b> {Date}
                  <hr />
                  <b><i class="far fa-clock"></i> Total Hours</b>: {Time}
                  <hr />
                  <b> Price</b>: {price}
                  </Card.Text>
                  <button type="button" class="btn btn-primary">Apply Now</button>
            </Card.Body>
          </Card>
        </Col>
      </div>
    
    )
};

export default Homeservice;


