import React, { Component } from 'react';
import Quiz from './subsection';
class section extends Component {
    render() {
        return (
            <div >
                <div className="container border-bottom" >
                    <h2 className="row m-3"> {this.props.name}</h2>
                    <div className="row mb-5 bg-dark" style={{ borderRadius: '10px' }}>
                        <button className="w3-button w3-display-left  arrow" onClick={() => this.props.handleArrowRight(this.props.sectio)} >&#10094;</button>
                        {

                            this.props.subsection.filter(subsection => subsection.id < (5 + this.props.arrow) && subsection.id > (0 + this.props.arrow))

                                .map(filtersubsection =>
                                    <Quiz
                                        filtersubsection={filtersubsection}
                                        section={this.props.sectio}
                                        key={filtersubsection.id}
                                        name={filtersubsection.name}
                                        link={filtersubsection.link}
                                        handleread={this.props.handleread}
                                        sectionName={this.props.name}
                                        toggleonQuiz={this.props.toggleonQuiz}
                                    />
                                )
                        }
                        <button className=" w3-button w3-display-right  arrow" onClick={() => this.props.handleArrowleft(this.props.sectio)} >&#10095;</button>
                    </div >
                </div>
            </div >


        );
    }

}


export default section
