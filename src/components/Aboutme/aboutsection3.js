import React from 'react';
import {yoda} from '../../assets/img/yoda.jpg'
import { aboutContext, Picture, SectionContainer } from './AboutmeElements';

console.log(yoda)
const Section3 = () =>{
    return <SectionContainer>
        <aboutContext>
            <h2 className="ab-title-3">Fun Facts</h2>
            <div className="ab-text-3">
                <p>I love helping and teaching others coding. I've been skateboarding for 16 years.</p>
                <p>I was born and raised in florida. I fly drones for fun. I used to bar tend, and may have been your bartender if you ever roamed south Tampa.</p>
                <p>I'm in love with good food and like to cook it. I like to think I'm knowledgeable in cheese, wine and computer science.</p>
                <p>I'm addicted to breaking ground on complex problems. I am a jedi and the force is strong within me.</p>
                

            </div>
        </aboutContext>
        <Picture>
            <img
                src={require('../../assets/img/joeyteachjon.jpg')}
                alt="gamer-pic"
                // className="avatar-img-2"
                style={{height: '35rem'}}
                />
        </Picture>

    </SectionContainer>
    
}

export default Section3