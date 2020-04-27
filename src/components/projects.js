import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
   constructor(props) {
       super(props);
       this.state = {activeTab: 0 };
   } 

   toggleCategories() {
    if(this.state.activeTab === 0) {
        return (
            <Card shadow={5} style={{minWidth: '458', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height:'170px', background: 
                'url(https://reactjs.org/logo-og.png) center / cover'}}></CardTitle>
                <CardText> 
                Coming Soon!
                </CardText>            
                <CardActions border>
                    <Button colored>
                    <a href="https://github.com/ztwhite1407/MyProjects/tree/master/Inventory%20Application" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
                </CardActions>
            </Card>
        )
    } else if(this.state.activeTab === 1) {
        return (
            <Card shadow={5} style={{minWidth: '458', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height:'170px', background: 
                'url(https://cdn.clipart.email/d677a8f592198338f6ffe9940241647f_javascript-logo-logo-de-java-script-png-png-image-transparent-_820-377.jpeg) center / cover'}}></CardTitle>
                <CardText> 
                
                </CardText>            
                <CardActions border>
                    <Button colored>
                    <a href="https://github.com/ztwhite1407/MyProjects/tree/master/Drum%20Kit%20Starting%20Files" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
                </CardActions>
            </Card>
        )
        
    } else if(this.state.activeTab === 2) {
        return (
            <Card shadow={5} style={{minWidth: '458', margin: 'auto'}}>
                <CardTitle style={{color: 'black', fontWeight: 'heavy', height:'170px', background: 
                'url(https://www.vippng.com/png/detail/66-666240_elephant-clipart-black-and-white-2d-elephant.png) center / cover'}}></CardTitle>
                <CardText> 
                
                </CardText>            
                <CardActions border>
                    <Button colored>
                    <a href="https://github.com/ztwhite1407/MyProjects/tree/master/Inventory%20Application" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
                </CardActions>
            </Card>
        )
    } else if(this.state.activeTab === 3) {
        return (
            <Card shadow={5} style={{minWidth: '458', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height:'170px', background: 
                'url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/123783891/original/68d37df18e906fa134fc75bf59420298e7098dd2/design-small-scale-java-applications-with-swing-or-java-fx.png) center / cover'}}></CardTitle>
                <CardText> 
                
                </CardText>            
                <CardActions border>
                    <Button colored>
                    <a href="https://github.com/ztwhite1407/JavaProjects" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
                </CardActions>
            </Card>
        )
    } else if(this.state.activeTab === 4) {
        return (
            <Card shadow={5} style={{minWidth: '458', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height:'170px', background: 
                'url(https://seeklogo.com/images/C/c-programming-language-logo-9B32D017B1-seeklogo.com.png) center / cover'}}></CardTitle>
                <CardText> 
                
                </CardText>            
                <CardActions border>
                    <Button colored>
                    <a href="https://github.com/ztwhite1407/CProjects" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
                </CardActions>
            </Card>
        )
    }

   }

   

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>PHP/SQL</Tab>
                    <Tab>Java</Tab>
                    <Tab>C</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid> 

                </section>
            </div>
        )
    }
}

export default Projects;