// React
import React from 'react';
// Custom CSS
import "./Clock.module.css";

export default function Clock (props) {

  const getTime = () => {

    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (hours < 12) {
      return hours + ":" + minutes + " AM";
    } else {
      return hours % 12 + ":" + minutes + " PM";
    }

  }

  return (
    <p>{getTime()}</p>
  );

}
