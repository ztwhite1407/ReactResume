import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Experience extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '8px'}}>{this.props.jobName}</h4>
                    <p>{this.props.jobLocation}</p>
                    <ul>
                    <li>{this.props.jobDescription}</li>
                    <li>{this.props.jobDescription2} </li>
                    <li>{this.props.jobDescription3}</li>
                    <li>{this.props.jobDescription4} </li>
                    <li>{this.props.jobDescription5} </li>
                    </ul>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;