import React, { Component } from 'react';

 class HookCounterRef extends Component {
    interval
    constructor(props) {
      super(props)
    
      this.state = {
         timer:0
      }
    }
    componentDidMount=()=>
    {
        this.interval=setInterval(()=>
        {this.setState(prevstate=>
            ({timer:prevstate.timer+1}))},1000);
        
    }
    componentWillUnmount=()=>
    {
        clearInterval(this.interval);
    }
    
  render() {
    return <div>
        
        <button onClick={()=>clearInterval(this.interval)}>clear</button>
        classtimer-{this.state.timer}
    </div>;
  }
}
export default HookCounterRef;
