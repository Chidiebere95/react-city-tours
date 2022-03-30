import React, { Component } from "react";
import Tour from "../Tours/Tour";
import "./Tourlist.css";
import { tourData } from "../tourData";
import TestFile from "./TestFile";

export default class Tourlist extends Component {
  state = {
    tours: tourData,
    showPara: false,
    data: [
      { id: 1, count: 0 },
      { id: 2, count: 0 },
      { id: 3, count: 0 },
    ],
  };
handleDelete=(id)=>{
  
const tours= this.state.tours.filter(item=>(item.id!==id))
this.setState({tours})
}

handleInfo=(id)=>{
  this.setState({showPara:!this.state.showPara});
  console.log('click handleinfo')

}
















  removeTourHandler = (index) => {
    // const filtered= this.state.tours.filter(item=>
    //     item.id!==id

    // )
    this.state.tours.splice(index, 1);
    this.setState({ tours: this.state.tours });

    console.log(this.state.tours);
  };

  render() {
    const { tours } = this.state;
    // console.log(this.state.tours);

    return (
      <div className="tourlist">
        {this.state.tours.map((item) => (
          <Tour showPara={this.state.showPara} key={item.id} tour={item} handleInfo={this.handleInfo} deleteTour={this.handleDelete} />
        ))}
      </div>














      // <div>
      //   <div className="tourlist">
      //     {tours.map((tour, index) => {
      //       return (
      //         <Tour
      //           key={index}
      //           tour={tour}
      //           click={() => this.removeTourHandler(index)}
      //         />
      //       );
      //     })}
      //   </div>
      //   {/* <h1>{this.state.count}</h1>
      //   <button onClick={this.increaseHandler}>click</button>
      //   <TestFile /> */}
      //   {/* {this.state.data.map((item) => (
      //     <Tour key={item.id} value={item.count}></Tour>
      //   ))} */}
      // </div>
    );
  }
}
