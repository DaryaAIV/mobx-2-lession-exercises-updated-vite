import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import ResInput from "./ResInput";
import Reservation from "./Reservation";

class Restaurant extends Component {
  addReservation = () => {
    const { GeneralStore, RestaurantStore } = this.props;
    RestaurantStore.addRes(GeneralStore.name, GeneralStore.numPeople);
  };

  render() {
    return (
      <div>
        <span>
          You have {this.props.RestaurantStore.openTables} open tables
        </span>
        <div>
          number of people in the restaurant:{" "}
          {this.props.RestaurantStore.restPopulation}
        </div>
        <div id="completedTables">
          number of completed tables in the restaurant:{" "}
          {this.props.RestaurantStore.completedTables}
        </div>
        <ResInput />
        <button id="addRes" onClick={this.addReservation}>
          Add Reservation
        </button>
        <div className="reservations">
          {/* Map reservation data to Reservation components here */}
          {this.props.RestaurantStore.reservations.map((reservation, index) => (
            <Reservation key={index} res={reservation} />
          ))}
        </div>
      </div>
    );
  }
}

export default inject("GeneralStore", "RestaurantStore")(observer(Restaurant));
