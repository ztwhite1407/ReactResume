import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import ResumePic from './resumepic.jpg';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import JobDesc from './JobDescription';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell className="resume-left-col" col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                            src={ResumePic}
                            alt="ResumePic"
                            style={{height: '200px',}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Zach White</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%' }}/>
                        <p>From the moment I printed my first "Hello World" to the console,
                            I knew that I wanted to build and develop software.  Little did I know
                            the impact that those two words would have on my life.  Years later, 
                            I am more passionate that ever, and ambitious to learn and improve my
                            skills.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%' }}/>
                        <h5>Address</h5>
                        <p>Cullman, AL</p>
                        <h5>Phone</h5>
                        <p>(205) 595-0880</p>
                        <h5>Email</h5>
                        <p>zachary.white07@gmail.com</p>
                        <h5>Web</h5>
                        <p>zach1407.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%' }}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                       <h2>Education</h2>


                        <Education
                            startYear={2015}
                            endYear={2017}
                            schoolName="Wallace State"
                            schoolDescription="Associates in Science"
                        />

                        <Education
                            startYear={2017}
                            endYear={2021}
                            schoolName="University of Alabama at Birmingham"
                            schoolDescription="BS Electrical Engineering"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>

                        <Experience 
                            startYear={2019}
                            endYear="Present"
                            jobName="Miller Electric Co."
                            jobLocation="Birmingham, AL"
                            jobDescription="Built and maintained scheduling and budget applications for industrial
                            and commercial projects"
                            jobDescription2="Estimated costs and negotiated contracts"
                            jobDescription3="Built and maintained customer base"
                            jobDescription4="Managed projects from start to finish, as well as kept record of all 
                            financials and billing on each project managed"
                            jobDescription5="Managed inventory coming to and from projects"
                        />

                        <Experience 
                            startYear={2013}
                            endYear={2019}
                            jobName="Craft Electric Co."
                            jobLocation="Birmingham, AL"
                            jobDescription="Built Inventry Management system using JavaScript, PHP, 
                            SQL, JQuery and AJAX." 
                            jobDescription2="Managed small to large scale industrial and commercial
                            electrical projects"
                            jobDescription3="Built and maintained relationships with customers"
                            jobDescription4="Contract Negotiation"
                            jobDescription5="Managed projects from start to finish"
                        />

                        

                        
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <Skills 
                            skill="JavaScript"
                            />
                            <Skills 
                            skill="HTML"
                            />
                            <Skills
                            skill="CSS"
                            />
                            <Skills 
                            skill="Bootstrap"
                            />
                            <Skills
                            skill="React"
                            />
                            <Skills 
                            skill="NodeJS"
                            />
                            <Skills
                            skill="ExpressJS"
                            />
                            <Skills 
                            skill="SQL"
                            />
                            <Skills
                            skill="PHP"
                            />
                            <Skills 
                            skill="MATLAB"
                            />
                            <Skills
                            skill="C"
                            />
                            <Skills 
                            skill="Python"
                            />
                            <Skills
                            skill="Java"
                            />

                        

                    
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;