
import React, {Component} from "react";

class App extends Component {
  state = {
    count: 0,
    isCounting: false,
};
handleStart = () =>{
    this.setState({
        isCounting: true
    })
  this.timer = setInterval(() =>{
        this.setState({ count: this.state.count + 1 });
    }, 60)
    
}       

handleReset = () =>{
    clearInterval(this.timer);
    this.setState({isCounting: false, count: 0 });
    
}

handleStop = () =>{
    clearInterval(this.timer);
    this.setState({
        isCounting: false
    })
}
 componentDidMount() {
     const userCount =localStorage.getItem('timerCount');
     if (userCount){
         this.setState({count: parseInt(userCount)})
     }
 }

 componentDidUpdate() {
     localStorage.setItem('timerCount',this.state.count )
 }

componentWillUnmount() {
    clearInterval(this.timer);
}

render() {
    return (
        <div className="App">
            <h1>React Timer</h1>
            <h3>{this.state.count}</h3>
            {!this.state.isCounting ? (
                <button onClick={this.handleStart}>Start</button>
            ) : (
                <button onClick={this.handleStop}>Stop</button>
            )}
            <button onClick={this.handleReset}>Reset</button>
        </div>
    );
}
}

export default App;
