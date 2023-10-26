import React, { Component } from "react";
import Time from "./Time"
import ShowDate  from "./SowDate";
import styles from "./CalendarHeader.module.css"

class CalendarHeader extends Component {
  constructor(props){
    super(props);
    const { date } = this.props;
    this.state = {
      date: date
    }
  }

  render() {
    const { date } = this.state;
    return(
      <div className={styles.calendarHeader}>
        <Time date={date}/>
        <ShowDate date={date}/>
      </div>
    )
  }
}

export default CalendarHeader;
