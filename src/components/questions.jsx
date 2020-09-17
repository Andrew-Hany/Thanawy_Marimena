import React, { Component } from 'react';
import Ques from './question';
export default class questions extends Component {
    render() {
        return (
            <div className="container form p-3 mt-5">
                <h1>{this.props.quiz.name}</h1>
                {this.props.questions.map(question =>
                    <div>
                        <Ques
                            correct={question.correct}
                            quiz={this.props.quiz}
                            key={question.id}
                            answer={question.answer}
                            question={question}
                            done={this.props.done}
                            quesnam={question.name}
                            answers={question.answers}
                            handlechoose={this.props.handlechoose}
                            handleText={this.props.handleText}
                        />
                    </div>)
                }
                <div className="row">
                    <div className="col-9" />
                    <button className="bg-success rounded col-2  p-2" onClick={() => this.props.handlesubmitform(this.props.quiz)}>submit</button>
                </div>
            </div>
        )
    }

}