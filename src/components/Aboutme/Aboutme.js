import React, {Component} from 'react';
import ReactLoading from 'react-loading';
import Section1 from './aboutsection1';
import Section2 from './aboutsection2';
import './Aboutme.css'
import Section3 from './aboutsection3';
import Section4 from './aboutsection4';



export default class Aboutme extends Component {
    state = {
        done : undefined
      }

    componentDidMount(){
    setTimeout(()=>{
        this.setState({
        done : true
        })
    },250)
    }



    render(){
        return (

            <div>

                {!this.state.done ? (
                    <ReactLoading className="center-load" type={"bars"} color={"white"} />
                        ) : (



                <div className="spacer">

                        <Section1  />

                        <Section2 />

                        <Section3 /> 
                        
                        <Section4 /> 
                </div>

                )}
            </div>
        )
    }
}