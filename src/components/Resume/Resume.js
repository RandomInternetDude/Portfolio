import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Skills from '../Skills/skills';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import ReactLoading from 'react-loading';
import {Link} from 'react-router-dom'
import myhead from '../../assets/img/meinwater.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faRProject } from '@fortawesome/free-brands-svg-icons';





class Resume extends Component {
  state = {
    done: undefined
  }


  componentDidMount() {
    setTimeout(() => {
      this.setState({
        done: true
      })
    }, 300);
  }



  render() {


    return(
      <div>


          {!this.state.done ? (
          <ReactLoading className="center-load" type={"bars"} color={"white"} />
          ) : (






            <Grid>
              <Cell col={4.5} phone={8}>
                <div style={{textAlign: 'center'}}>
                  <img
                    src={myhead}
                    alt="avatar"
                    className="avatar-img-2"
                    style={{height: '25rem', width:'25rem'}}
                    />
                </div>

        

                <h2 style={{paddingTop: '2em'}}>Joey Rivera</h2>
                <div className="row">
                
                <div className="ml-3 mt-3 mr-4">
                <Link className='btn btn-primary' to="/resume/JRivera-Resume-2021.docx" target="_blank" download>Download CV</Link>
                </div>
                  <a className="mr-4 social-link"  target="_blank"  rel="noopener noreferrer"  href='https://www.github.com/joey7040'>
                      <FontAwesomeIcon icon={faGithub} size="4x"/>
                  </a>
                </div>
                <h4 >Fullstack Developer</h4>
                
   
                <hr style={{borderTop: '3px solid #15cdfc', width: '100%'}}/>
                <p>Hello, my name is Joey Rivera, I’m a mid to senior level full stack developer. Every day I work with technologies such as Python, Javascript, Linux, & Aws Cloud infrustructue. 
                Working at my current company Trellance, has placed me in the center of making great technology that will drive the future in data analytics for the credit union financial services space.    
                While creating new features for the ironsafe platform I’ve also createdm deployed, and maintained cloud security architecture. As well as created automated deployment processes for the platforms underlying cloud infrastructure in AWS.
                For little over a year now I've been working on dynamic apis that create predictive analytics tools for the medical & financial sector. I encourage those who are curious to check out <a href="https://www.trellance.com/ironsafe-data-extraction-platform/">Ironsafe here. </a>
                When I find free time, I practice for competitve esports and make content to help others improve their skillsets in programming pradigms popular in the job market today.
                I aspire to contribute as much as possible back to the community that has given me much more than I could ever ask for. </p>
                <hr style={{borderTop: '3px solid #15cdfc', width: '85%'}}/>
                <h5>Address</h5>
                <p>3350 W Hillsborough ave Tampa FL</p>
                <h5>Phone</h5>
                <p>(813)-847-0551</p>
                <h5>Email</h5>
                <p>joey7040@hotmail.com</p>



               
               
                <hr style={{borderTop: '3px solid #15cdfc', width: '75%'}}/>
                <div className="social-links-2">
                <div className="row ml-1">
                    <a className="mr-4 social-link"  target="_blank"  rel="noopener noreferrer"  href='https://www.linkedin.com/in/joseph-i-rivera/'>
                    <FontAwesomeIcon icon={faLinkedin} size="4x"/>
                    </a>
                    <a className="mr-4 social-link"  target="_blank" rel="noopener noreferrer"  href='https://www.instagram.com/joeyvision/'>
                    <FontAwesomeIcon icon={faInstagram} size="4x"/>
                    </a>
                    <a className="mr-4 social-link"  target="_blank" rel="noopener noreferrer"  href="https://twitter.com/JoeySaiyancoder">
                    <FontAwesomeIcon icon={faTwitter} size="4x"/>
                    </a>
                </div>

                </div>
              
              
              </Cell>
              <Cell col={8}>
              
              <h2>Experience</h2>

              <hr style={{borderTop: '3px solid #d0bba9'}} />
              <Experience
                startYear="Dec 2020"
                endYear="April 2021"
                jobName="Express Scripts - Full Stack Software Engineer (Contractor)"
                jobDescription="    
                Provided expert content/professional leadership on complex Engineering assignments/projects. Responsible for designing and developing enterprise client facing applications, which present and model critical data across Customer, Provider, Claims, Client and Benefits data. Participation in the delivery of the definitive enterprise information environment that enables 
                strategic decision-making capabilities across enterprise via an analytics and reporting.
                Exercises considerable creativity, foresight, and judgment in conceiving, planning, and delivering initiatives.
                Used deep professional knowledge and acumen to advise functional leaders.
                Focused on providing thought leadership within Information Management but worked on broader projects, which required understanding of wider business strategies.
                Recognized internally as a subject matter expert on coverage review department, client survey reporting and command center portal web utilities.
                Wrote referenceable & modular reusable components in React 16 as well as Python Flask.
                Designed and architected solutions of the internal web utilities used throughout the business."
                />

              <Experience
                startYear="Jan 2019"
                endYear="Dec 2020"
                jobName="Trellance - Full Stack Software Engineer FTE"
                jobDescription="    
                 Created dynamic apis and core connectors for data pipelines.
                 Developed and maintained enterprise applications in production software.
                 Provide continuous support for production issues.
                 Vulnerability patch management.
                 Design and build user interfaces in JavaScript es6 based off business requirements.
                 Deployed and maintained cloud SaaS platform. 
                 Created automated deployment processes for underlying cloud infrastructure."
                />

              <Experience
                startYear="Aug 2018"
                endYear="Jan 2019"
                jobName="Verizon - Front End Software Engineer (Contractor)"
                jobDescription="
                Coded clean syntax for enterprise grade web applications. 

                Worked closely with a design team to create working applications from mock-ups.  
                
                Created Bootstrap & JavaScript libraries with Angular 7.  
                
                Wrote reusable code and debugged issues within interfaces. 
                
                Managed multiple applications at once and communicate with teams across Verizon on development solutions. "
                />
              <Experience
                startYear="Jun 2018"
                endYear="Aug 2018"
                jobName="Germinal Resources - Front End Software Developer (Contractor)"
                jobDescription="
                Provided web development services for small businesses, startups, & large companies.  

                Created dynamic front-end interfaces with AngularJS.  
                
                Created mobile first native applications with Angular mobile UI and Cordova. 
                
                Created favicons and other application images to match application themes and structure.  "
                />
              <Experience
                startYear="Dec 2017"
                endYear="Aug 2018"
                jobName="Free Lance Web Developer"
                jobDescription="
                Provided web development services for clients from various sources. 

                Created dynamic front-end interfaces in TypeScript with Angular.  

                Created mobile first native applications with Angular mobile UI and Cordova. 

                Built websites using HTML5, CSS3, JavaScript, jQuery & WordPress.

                http://wetruerealty.com/
                
                http://www.framco.org/
                
                http://congo.io/
                
                https://justmarry.com/
                
                http://www.onswann.com/#destination
                
                http://extremeautolights.com/"
                />
            
              <hr style={{borderTop: '3px solid #d0bba9'}} />
              <h2>Education</h2>

                
              <Education
                startYear={2014}
                endYear={2016}
                schoolName="Hillsborough Community College"
                schoolDescription="While pursuing my computer 
                science associate degree, 
                I have developed an understanding of the 
                basic principles and practices needed to program and m
                aintain computer programs and computer systems. 
                I have also completed many of the general education courses required 
                by most four-year universities."
                />



              <Education
                startYear={2017}
                endYear={2018}
                schoolName="Udemy "
                schoolDescription="Certification to make interactive websites and web applications"
                />
              


              <hr style={{borderTop: '3px solid #d0bba9'}} />
              <h2>Skills</h2>
             
              <Skills
                skill="Linux"
                progress={70}
                />
              <Skills
                skill="AWS"
                progress={70}
                />
              <Skills
                skill="MySql"
                progress={100}
                />
              <Skills
                skill="MongoDB"
                progress={70}
                />
              <Skills
                skill="Python"
                progress={100}
                />
              <Skills
                skill="Java"
                progress={60}
                />
             
              <Skills
                skill="HTML/CSS"
                progress={90}
                />
             
              <Skills
                skill="NodeJS"
                progress={90}
                />
             
              <Skills
                skill="React"
                progress={100}
                />
              <Skills
                skill="Vue"
                progress={100}
                />
              <Skills
                skill="Angular"
                progress={85}
                />


          </Cell>
        </Grid>


          )}

      </div>
    )
  }
}

export default Resume;