import React, { Component } from "react";
// import Err404 from "./Err404";

export class Home extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: {
            first: "",
            last: "",
         },
         num: 1,
      };
   }
   submitdata = (e) => {
      this.setState({
         data: {
            ...this.state.data,
            [e.target.name]: [e.target.value],
         },
      });
   };
   sendData = (e) => {
      e.preventDefault();

      // if (this.state.data.first === "" && this.state.data.last === "") {
      //    throw new Error("cant send empty data");
      // }
      this.props.pushUserData(this.state.data, this.state.num);
   };
   render() {
      return (
         <>
            {/* <Err404> */}
            {/* <pre>{JSON.stringify(this.state.data)}</pre> */}
            <div className="container animated slideInLeft">
               <div className="row">
                  <div className="col">
                     <div className="card mt-4">
                        <div className="card-header">
                           <h1>registration</h1>
                        </div>
                        <div className="card-body">
                           <input
                              className="form-control"
                              type="text"
                              name="first"
                              placeholder="enter firstname"
                              onChange={this.submitdata}
                              value={this.state.data.first}
                           />
                           <input
                              className="form-control mt-4"
                              type="text"
                              name="last"
                              placeholder="enter lastname"
                              onChange={this.submitdata}
                              value={this.state.data.last}
                           />
                        </div>
                        <div className="card-footer">
                           <input
                              className="btn btn-primary btn-block rounded-pill"
                              type="submit"
                              value="click me"
                              onClick={this.sendData}
                           />
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

export default Home;
