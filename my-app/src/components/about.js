import React, {Component} from 'react';
import {
 Button, Row, Col, Container
  } from 'reactstrap';
import "./home.css";


class About
 extends Component {
    render(){
        return(
            <div className="About">
            <Container>
                <Row>
                    <Col sm="6">
                    <img src="../images/about.jpg" class="img" width="70%" height="70%" alt="About" />
                    </Col>
                    <Col sm="6">
                    <h1><b>About Me</b></h1>
                    <br />
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br />
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <br />
                    <Button>Get in Touch</Button>
      
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}
export default About
;