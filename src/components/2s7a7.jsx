import React, { Component } from 'react';

export default class questions extends Component {
    render() {
        return (
            <div className="container">

                <h1 style={{ textAlign: "center", margin: "50px" }}>{this.props.as7a7.name}</h1>
                <p className="badge-light rounded" style={{ textAlign: "right", padding: "40px" }}>{this.props.content}</p>
                <div className="row">
                    <div className="col-9">
                        {

                            !this.props.read ? <button className="bg-success rounded col-2  p-2 " onClick={() => this.props.handleread(this.props.as7a7)}>finish reading</button> :
                                <div >
                                    <h2>finished, check the progress Bar in the home page</h2>
                                    <button className="bg-success rounded col-2  p-2" onClick={() => this.props.toggleonHome()}>return to home </button>
                                </div>
                        }
                    </div>
                </div>
            </div>
        )
    }

}