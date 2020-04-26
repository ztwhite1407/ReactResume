import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import MyPic from './IMG-1891.jpg';


class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Zach White</h2>
                        <img 
                            src={MyPic}
                            alt="MyPic"
                            style={{height: '250px' }}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em' }}>
                        Hello, my name is Zach.  I have been developing sotware and 
                        web applications for the past 3 years.  I am a senior electrical 
                        engineering student, full time project manager and, most 
                        importantly, a husband and father to two awesome kiddos.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                        <List>
                          <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <i className="fa fa-phone-square" aria-hidden="true"/>
                            (256) 595-0880
                            </ListItemContent>
                          </ListItem>
                          <ListItem>
                          <ListItemContent style={{fontSize: '26px', fontFamily: 'Anton'}}>
                            <i className="fa fa-envelope" aria-hidden="true"/>
                            zachary.white07@gmail.com
                            </ListItemContent>                          
                          </ListItem>
                        </List>
                        </div>

                        



                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;