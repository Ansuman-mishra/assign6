import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Button extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: "",
      };
   }

   componentDidMount() {
      this.setState({
         data: this.props.data,
      });
   }
   render() {
      return (
         <>
            {/* <pre>{JSON.stringify(this.state.data)}</pre> */}
            <input
               type="submit"
               className="btn btn-primary"
               value="Sign in"
               onClick={() => {
                  this.props.history.replace({
                     pathname: "/showData",
                     detail: this.state.data,
                  });
               }}
            />
         </>
      );
   }
}

export default withRouter(Button);
