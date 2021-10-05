import React from 'react';

const Footer = () => {
    return (
        <div>
            <div>
    
    
           


    <footer
            className="text-center text-lg-start text-white"
            style={{"background-color": "#1c2331"}}
            >
     
      <section
               className="d-flex justify-content-between p-4"
               style={{"background-color": "#6351ce"}}
               
               >
      
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>
       
  
       
        <div>
          <a href="https://www.facebook.com/moinuddin.niloy/" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.facebook.com/moinuddin.niloy/" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.google.com/" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="https://www.instagram.com/moin_uddin_minhaj321/" className="text-white me-4">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/moin-uddin-b83b30215/" className="text-white me-4">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/" className="text-white me-4">
            <i className="fab fa-github"></i>
          </a>
        </div>
  
      </section>
      
      <section className="">
        <div className="container text-center text-md-start mt-5">
        
          <div className="row mt-3">
           
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            
              <h6 className="text-uppercase fw-bold">Company name</h6>
              <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  // style="width: 60px; background-color: #7c4dff; height: 2px"
                  // style={{"background-color": "#6351ce"}}
  
                  />
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
          
           
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
             
             <h6 className="text-uppercase fw-bold">Contact</h6>
             <hr
                 className="mb-4 mt-0 d-inline-block mx-auto"
                 style={{"width": "60px","background-color": "#7c4dff", "height": "2px"}}
             ></hr>
             <p><i className="fas fa-home mr-3"></i> chittagong</p>
             <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
             <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
             <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
           </div>
           
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
             
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{"width": "60px","background-color": "#7c4dff", "height": "2px"}}
              ></hr>
              <p><i className="fas fa-home mr-3"></i> chittagong</p>
              <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
              <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
            </div>
           
          </div>
        
        </div>
      </section>
     
      {/* <div
           className="text-center p-3"
          //  style="background-color: rgba(0, 0, 0, 0.2)"
           >
        © 2021 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/"
           >github.com/jahid.com</a
          >
      </div> */}
      
    </footer>
  
  
  </div>
  
        </div>
    );
};

export default Footer;