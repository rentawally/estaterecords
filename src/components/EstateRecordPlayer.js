import React from 'react';
import '../App.css';

const Song01 = "http://www.eister-hargrave.net/html/1990WallyWorld-ElectricSissyland.mp3";
const Song02 = "http://www.eister-hargrave.net/html/1990WallyWorld-SuckerCut.mp3";
const Song03 = "http://www.eister-hargrave.net/html/1990WallyWorld-MexModSissy.mp3";
const Song04 = "http://www.eister-hargrave.net/html/1990WallyWorld-Dumhummin.mp3";
const Song05 = "http://www.eister-hargrave.net/html/1990WallyWorld-TrickQuestion.mp3";
const Song06 = "http://www.eister-hargrave.net/html/1990WallyWorld-TheChain.mp3";
const Song07 = "http://www.eister-hargrave.net/html/2012WallyWorld-RedWave.mp3";
const Song08 = "http://www.eister-hargrave.net/html/2012WallyWorld-LAB.mp3";
const Song09 = "http://www.eister-hargrave.net/html/2013WallyWorld-UrbanIndian.mp3";
const Song10 = "http://www.eister-hargrave.net/html/2012WallyWorld-SugarOnTop.mp3";
const Song11 = "http://www.eister-hargrave.net/html/2012WallyWorld-FoxyKnoxy.mp3";
const Song12 = "http://www.eister-hargrave.net/html/1994WallyWorld-HeartsThatBeat.mp3";


function getTime(time) {
    if (!isNaN(time)) {
        return (
            Math.floor(
                time / 60) + ":" + ("0" + Math.floor(
                time % 60)).slice(-2)
        );

    }
}

class Audio extends React.Component {
    state = {
        selectedTrack: null,
        player: "stopped",
        currentTime: null,
        duration: null
    };

componentDidMount() {
    this.player.addEventListener("timeupdate", e => {
        this.setState({
            currentTime: e.target.currentTime, duration: e.target.duration
        });
    });
}

componentWillUnmount() {
    this.player.removeEventListener("timeupdate", () => {});
}

componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedTrack !== prevState.selectedTrack) {
        let track;
        switch(this.state.selectedTrack) {
            case "Wally World - ElectricSissyland":
                track = Song01;
                break;
                case "Wally World - Sucker Cut":
                track = Song02;
                break;
                case "Wally World - Mex-Mod Sissy":
                track = Song03;
                break;
                case "Wally World - Dumhummin":
                track = Song04;
                break;
                case "Wally World - Trick Question":
                track = Song05;
                break;
                case "Wally World - The Chain":
                track = Song06;
                break;
                case "Wally World - Red Wave":
                track = Song07;
                break;
                case "Wally World - LAB":
                track = Song08;
                break;
                case "Wally World - Urban Indian":
                track = Song09;
                break;
                case "Wally World - Sugar On Top":
                track = Song10;
                break;
                case "Wally World - Foxy Knoxy":
                track = Song11;
                break;
                case "Wally World - Hearts That Beat":
                track = Song12;
                break;
                default:
                break;
        }
        if (track) {
            this.player.src = track;
            this.player.play();
            this.setState({player: "playing", duration: this.player.duration });
        }
    }
        if (this.state.player !== prevState.player) {
            if (this.state.player === "paused") {
                this.player.pause();
            }
            else if (this.state.player === "stopped") {
                this.player.pause();
                this.player.currentTime = 0;
                this.setState({ selectedTrack: null });
            }
            else if (this.state.player === "playing" && prevState.player === "paused") {
                this.playe.paused();
            }
        }
}

render() {
    const list = [
        { id: 1, title: "Wally World - ElectricSissyland" },
        { id: 2, title: "Wally World - Sucker Cut" },
        { id: 3, title: "Wally World - Mex-Mod Sissy" },
        { id: 4, title: "Wally World - Dumhummin" },
        { id: 5, title: "Wally World - Trick Question" },
        { id: 6, title: "Wally World - The Chain" },
        { id: 7, title: "Wally World - Red Wave" },
        { id: 8, title: "Wally World - LAB" },
        { id: 9, title: "Wally World - Urban Indian" },
        { id: 10, title: "Wally World - Sugar On Top" },
        { id: 11, title: "Wally World - Foxy Knoxy" },
        { id: 12, title: "Wally World - Hearts That Beat" }].map(item => {
            
            return (
                
                <div className="recordplayer">
                    <li key={item.id} onClick={() => this.setState({ selectedTrack: item.title })} >
                        {item.title}</li></div>
                );
            }); 
               
    const currentTime = getTime(this.state.currentTime);
    const duration = getTime(this.state.duration);
            return (
                <React.Fragment>
                <nav class="main-nav">
<ul>
<li>
<div className="btn">
                    {this.state.player === "paused" && (
                        <button onClick={() => this.setState({ player: "playing"})}>Play</button>
                    )}
                    {this.state.player === "playing" && (
                        <button onClick={() => this.setState({ player: "paused" })}>Paused</button>
                    )}
                    {this.state.player === "splaying" || this.state.player === "paused" ? (
                        <button oClick={() => this.setState({ player: "stopped" })}>Stop</button>
                    ) : (
                        ""
                    )}
                </div>
</li><li>
<div className="time">{currentTime} / {duration}</div> 

</li></ul></nav>
            <><div className="recordplayer">
                <ul>{list}</ul></div>
                <div className="btn">
                </div>
                {this.state.player === "playing" || this.state.player === "paused"  ? (
                   <div className="time"></div> 
               ) 
                : (
                    ""
                )}
                <audio ref={ref => this.player = ref} />
            </></React.Fragment>
               );
               
                
}
}

export default Audio;

