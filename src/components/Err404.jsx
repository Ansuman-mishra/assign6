import React, { Component } from "react";

class Err404 extends Component {
   constructor(props) {
      super(props);
      this.state = {
         hasErr: false,
      };
   }

   static getDerivedStateFromError(error) {
      return {
         hasErr: true,
      };
   }
   componentDidCatch(error, info) {
      console.log(error);
      console.log(info);
   }
   render() {
      if (this.state.hasErr) {
         return (
            <>
               <h1>Data not found</h1>
            </>
         );
      } else {
         return this.props.children;
      }
   }
}
export default Err404;
