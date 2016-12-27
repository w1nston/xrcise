import React, { Component } from 'react';
import moment from 'moment';
import DayPicker, { DateUtils } from 'react-day-picker';
import { triggerCallback } from '../../utils/funcUtils';
import './datePicker.css';

function formatDate(date) {
  return moment(date).format('YYYY-MM-DD');
}

export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: null,
      inputIsFocused: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleChange(event, date, { selected, disabled }) {
    if (disabled) return;

    let selectedDate = null;

    if (!selected) {
      triggerCallback(this.props.input.onChange)
        .fold(
          () => console.warn('this.props.input.onChange is not defined'),
          onChange => onChange(formatDate(date))
        );
      selectedDate = date;
    }

    this.setState({
      selectedDate,
      inputIsFocused: false,
    });
  }

  handleFocus() {
    this.setState({ inputIsFocused: true });
  }

  renderDayPicker() {
    if (this.state.inputIsFocused) {
      return (
        <DayPicker
          firstDayOfWeek={1}
          initialMonth={this.state.selectedDate || moment().toDate()}
          selectedDays={date => DateUtils.isSameDay(this.state.selectedDate, date)}
          onDayClick={this.handleChange}
        />
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        <input
          name={this.props.name}
          className="xrcise-datePicker__input"
          {...this.props.input}
          onFocus={this.handleFocus}
        />
        {this.renderDayPicker()}
      </div>
    );
  }
}
