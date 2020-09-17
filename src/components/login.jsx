import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class login extends Component {


    state = {
        login: true,
    }



    togglesignup = () => {
        this.setState({ login: false })
        console.log({ login });
    };
    togglelogin = () => {
        this.setState({ login: true })
        console.log({ login });
    };

    render() {

        return (

            <div >
                <div>
                    {!this.props.auth &&
                        <div>
                            <span className="text" onClick={this.togglelogin}>login</span>
                            <span className="text" onClick={this.togglesignup}>sign up</span>

                            {/* login */}
                            {this.state.login && <div className="login">
                                <h1 className="title">login</h1>
                                <form>


                                    <input type="text" className="input" placeholder="mail" />
                                    <input type="password" className="input" placeholder="password" />
                                </form>
                                <div className="facebook">
                                    <FacebookLogin
                                        appId="1076228416112806"
                                        autoLoad={false}
                                        fields="name,picture,email"
                                        onClick={this.props.componentClicked}
                                        callback={this.props.responseFacebook}
                                    />)       </div>
                            </div>}
                            {/*------------------------------------ login ------------------------------------*/}
                            {/* signup */}
                            {!this.state.login && <div className="login" style={{ height: '450px' }}>
                                <h1 className="title">sign up</h1>
                                <form>

                                    <input type="name" className="input" placeholder="first name" />
                                    <input type="text" className="input" placeholder="last name" />
                                    <input type="text" className="input" placeholder="mail" />
                                    <input type="password" className="input" placeholder="password" />
                                    <input type="mail" className="input" placeholder="email" />
                                    <input type="number" className="input" placeholder="mobile number" />
                                    <button type="submit" className="submit">sign up </button>
                                </form>

                            </div>}
                            {/*------------------------------------ signup ------------------------------------*/}
                        </div>
                    }
                    {/* {this.props.auth&& <div>{ 
                
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px',
                    color: '#000',
                    position: 'relative',
                    top:'50px'
                }}>
                    <img src={this.props.picture} alt={this.props.name} />
                    <h2>Welcome {this.props.name}!{this.props.mails}</h2>
                </div>
            }
                   </div>
                }    */}
                </div>

            </div>
        );
    }
}