import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import MyAvatar from './myava.png';




class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        
                        <div className="banner-text">
                            <h1>Zach White</h1>

                            <hr/>

                            <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | SQL | PHP | Python</p>

                        <div className="social-links">

                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/zachary-white-67b810110" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            {/* Github */}
                            <a href="https://github.com/ztwhite1407/MyProjects" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github" aria-hidden="true" />
                            </a>

                            {/* Twitter */}
                            <a href="https://twitter.com/zach1407" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-twitter" aria-hidden="true" />
                            </a>
                            
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;