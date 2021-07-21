import React, { useState, useContext } from 'react'
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
    CardHeader
} from "reactstrap"

import firebase from "firebase/app"
import {UserContext} from "../../../context/UserContext"
import {Redirect, Link}  from "react-router-dom";
import {toast} from "react-toastify";
import Footer from '../../../layout/Footer/Footer';
import '../PasswordReset/forgotpassword.css'


const Signin = () => {

    const success = () => {
        toast(<div>Welcome back Login success...</div>)
    }

    const context = useContext(UserContext)

    const [email , setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSignIn = () => {
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
            console.log(res);
            context.setUser({email: res.user.email, uid: res.user.uid})
            success()
        })
        .catch(error => {
            console.log(error);
            toast(error.message, {
                type: "error"
            })
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        handleSignIn()
    }

   
  


    if (context.user?.uid) {
        return <Redirect to="/" />
    }


  return (
      <>
    <Container className='text-center auth-cont'>
        <Row>
            <Col lg={6} className='offset-lg-3 mt-5'>
                <Card>
                    <Form onSubmit={handleSubmit}>
                        <CardHeader className="auth-card-header" >Signin here</CardHeader>
                        <CardBody>
                            <FormGroup row className="mb-3">
                                <Label className="auth-label" for='email' sm={3} >
                                    Email
                                </Label>
                                <Col sm={9}>
                                    <Input
                                        type='email'
                                        name='email'
                                        id='email'
                                        placeholder='provide your email'
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required
                                        // className="text-white"
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label className="auth-label" for='password' sm={3}>
                                    Password
                                </Label>
                                <Col sm={9}>
                                    <Input
                                        type='password'
                                        name='password'
                                        id='password'
                                        placeholder='your password here'
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        required
                                        // className="text-white"

                                    />
                                </Col>
                            </FormGroup>
                        </CardBody>
                        <CardFooter>
                            <Button type='submit' className="auth-btn">
                                Sign In
                            </Button>
                        </CardFooter>
                    </Form>
                    <div className="w-100 text-center  p-3">
                        <Link to="/forgot-password" className="auth-link">Forgot Password?</Link>
                    </div>
                </Card>
            </Col>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup" className="auth-link">Sign up</Link>
            </div>
        </Row>
    </Container>
    <Footer />
    </>
);
}

export default Signin
