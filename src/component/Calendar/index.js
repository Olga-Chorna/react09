import React, {Component} from "react";
import styles from './Calendar.module.css'
import CalendarHeader from "./CalendarHeader";
import CalendarBody from "./CalendarBody";
import { DARK_THEME, LIGHT_THEME, WEEKEND_COLOR } from "../../constants";
import { DayColorContext, ThemeContext } from "../../context"

class Calendar extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      theme: DARK_THEME,
      weekend: WEEKEND_COLOR
    }
  }

  setTheme = (theme) => this.setState({...this.state, theme: theme})
  render(){
    const { theme, weekend } = this.state;
    console.log(theme);
    return(
      <ThemeContext.Provider value={[theme, this.setTheme]}>
        <DayColorContext.Provider value={weekend}>
          <div className={styles.container}>
            <CalendarHeader date={this.state.date}/>
            <CalendarBody date={this.state.date}/>
          </div>
        </DayColorContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

export default Calendar;