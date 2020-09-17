import React, { Component } from 'react';
import SectionCom from './sectionCom';
class competitions extends Component {
    render() {
        return (


            <div className="container">

                <div role="button" onClick={() => this.props.toggleonCompSections(this.props.competitions)} className="container  bg-info rounded-pill mb-4" >

                    <div className="row m-3 " style={{ height: '150px' }}>
                        <span className="sectiontext">  {this.props.name}</span>
                    </div >

                </div>
                {this.props.open &&
                    <div className="row">
                        {/* {this.props.section.map(section =>

                            <div style={{ position: 'relative', float: 'left' }}>
                                < SectionCom
                                    key={section.id}
                                    id={section.id}
                                    sectio={section}
                                    subsection={section.subsection}
                                    name={section.name}
                                    handleread={this.props.handleread}
                                    arrow={section.arrow}
                                    handleArrowleft={this.props.handleArrowleft}
                                    handleArrowRight={this.props.handleArrowRight}
                                    competitionName={this.props.name}
                                /> </div >)
                                } */}
                    </div>}
            </div >



        );
    }

}


export default competitions