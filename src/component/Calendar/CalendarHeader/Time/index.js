import React, { Component } from 'react';
import styles from "./Time.module.css"

class Time extends Component {
  constructor(props){
    super(props);
    const { date } = this.props;
    this.state = {
      time : date
    }
  }

  start = () => {
    this.idInterval = setInterval(() => {
      const { time } = this.state;

      const newTime = new Date(time.getTime() + 1000);
      this.setState({ time: newTime});
    }, 1000);
  }

  stop = () => {
    clearInterval(this.idInterval);
  }

  componentDidMount() {
    this.start();
  }


  componentWillUnmount() {
    console.log('componentWillUnmount');
    this.stop();
  }

  render() {
    const { time } = this.state;
    
    return(
      <div className={styles.timer}>
        {time.toLocaleTimeString('en-GB')}
      </div>
    )
  }
}

export default Time;