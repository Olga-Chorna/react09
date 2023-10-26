import React, { Component } from "react";
import { ThemeContext } from "../../../../context";

class Days extends Component {
  constructor(props){
    super(props);
    const { date } = this.props;
    console.log(date);
    // Чому закоментований код повертає undefined?
    // const [theme, setTheme] = this.context;

    this.state = {
      date: date,
      // theme: theme
    }
    console.log(this.state);
  }

  renderCalendar = (date, theme) => {
    console.log(theme.dayColor)
    const stylesDays = {color: `${theme.dayColor}`};


    let currYear = date.getFullYear(),
    currMonth = date.getMonth();
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = [];

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag.push(<li className="inactive" style={stylesDays}>{`${lastDateofLastMonth - i + 1}`}</li>);
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag.push(<li className={ `${isToday}` } style={stylesDays}>{`${i}`}</li>);
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag.push(<li className="inactive"  style={stylesDays}>{`${i - lastDayofMonth + 1}`}</li>);
    }
    return liTag;

  }

  render(){
    const { date } = this.state;
    console.log(date);
    const [theme, setTheme] = this.context;
    console.log(theme);

    const days = this.renderCalendar(date, theme);
    return(
      <>
        {days}
      </>
    )
  }

}
Days.contextType = ThemeContext;

export default Days;
