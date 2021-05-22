import React from 'react';
import styled from 'styled-components';
import { SectionContainer, aboutContext, Picture} from './AboutmeElements';


const Section1 = () =>{
    return <SectionContainer>
                    <aboutContext>
                        <h2 className="ab-title-1">About me</h2>
                        <div className="ab-text-1">
                            <h5>I'm a software engineer based in sunny Tampa, Florida.</h5>
                            <p>
                                For a little over 3 years, I've been turning complex problems into simple,
                                beautiful and intuitive designs. When I'm not coding, instagramming or pushing pixels, 
                                you'll find me fathering my son, skateboarding or tinkering on cool stuff.
                            </p>

                        </div>
                    </aboutContext>
                    <Picture>
                        <img
                                src={require('../../assets/img/meandaidan.jpg')}
                                alt="gamer-pic"
                                // className="avatar-img-2"
                                style={{height: '20rem'}}
                                />
                    </Picture>
            </SectionContainer>
}

export default Section1