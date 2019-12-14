import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export class NextDetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    prev = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    
    render() {
        const { values, handleChange, title } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title={title}/>
                    <TextField
                        hintText="Enter second answer"
                        floatingLabelText="Second Question"
                        onChange = {handleChange('SecondQuestion')}
                        defaultValue = {values.secondQuestion}
                    />
                    <br/>
                    <RaisedButton
                        label="Prev"
                        primary={false}
                        style={style.button}
                        onClick={this.prev}
                    />
                    <RaisedButton
                        label="Next"
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

export default NextDetails
