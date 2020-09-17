import React, { Component } from 'react';
import SubsectionCom from './subsection';
class sectionC extends Component {
    render() {
        return (
            <div >
                <div className="container border-bottom " >
                    <h2 className=" m-3"> {this.props.name}</h2>
                    <div className="row mb-5 ml-5 mr-5 bg-dark overflow-auto " style={{
                        borderRadius: '10px', height: '400px', width: "424px",
                    }} >
                        {
                            this.props.subsection.filter(sec => sec.competitionname === this.props.competitionName)
                                .map(filtersubsection =>

                                    <SubsectionCom
                                        filtersubsection={filtersubsection}
                                        section={this.props.sectio}
                                        key={filtersubsection.id}
                                        name={filtersubsection.name}
                                        link={filtersubsection.link}
                                        handleread={this.props.handleread}
                                        sectionName={this.props.name}
                                    />
                                )
                        }
                    </div >
                </div>
            </div >


        );
    }

}


export default sectionC
