import React, { Component } from "react";
// import Err404 from "./Err404";

export default class Dashboard extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   render() {
      return (
         <>
            {/* <Err404> */}
            {/* <pre>{JSON.stringify(this.props)}</pre> */}
            <div className="container animated flipInY delay-0.5s">
               <div className="row">
                  <div className="col">
                     <div className="card mt-5">
                        <div className="card-header">
                           <h1>USER DETAILS</h1>
                        </div>
                        <div className="card-body d-flex justify-content-center align-items-center flex-column">
                           <h1>{this.props.detailsData.first}</h1>
                           <h1>{this.props.detailsData.last}</h1>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* </Err404> */}
         </>
      );
   }
}
