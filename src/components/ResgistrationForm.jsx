import React, { useState } from "react";
import Axios from "axios";

export default function ResgistrationForm() {
   let [user, setUser] = useState({
      data: {
         name: "",
         last: "",
         phone: "",
         city: "",
         message: "",
      },
      errmessage: "",
      issubmit: false,
   });
   let inputData = (e) => {
      setUser({
         data: {
            ...user.data,
            [e.target.name]: e.target.value,
         },
      });
   };

   let submitData = (e) => {
      e.preventDefault();
      let dataUrl = `http://127.0.0.1:4000/reg`;
      Axios.post(dataUrl, user.data)
         .then((res) => {
            setUser({
               issubmit: true,
            });
            console.log("successfully submited");
         })
         .catch((error) => {
            setUser({
               errmessage: error,
            });
         });
   };
   return (
      <>
         <div className="container">
            <div className="row">
               <div className="col">
                  <pre>{JSON.stringify(user.data)}</pre>
                  <div className="card mt-5">
                     <div className="card-header">
                        <h1 className="text-center text-uppercase">
                           registration
                        </h1>
                     </div>
                     <div className="card-body">
                        <form action="" onSubmit={submitData}>
                           <div className="form-group">
                              <input
                                 value={user.data.first}
                                 onChange={inputData}
                                 name="name"
                                 type="text"
                                 className="form-control"
                                 placeholder="First name"
                              />
                           </div>
                           <div className="form-group">
                              <input
                                 value={user.data.last}
                                 onChange={inputData}
                                 name="last"
                                 type="text"
                                 className="form-control"
                                 placeholder="Last name"
                              />
                           </div>
                           <div className="form-group">
                              <input
                                 value={user.data.phone}
                                 onChange={inputData}
                                 name="phone"
                                 type="number"
                                 className="form-control"
                                 placeholder="Phone Number"
                              />
                           </div>
                           <div className="form-group">
                              <input
                                 value={user.data.city}
                                 onChange={inputData}
                                 name="city"
                                 type="text"
                                 className="form-control"
                                 placeholder="City name"
                              />
                           </div>
                           <div className="form-group">
                              <textarea
                                 value={user.data.message}
                                 onChange={inputData}
                                 name="message"
                                 rows="5"
                                 type="text"
                                 className="form-control"
                                 placeholder="Message"
                              />
                           </div>
                           <div className="form-group">
                              <input
                                 value="submit"
                                 type="submit"
                                 className="btn btn-primary"
                              />
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
