import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class About extends Component {
    render() {
        return (
            <Grid>
                <Cell className="aboutme-col">
                    <div>
                        <h1>About Me</h1>
                        <p>
                            Hello World, my name is Zach White and I am a developer.  I am 
                            a husband and father to two (three soon) awesome kids.  I have been
                            a full project manager for electrical projects for the past 6 years,
                            while also completing my bachelor's degree in electrical engineering. 
                            I love spending time with my family, listening/playing music and learning
                            any and all I can in the world of software development.  I am constantly 
                            trying to learn something new.  I hope you enjoy my page, and feel free to 
                            say hey.  
                        </p>
                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default About;