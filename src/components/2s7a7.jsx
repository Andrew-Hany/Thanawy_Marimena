import React, { Component } from 'react';
import './2s7a7.css';
export default class questions extends Component {

    state = {

        Oncomment: false,


    }
    toggleComment = () => {
        this.setState({
            Oncomment: true,
        })
    }
    render() {
        return (
            <div className="as7a7">

                <h1 className="header">{this.props.as7a7.name}</h1>
                <p className="badge-light rounded as7a7Content" >{this.props.content}</p>
                <div >
                    <div >
                        {

                            !this.props.read ? <button className="bg-success rounded   p-2 " onClick={() => this.props.handleread(this.props.as7a7)}>finish reading</button> :
                                <div >
                                    <h2>finished, check the progress Bar in the home page</h2>
                                    <button className="bg-success rounded  p-2" onClick={() => this.props.toggleonHome()}>return to home </button>

                                </div>
                        }
                        {!this.state.Oncomment && <a className="bg-light comment " onClick={() => this.toggleComment()}>comment </a>}
                        {this.state.Oncomment &&

                            <a className="bg-light comment " onClick={() => this.toggleComment()}>comment </a>

                        }
                    </div>
                </div>
            </div>
        )
    }

}