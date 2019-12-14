import React, { Component } from 'react';
import FormDetails from './FormDetails';
import NextDetails from './NextDetails';
import Confirm from './Confirm';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../data';

export class DynamicForm extends Component {
    
    state = {
        title: data.title,
        step: 1,
        questions: data.questions,
        nextBtnDisable: true
    }
    

    //STEP CONFIGURATION
    nextStep = element =>{

        
        const {step} = this.state;
        const {questions} = this.state;

        //console.log(this.state["id" + element].length)
        if(questions[step]){
            if(this.state["id" + questions[step].id]){
                if(this.state["id" + questions[step].id].length >= questions[step].min_char_length && questions[step].is_required){
                    this.setState({
                        step: step + 1,
                        nextBtnDisable: false
                    })
                }else{
                    this.setState({
                        step: step + 1,
                        nextBtnDisable: true
                    })
                }
            }else{
                this.setState({
                    step: step + 1,
                    nextBtnDisable: true
                })
            }
        }else{
            this.setState({
                step: step + 1
            })
        }
        
        
        
        
    }

    prevStep = () =>{
        const {step} = this.state;
        const {questions} = this.state;
        if(questions[step]){
            if(this.state["id" + questions[step - 2].id]){
                if(this.state["id" + questions[step -2].id].length >= questions[step-2].min_char_length && questions[step-2].is_required){
                    this.setState({
                        step: step - 1,
                        nextBtnDisable: false
                    })
                }else{
                    this.setState({
                        step: step - 1,
                        nextBtnDisable: true
                    })
                }
            }else{
                this.setState({
                    step: step - 1,
                    nextBtnDisable: true
                })
            }
        }else{
            this.setState({
                step: step - 1,
            })
        }
    }

    //FIELD CHANGE HANDLER
    handleChange = input => e =>{
        const {questions} = this.state;
        const question = questions.filter(ques => ques.id == input);
        //console.log(question);

        if(question[0].min_char_length <= e.target.value.length){
            this.setState({ 
                nextBtnDisable: false
            });
        }else{
            this.setState({ 
                nextBtnDisable: true
            });
        }

        this.setState({ 
            ["id" + input]: e.target.value
        });
    };
    
    render() {
        const {step} = this.state;
        const {title} = this.state;
        const {questions} = this.state;
        const {nextBtnDisable} = this.state;


        if(questions.length < step){
            if(step == questions.length + 2){
                return(
                    <Profile/>
                )
            }else{
                return(
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        questions={questions}
                        values={this.state}
                    />
                )
            }
            
        }else{
            

            return(
                <FormDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={this.state}
                    title={title}
                    questions={questions}
                    step={step}
                    nextBtnDisable={nextBtnDisable}
                />
            )
        }
        
    }
}

export default DynamicForm
