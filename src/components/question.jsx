import React, { Component } from 'react';
import Chose from './chooseInputs';


export default class question extends Component {

    render() {
        return (
            <div className="question container bg-info " >

                <h1>{this.props.quesnam}
                    {this.props.done && this.props.correct === 1 && <span className="bg-success float-right rounded correct"> 1/1 </span>}
                    {this.props.done && this.props.correct === 0 && <span className="bg-danger float-right rounded correct"> 0/1 </span>}
                    {this.props.done && this.props.correct === -1 && <span className="bg-secondary float-right rounded correct"> - </span>}

                </h1>

                {/* answers if choose */}

                {this.props.question.type === "choose" && !this.props.done && this.props.answers.map(answers =>

                    <Chose
                        question={this.props.question}
                        done={this.props.done}
                        answer={this.props.answer}
                        quiz={this.props.quiz}
                        quesnam={this.props.quesnam}
                        name={answers.name}
                        idName={this.props.quesnam + answers.id.toString()}
                        optionName={"option" + answers.id.toString()}
                        handlechoose={this.props.handlechoose} />



                )}



                {/* if text */}
                {this.props.question.type === "text" && !this.props.done &&
                    <div class="form-group">

                        <input type="text" onChange={(e) => this.props.handleText(e.target.value, this.props.quiz, this.props.question)} class="form-control" placeholder="answer this" />
                        {/* <input type="text" onChange={this.props.handleText} class="form-control" /> */}
                    </div>}

                {this.props.done &&
                    <h1 className="answers" >{this.props.answer}

                    </h1>
                }

            </div>
        )
    }

}