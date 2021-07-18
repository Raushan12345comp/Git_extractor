import React from "react";
import Footer from "../../../layout/Footer/Footer";

const About = () => {
  return (
    <div style={{marginTop: "50px", marginBottom: "100px"}}>
      <h1 className="text-center auth-card-header">About Us.....</h1>
      <div className="w-100 text-center mt-4 auth-label " style={{letterSpacing: '1px'}}>
        <h5>We believe this website give a border spectrum of opportunity to be seen <br /> 
        and getting recognize because all the efforts which you put in, Instead of <br />
        finding code all day long in an difficult to find environment this place give<br/>
        you codes, repository and users within seconds.<br/>
        This Website is build by coders for coders because we wanted to narrow <br/>
         down the path for finding codes and making easier and more reachable to <br/>
         all, we hope you find all the 'hello worlds' out there.</h5>
        <h3 style={{marginTop: '20px'}}>Team Git-Extractor</h3>
      </div>
      <Footer />
    
    </div>
  );
};

export default About;
