import React, { Component } from "react";
import { format } from "date-fns";

class ShowDate extends Component {
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
      <>
        {format(date, "eeee, MMMM d yyyy")}
      </>
    )
  }
}

export default ShowDate;