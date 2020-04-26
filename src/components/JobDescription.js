import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Experience from './experience.js'


class JobDesc extends Experience {
    render() {
        return(
            <Grid>
                <Cell col={12}>
                <ul>
                    <li>{this.props.jobDescription}</li>
                </ul>
                </Cell>

            </Grid>
        )
    }
}

export default JobDesc;