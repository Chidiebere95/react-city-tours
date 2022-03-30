// import React from 'react'
// import img from '../../img/london.jpeg'
import "./Tour.css";

import React, { Component } from "react";
import {  FaCaretSquareDown, FaWindowClose } from 'react-icons/fa'

export default class Tour extends Component {
  state = {
    showInfo: false,
    count:this.props.value
  };

  infoHandler = () => {
    console.log("clicked");

    this.setState({ showInfo: !this.state.showInfo });
  };
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { deleteTour } = this.props;
    return (
      <div>
       
         <article className="tour">
          <div className="img-container">
            <img src={img} width=""></img>
            <span className="font">
              <i onClick={()=>deleteTour(id)} className=""><FaWindowClose/></i>
            </span>
          </div>
          <div className="bottom">
            <h3>{name}</h3>
            <h4>{city}</h4>
            <h5>
              info{" "}
              <i
                onClick={this.infoHandler}
                className="fas fa-caret-square-down"
              ><FaCaretSquareDown/></i>
            </h5>
            {this.state.showInfo && <p>{info}</p>}
          </div>
        </article> 


        



 



      </div>
    );
  }
}
