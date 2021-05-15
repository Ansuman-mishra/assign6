import React, { Component } from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import Home from "./Home";
import Dashboard from "./Dashboard";
// import Err404 from "./Err404";

export default class TabsComponent extends Component {
   constructor(props) {
      super(props);
      this.state = {
         number: 0,
         data: "",
      };
   }
   handleTabs = (e, val) => {
      this.setState({ number: val });
   };

   pullUserDetails = (userInfo, num) => {
      this.setState({
         data: userInfo,
         number: num,
      });
      // if (userInfo.first === "" && userInfo.last === "") {
      //    throw new Error("cant send empty data");
      // }
   };

   render() {
      return (
         <>
            {/* <Err404> */}
            <AppBar position="static">
               {/* <pre>{JSON.stringify(this.state.data)}</pre> */}
               <Tabs value={this.state.number} onChange={this.handleTabs}>
                  <Tab label="Home" />
                  <Tab label="Dashboard" />
               </Tabs>
            </AppBar>

            {/* <Err404> */}
            {this.state.number === 0 ? (
               <Home pushUserData={this.pullUserDetails} />
            ) : null}
            {/* </Err404> */}
            {/* <Err404> */}
            {this.state.number === 1 && (
               <Dashboard detailsData={this.state.data} />
            )}
            {/* </Err404> */}
            {/* </Err404> */}
         </>
      );
   }
}
