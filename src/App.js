import {
   BrowserRouter as Router,
   Switch,
   Route,
   // Redirect,
} from "react-router-dom";
import "./App.css";
// import Err404 from "./components/Err404";
// import ErrFileNotFound from "./components/ErrFileNotFound";
import ResgistrationForm from "./components/ResgistrationForm";
// import Register from "./components/Register";
// import ShowData from "./components/ShowData";
// import TabsComponent from "./components/TabsComponent";
import home2 from "./components/Home2";

function App() {
   return (
      <>
         {/* <Router> */}
         {/* <Switch> */}
         {/* <Err404> */}
         {/* <Route exact path="/" component={TabsComponent} /> */}
         {/* </Err404> */}
         {/* <Route exact path="/showData" component={ShowData} /> */}
         {/* <Route path="/404" component={ErrFileNotFound} /> */}
         {/* <Redirect to="/404" /> */}
         {/* </Switch> */}
         {/* </Router> */}
         {/* <Err404>
            <TabsComponent />
         </Err404> */}
         <Router>
            <Switch>
               <Route exact path="/" component={home2} />
               <Route exact path="/reg" component={ResgistrationForm} />
            </Switch>
         </Router>
         {/* <ResgistrationForm /> */}
      </>
   );
}

export default App;
