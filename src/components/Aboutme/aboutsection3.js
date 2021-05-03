import React from 'react';
import {yoda} from '../../assets/img/yoda.jpg'
import './Aboutme.css'

console.log(yoda)
const Section3 = () =>{
    return <div className="container-fluid ab-3">
    <div className="container ">


    <div className='row'>

    <div className='col'>
            <h2 className="ab-title-3">Fun Facts</h2>
            <div className="ab-text-3">
                <p>I love helping and teaching others coding.</p>
                <p>I've been skateboarding for 16 years.</p>
                <p>I was born and raised in florida.</p>
                <p>I fly drones for fun</p>
                <p>I used to bar tend, and may have been your bartender</p>
                <p>I'm in love with good food and like to cook it.</p>
                <p>I'm knowledgeable in cheese, wine and computer science.</p>
                <p>I'm addicted breaking other peoples code.</p>
                <p>I am a jedi.</p>
                

            </div>
            </div>
            <div className='col'>
            <img
                    src={require('../../assets/img/joeyteachjon.jpg')}
                    alt="gamer-pic"
                    // className="avatar-img-2"
                    style={{height: '35rem'}}
                    />
            </div>
    </div>






    </div>
</div>
}

export default Section3