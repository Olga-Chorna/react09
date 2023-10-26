import React, { Component } from "react";
import { format } from "date-fns";
import styles from "./CalendarBody.module.css";
import { DayColorContext, ThemeContext } from "../../../context";
import { LIGHT_THEME, DARK_THEME } from "../../../constants";
import Days from "./Days"


class CalendarBody extends Component {
  constructor(props){
    super(props);
    const { date } = this.props;
    this.state = {
      date: date
    }
  }

  handlerClickPrev = () => {
    const { date } = this.state;
    const currMonth = date.getMonth()
    const newDate = date.setMonth(currMonth - 1);
    // console.log(new Date(newDate));
    this.setState (
      {
        date: new Date(newDate)
      }
    );
  }

  handlerClickNext = () => {
    const { date } = this.state;
    const currMonth = date.getMonth()
    const newDate = date.setMonth(currMonth + 1);
    // console.log(new Date(newDate));
    this.setState (
      {
        date: new Date(newDate)
      }
    );
  }

  handlerClick = (name, callback) => {
    name === "dark" ? callback(LIGHT_THEME) : callback(DARK_THEME);
  }

  

  render() {
    const { date } = this.state;
    const [theme, setTheme] = this.context;
    const name = theme.name;
    const stylesBack = {background: (name === 'dark') ? '#7c7f7f' : '#abb0b0'};

    // console.log(theme);

    return(
      <DayColorContext.Consumer>
        {
          ( weekend ) =>
            <div className={styles.wrapper_month} style={stylesBack}>
              <header>
                <p className={styles.current_date}>{format(date, "MMMM yyyy")}</p>
                <button onClick={() => this.handlerClick(name, setTheme)}>{name}</button>
                <div className={styles.icons}>
                  <span id="prev" className="material-symbols-rounded" onClick={this.handlerClickPrev}>chevron_left</span>
                  <span id="next" className="material-symbols-rounded" onClick={this.handlerClickNext}>chevron_right</span>
                </div>
              </header>
              <div className={styles.calendar}>
                <ul className={styles.weeks}>
                  <li style={{color:`${weekend.color}`}}>Sun</li>
                  <li>Mon</li>
                  <li>Tue</li>
                  <li>Wed</li>
                  <li>Thu</li>
                  <li>Fri</li>
                  <li>Sat</li>
                </ul>
                <ul className={styles.days}>
                  <Days date={date}/>
                </ul>
              </div>
            </div>
        }
      </DayColorContext.Consumer>
      
    )
  }
}

CalendarBody.contextType = ThemeContext;

export default CalendarBody;
