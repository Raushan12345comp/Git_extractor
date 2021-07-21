import React from "react";
import { MdEmail, MdPhoneAndroid } from "react-icons/md";
import "./contact.css";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  Row,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Alert,
} from "reactstrap";

const Contact = () => {
  return (
    // <div id="contact">
    //   <div className="contact">
    //     <h1 className="contact-title">Contact</h1>
    //   </div>
    //   <div className="contact-flex">
    //     <div className="contact-details">
    //       <div className="call">
    //         <MdPhoneAndroid className="icon" />
    //         <h3 className="contact-heading">Call:</h3>
    //         <p className="conatact-para">+910101xxxxxx</p>
    //       </div>

    //       <div className="email">
    //         <MdEmail className="icon" />
    //         <h3 className="contact-heading">Email:</h3>
    //         <p className="conatact-para">gitextractor@gmail.com</p>
    //       </div>

    //       <div>
    //           <img width="395px" height="400px" src="Images/gif.gif"></img>
    //       </div>

    //     </div>

    //     <div>
    //       <form
    //         action="/contact"
    //         name="contact"
    //         method="post"
    //         data-netlify="true"
    //         className="form"
    //       >
    //         <input type="hidden" name="form-name" value="contact" />
    //         <div className="form-group">
    //           <label className="label">Your Name</label>
    //           <input
    //             type="text"
    //             className="form-control"
    //             id="name"
    //             placeholder="name"
    //             name="name"
    //             required
    //           />
    //         </div>

    //         <div className="form-group">
    //           <label className="label">Your Email</label>
    //           <input
    //             type="email"
    //             className="form-control"
    //             id="email"
    //             placeholder="email"
    //             name="email"
    //             required
    //           />
    //         </div>

    //         <div className="form-group">
    //           <label className="label">Subject</label>
    //           <input
    //             type="text"
    //             className="form-control"
    //             placeholder="subject"
    //             name="subject"
    //             required
    //           />
    //         </div>
    //         <div className="form-group">
    //           <label className="label">Message</label>
    //           <textarea
    //             rows="10"
    //             className="form-control"
    //             name="message"
    //             placeholder="message"
    //             required
    //           ></textarea>
    //         </div>

    //         <div>
    //           <button className="submit" type="submit">
    //             Send Message
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>

    <>
      <Container className="text-center auth-cont">
        <Row>
          <Col lg={6} className="offset-lg-3 mt-5">
            <Card>
              <Form
                action="contact"
                name="contact"
                method="post"
                data-netlify="true"
              >
              <input type="hidden" name="form-name" value="contact" />
                <CardHeader className="text-center auth-card-header">
                  Contact Form
                </CardHeader>
                {/* {error && <Alert variant="danger">{error}</Alert>} */}

                <CardBody>
                  <FormGroup row className="mb-3">
                    <Label className="auth-label" for="name" sm={3}>
                      Your Name
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required
                        // className="text-white"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row className="mb-3">
                    <Label className="auth-label" for="email" sm={3}>
                      Your Email
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="text-white"
                        placeholder="Enter your Email"
                        required
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row className="mb-3">
                    <Label className="auth-label" for="message" sm={3}>
                      Mesaage
                    </Label>
                    <Col sm={9}>
                      <textarea
                        type="text"
                        name="message"
                        rows="10"
                        style={{padding: '10px'}}

                        placeholder="Type your Message"
                        required
                        // className="text-white"
                      />
                    </Col>
                  </FormGroup>
                 
                </CardBody>
                <CardFooter>
                  <Button type="submit" className="auth-btn">
                    Send Message
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </Col>
         
        </Row>
      </Container>
    </>
  );
};

export default Contact;
