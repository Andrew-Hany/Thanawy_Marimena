import React, { Component } from 'react';
class quiz extends Component {
    render() {
        return (


            <div className="">
                <a onClick={this.props.sectionName === "Bible" ? () => this.props.handleread(this.props.section, this.props.filtersubsection) : () => this.props.toggleonQuiz(this.props.name)} className="bg-danger text-decoration-none quiz ml-2  ">
                    <div className=" sectiontext"  >{this.props.name}</div>
                    <i className={(this.props.filtersubsection.read === true) ? "fa fa-check bg-success text-dark rounded font-weight-lighter check" : null} ></i>
                </a>
            </div >



        );
    }

}


export default quiz