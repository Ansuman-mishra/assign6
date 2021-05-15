import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Button from "./Button";

export class Register extends Component {
   constructor(props) {
      super(props);
      this.state = {
         details: {
            firstName: "",
            lastName: "",
            address: "",
            email: "",
            inputCity: "",
            inputState: "",
            zip: "",
         },
         errmessage: false,
         lerrmessage: false,
         adderrmessage: false,
         emailerrmessage: false,
         cityerrmessage: false,
         stateerrmessage: false,
         ziperrmessage: false,
      };
   }

   changeInput = (e) => {
      this.setState({
         details: {
            ...this.state.details,
            [e.target.name]: [e.target.value],
         },
      });
   };
   nameHandler = (e) => {
      if (
         e.target.value.length < 3 &&
         Object.keys(this.state.details).length !== ""
      ) {
         this.setState({ errmessage: true });
      } else {
         this.setState({ errmessage: false });
      }
   };
   lnameHandler = (e) => {
      if (e.target.value.length < 3) {
         this.setState({ lerrmessage: true });
      } else {
         this.setState({ lerrmessage: false });
      }
   };
   addressHandler = (e) => {
      if (e.target.value.length < 3) {
         this.setState({ adderrmessage: true });
      } else {
         this.setState({ adderrmessage: false });
      }
   };
   emailHandler = (e) => {
      if (e.target.value.length < 3) {
         this.setState({ emailerrmessage: true });
      } else {
         this.setState({ emailerrmessage: false });
      }
   };
   cityHandler = (e) => {
      if (e.target.value.length < 3) {
         this.setState({ cityerrmessage: true });
      } else {
         this.setState({ cityerrmessage: false });
      }
   };
   stateHandler = (e) => {
      if (e.target.value.length < 3) {
         this.setState({ stateerrmessage: true });
      } else {
         this.setState({ stateerrmessage: false });
      }
   };
   zipHandler = (e) => {
      if (e.target.value.length <= 5) {
         this.setState({ ziperrmessage: true });
      } else {
         this.setState({ ziperrmessage: false });
      }
   };

   render() {
      return (
         <>
            <h1 className="text-center">Registration Page</h1>
            {/* <pre>{JSON.stringify(this.state.details)}</pre> */}
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
                           onChange={(e) => {
                              this.changeInput(e);
                              this.nameHandler(e);
                           }}
                           value={this.state.details.firstName}
                        />
                        {this.state.errmessage ? (
                           <p style={{ color: "red" }}>
                              cannot be less than three character
                           </p>
                        ) : (
                           ""
                        )}
                     </div>
                     <div className="form-group col-md-6">
                        <label htmlFor="last">LastName</label>
                        <input
                           name="lastName"
                           type="text"
                           className="form-control"
                           id="last"
                           placeholder="LastName"
                           onChange={(e) => {
                              this.changeInput(e);
                              this.lnameHandler(e);
                           }}
                           value={this.state.details.lastName}
                        />
                        {this.state.lerrmessage ? (
                           <p style={{ color: "red" }}>
                              cannot be less than three character
                           </p>
                        ) : (
                           ""
                        )}
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
                        onChange={(e) => {
                           this.changeInput(e);
                           this.addressHandler(e);
                        }}
                        value={this.state.details.address}
                     />
                     {this.state.adderrmessage ? (
                        <p style={{ color: "red" }}>invalid address</p>
                     ) : (
                        ""
                     )}
                  </div>
                  <div className="form-group">
                     <label htmlFor="inputAddress2">Email</label>
                     <input
                        name="email"
                        type="email"
                        className="form-control"
                        id="inputemail"
                        placeholder="enter email address"
                        onChange={(e) => {
                           this.changeInput(e);
                           this.emailHandler(e);
                        }}
                        value={this.state.details.email}
                     />
                     {this.state.emailerrmessage ? (
                        <p style={{ color: "red" }}>invalid email</p>
                     ) : (
                        ""
                     )}
                  </div>
                  <div className="form-row">
                     <div className="form-group col-md-6">
                        <label htmlFor="inputCity">City</label>
                        <input
                           name="inputCity"
                           type="text"
                           className="form-control"
                           id="inputCity"
                           onChange={(e) => {
                              this.changeInput(e);
                              this.cityHandler(e);
                           }}
                           value={this.state.details.inputCity}
                        />
                        {this.state.cityerrmessage ? (
                           <p style={{ color: "red" }}>invalid city</p>
                        ) : (
                           ""
                        )}
                     </div>
                     <div className="form-group col-md-4">
                        <label htmlFor="inputState">State</label>
                        <input
                           name="inputState"
                           className="form-control"
                           type="text"
                           placeholder="State"
                           id="inputState"
                           onChange={(e) => {
                              this.changeInput(e);
                              this.stateHandler(e);
                           }}
                           value={this.state.details.inputState}
                        />
                        {this.state.stateerrmessage ? (
                           <p style={{ color: "red" }}>invalid state</p>
                        ) : (
                           ""
                        )}
                     </div>
                     <div className="form-group col-md-2">
                        <label htmlFor="inputZip">Zip</label>
                        <input
                           type="number"
                           className="form-control"
                           name="zip"
                           placeholder="Enter ZIP code"
                           id="inputZip"
                           onChange={(e) => {
                              this.changeInput(e);
                              this.zipHandler(e);
                           }}
                           value={this.state.details.zip}
                        />
                        {this.state.ziperrmessage ? (
                           <p style={{ color: "red" }}>invalid zip code</p>
                        ) : (
                           ""
                        )}
                     </div>
                  </div>

                  {this.state.details.firstName.length !== 0 &&
                  this.state.details.lastName.length !== 0 &&
                  this.state.details.address.length !== 0 &&
                  this.state.details.email.length !== 0 &&
                  this.state.details.inputCity.length !== 0 &&
                  this.state.details.inputState.length !== 0 &&
                  this.state.details.zip.length !== 0 ? (
                     <>
                        <input
                           type="submit"
                           className="btn btn-primary"
                           value="Sign in"
                           onClick={() => {
                              this.props.history.push({
                                 pathname: "/showData",
                                 detail: this.state.details,
                              });
                           }}
                        />
                        <Button data={this.state.details} />
                     </>
                  ) : (
                     <>
                        <input
                           type="submit"
                           className="btn btn-primary"
                           value="Sign in"
                           disabled
                           onClick={() => {
                              this.props.history.push({
                                 pathname: "/showData",
                                 detail: this.state.details,
                              });
                           }}
                        />
                     </>
                  )}
               </form>
            </div>
         </>
      );
   }
}

export default withRouter(Register);
