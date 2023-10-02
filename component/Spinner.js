import React, { Component } from "react";
import loading from "./loading.gif";
// Spinner component
export class Spinner extends Component {
 render() {
    return (
      <div className="text-center">
        {/* Loading image */}
        <img src={loading} alt="loading" />
      </div>
    );
 }
}
export default Spinner;
