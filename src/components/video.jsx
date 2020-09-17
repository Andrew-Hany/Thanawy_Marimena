import React, { Component } from 'react';
import Vid from './video.mp4'

class video extends Component {
    state = {
        play: true,
        muted: false,

    }
    playPause = () => {
        var myVideo = document.getElementById("video1");

        if (myVideo.paused)
            myVideo.play();
        else
            myVideo.pause();
        this.setState({ play: !this.state.play })
    }
    mute = () => {

        this.setState({ muted: !this.state.muted })
    }

    render() {
        return (
            <div >

                <video id="video1" src={Vid} autoPlay={false} loop={true} className="video" muted={this.state.muted}></video>
                <div className="border-top  position"></div>
                {/* play/pause */}
                {this.state.play && <i className="fa fa-pause stopplay" role="button" onClick={this.playPause} ></i>
                }
                {!this.state.play && <i className="fa fa-play stopplay" role="button" onClick={this.playPause} ></i>
                }
                {/* muted */}
                {this.state.muted && <i className="fas fa-volume-mute mute" role="button" onClick={this.mute}></i>
                }
                {!this.state.muted && <i className="fas fa-volume-up mute" role="button" onClick={this.mute}></i>
                }

            </div>
        );

    }
}

export default video