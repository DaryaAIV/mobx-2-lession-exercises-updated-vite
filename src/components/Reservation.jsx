import React, { Component } from "react";
import { observer, inject } from "mobx-react";

class Reservation extends Component {
  seatReservation = () => {
    this.props.RestaurantStore.seatRes(this.props.res.id);
  };

  completeReservation = () => {
    this.props.RestaurantStore.completeRes(this.props.res.id);
  };

  render() {
    const { res } = this.props;
    const checkCompleted = res.completed ? "conditional" : "";

    return (
      <div className={checkCompleted}>
        <span>
          Name: {res.name} - {res.numPeople} people
        </span>
        <button onClick={this.seatReservation}>Seat Reservation</button>
        <button onClick={this.completeReservation}>Complete Reservation</button>
      </div>
    );
  }
}

export default inject("RestaurantStore")(observer(Reservation));
