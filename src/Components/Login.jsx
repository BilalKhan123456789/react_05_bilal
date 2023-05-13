import React from "react";
import "./Signup.css";
import { Formik, Form, Field } from "formik";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




class Login extends React.Component{
constructor(){
    super()
}

render(){
    return(
        <>
<Container>
    <Row>
        <Col>
        <Formik
initialValues={{
    email:"",
    psw:"",

}}
onSubmit={(value)=>{
    console.log(value)

}}>
    <Form style={{marginTop:"80px"}}>


       		<h1>Contact For Any Problem</h1>
               <label for="email"><b>Email</b></label> 
               <Field type="text" placeholder="Enter Your E-mail" name="email" />

        <label for="text"><b>Description</b></label>
        <Field type="text" name="psw" />


		<button type="submit" class="registerbutton">Send</button>

        </Form>
        </Formik> 
        
        </Col>
        <Col>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14416.854808272847!2d68.3642777!3d25.3976563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c71b4e570aba5%3A0x44ff37858d6da3f3!2sSMIT%20Hyderabad!5e0!3m2!1sen!2s!4v1683835255588!5m2!1sen!2s" width="500" height="350" style={{border:0, allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
        </Col>
    </Row>
</Container>
       




        </>
    )
}


}












export default Login



