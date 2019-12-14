import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';


export class Confirm extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    prev = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    
    render() {
        const { values, questions } = this.props;
        const listItem = [];


        for(let i=0; i<questions.length; i++){
            
            listItem.push(
                <ListItem 
                    primaryText= {questions[i].prompt}
                    secondaryText={values["id" + questions[i].id]}
                />
            )
        }

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar 
                        showMenuIconButton={false} 
                        title="Success !"
                    />
                    <List>
                        {listItem}
                    </List>
                    <br/>
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={style.button}
                        onClick={this.prev}
                    />
                    <RaisedButton
                        label="Confirm"
                        primary={true}
                        style={style.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const style={
    button:{
        margin:15    
    }
}

export default Confirm
