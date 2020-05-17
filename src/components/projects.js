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
                React
                </CardText>            
                <CardActions border>
                    <Button colored>
                    <a href="https://ztwhite1407.github.io/ReactRobo/" rel="noopener noreferrer" target="_blank">React App</a></Button>
                </CardActions>
            </Card>
        )
    } else if(this.state.activeTab === 1) {
        return (
            <Card shadow={5} style={{minWidth: '458', margin: 'auto'}}>
                <CardTitle style={{color: 'black',backgroundColor: 'gray', height:'170px', background: 
                'url(https://cdn.clipart.email/d677a8f592198338f6ffe9940241647f_javascript-logo-logo-de-java-script-png-png-image-transparent-_820-377.jpeg) center / cover'}}></CardTitle>
                <CardText> 
                JavaScript
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
                'url(https://s3.amazonaws.com/dev.assets.neo4j.com/wp-content/uploads/php_logo.png) center / cover'}}></CardTitle>
                <CardText> 
                PHP
                </CardText>            
                <CardActions border>
                    <Button colored>
                    <a href="http://zachapp.me/Inventory/index.php" rel="noopener noreferrer" target="_blank">Inventory Management</a></Button>
                </CardActions>
            </Card>
        )
    } else if(this.state.activeTab === 3) {
        return (
            <Card shadow={5} style={{minWidth: '458', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height:'170px', background: 
                'url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/123783891/original/68d37df18e906fa134fc75bf59420298e7098dd2/design-small-scale-java-applications-with-swing-or-java-fx.png) center / cover'}}></CardTitle>
                <CardText> 
                Java
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
                'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyv6NYtw72FQynErUn7If3cgiDKHEey_tqUVdxTM5Vl4Jdiar1&usqp=CAU) center / cover'}}></CardTitle>
                <CardText> 
                C
                </CardText>            
                <CardActions border>
                    <Button colored>
                    <a href="https://github.com/ztwhite1407/CProjects" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
                </CardActions>
            </Card>
        )
    } else if(this.state.activeTab === 5) {
        return (
            <Card shadow={5} style={{minWidth: '458', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height:'170px', background: 
                'url(https://miro.medium.com/max/720/1*ay9nx1XdZ3AOzx5Ev8xJEg.png) center / cover'}}></CardTitle>
                <CardText> 
                NodeJS
                </CardText>            
                <CardActions border>
                    <Button colored>
                    <a href="https://github.com/ztwhite1407/NodeJS-MongoDB" rel="noopener noreferrer" target="_blank">GitHub</a></Button>
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
                    <Tab>NodeJS/MongoDB</Tab>
                    
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