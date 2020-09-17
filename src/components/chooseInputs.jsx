import React, { Component } from 'react';

export default class choose extends Component {

    render() {

        return (

            <div class="form-check">

                <input class="form-check-input" type="radio" name={this.props.quesnam} id={this.props.idName} option={this.props.optionName} />
                <label class="form-check-label" for={this.props.idName} onClick={() => this.props.handlechoose(this.props.name, this.props.quiz, this.props.question)}>
                    {this.props.name}

                </label>
            </div>

        )
    }

}