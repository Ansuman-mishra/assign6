import React, { Component } from "react";

export class ShowData extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   render() {
      return (
         <>
            <h1 className="text-center">DISPLAY DATA PAGE</h1>
            <div className="container">
               <form>
                  <div className="form-row">
                     <div className="form-group col-md-6">
                        <label htmlFor="FirstName">FirstName</label>
                        <input
                           name="firstName"
                           type="text"
                           className="form-control"
                           id="FirstName"
                           placeholder="FirstName"
                           value={this.props.location.detail.firstName}
                        />
                     </div>
                     <div className="form-group col-md-6">
                        <label htmlFor="last">LastName</label>
                        <input
                           name="lastName"
                           type="text"
                           className="form-control"
                           id="last"
                           placeholder="LastName"
                           value={this.props.location.detail.lastName}
                        />
                     </div>
                  </div>
                  <div className="form-group">
                     <label htmlFor="inputAddress">Address</label>
                     <input
                        name="address"
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="1234 Main St"
                        value={this.props.location.detail.address}
                     />
                  </div>
                  <div className="form-group">
                     <label htmlFor="inputemail">Email</label>
                     <input
                        name="address2"
                        type="text"
                        className="form-control"
                        id="inputemail"
                        placeholder="enter your email"
                        value={this.props.location.detail.email}
                     />
                  </div>
                  <div className="form-row">
                     <div className="form-group col-md-6">
                        <label htmlFor="inputCity">City</label>
                        <input
                           name="inputCity"
                           type="text"
                           className="form-control"
                           id="inputCity"
                           value={this.props.location.detail.inputCity}
                        />
                     </div>
                     <div className="form-group col-md-4">
                        <label htmlFor="inputState">State</label>
                        <input
                           name="inputState"
                           className="form-control"
                           type="text"
                           placeholder="State"
                           id="inputState"
                           value={this.props.location.detail.inputState}
                        />
                     </div>
                     <div className="form-group col-md-2">
                        <label htmlFor="inputZip">Zip</label>
                        <input
                           type="text"
                           className="form-control"
                           name="zip"
                           placeholder="Enter ZIP code"
                           id="inputZip"
                           value={this.props.location.detail.zip}
                        />
                     </div>
                  </div>
               </form>
            </div>
         </>
      );
   }
}

export default ShowData;
