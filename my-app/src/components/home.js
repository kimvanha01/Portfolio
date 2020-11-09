import React, {Component} from 'react';
import "./home.css";
import About from './about';

class Home extends Component {
    render(){
        return(
            <div>
            <div class="jumbotron text-center" >
            <h1><b>Hello Guys! I'm Kim Văn Hà</b></h1> 
            <h2> Web Developer</h2> 
            </div>
            <About />
            </div>
        )
        
    }
    
}

export default Home;