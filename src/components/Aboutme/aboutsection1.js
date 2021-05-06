import React from 'react';
import styled from 'styled-components';
import './Aboutme.css'

const SectionContainer = styled.div`
    display: flex;
    flex-direction: wrap;

    @media screen and (max-width: 786px) {
        display:inline;
        align-content:center;
    }
`
const aboutContext = styled.div`
    margin:2rem;
    align-items:center;
    text-overflow:wrap;
`

const Picture = styled.div`
    position:relative;
    align-items:center;
    margin:1rem;
`


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