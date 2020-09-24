import React, { Component } from 'react';

class quiz extends Component {
    render() {
        return (


            <div className="">
                <a onClick={this.props.sectionName === "Bible" ? () => this.props.toggleOn2s7a7(this.props.name) : () => this.props.toggleonQuiz(this.props.name)} className="bg-danger text-decoration-none quiz ml-2  ">
                    <div className=" sectiontext"  >{this.props.name}</div>
                    <i className={(this.props.filtersubsection.read || this.props.filtersubsection.done === true) ? "fa fa-check bg-success text-dark rounded font-weight-lighter check" : null} ></i>
                </a>
            </div >


            // /*handleread(this.props.section, this.props.filtersubsection)*/
        );
    }

}


export default quiz