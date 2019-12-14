import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormDetails extends Component {

    // validate = () =>{
    //     if this.state
    // }

    continue = element => e =>{
        e.preventDefault();
        //     questions[step].id
        // const err = validation();

        // if(!err){
        //     this.props.nextStep(element);
        // }

        this.props.nextStep(element);
        
    }

    prev = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    
    render() {
        const { values, handleChange, title, questions, step, nextBtnDisable } = this.props;
        let displayQuestion;
        let prevBtn;
        let nextBtn;

        if(questions.length > 0){

            if(step > 1){
                prevBtn =<RaisedButton
                            label="Prev"
                            primary={false}
                            style={style.button}
                            onClick={this.prev}
                            />
            }
            
            if(step < questions.length){
                if(questions[step - 1].is_required && nextBtnDisable){
                    
                    nextBtn = <RaisedButton
                            label="Next"
                            primary={true}
                            style={style.button}
                            onClick={this.continue(questions[step].id)}
                            disabled={nextBtnDisable}
                        />
                }else{
                    nextBtn = <RaisedButton
                            label="Next"
                            primary={true}
                            style={style.button}
                            onClick={this.continue(questions[step].id)}
                            disabled={false}
                        />
                }
                
            }else{

                if(questions[step - 1].is_required && nextBtnDisable){
            
                    nextBtn = <RaisedButton
                            label="Next"
                            primary={true}
                            style={style.button}
                            onClick={this.continue()}
                            disabled={nextBtnDisable}
                        />
                }else{
                    nextBtn = <RaisedButton
                            label="Next"
                            primary={true}
                            style={style.button}
                            onClick={this.continue()}
                            disabled={false}
                        />
                }
            }

            if(questions[step - 1].question_type == "TextQuestion"){
                displayQuestion= <TextField
                                // errorText={this.state.error}
                                floatingLabelText={questions[step - 1].prompt}
                                onChange = {handleChange(questions[step - 1].id)}
                                value = {values["id" + questions[step -1].id] ? values["id" + questions[step -1].id] : ""}
                                />
            }
            // else 
            //     //CAN SCALE FOR CHECKBOX, RADIO, IMAGE

            // }
            
        }

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <div className="text-align-center">
                        <AppBar
                            showMenuIconButton={false} 
                            title={title}
                        />
                        <br/>
                        {displayQuestion}
                        <br/>
                        {prevBtn}
                        {nextBtn}
                    </div>
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

export default FormDetails
