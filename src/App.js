import React, { useState } from "react";
import "./App.css";
import Category from "./components/Category";
import arr from "../src/arr";
import "./components/Popup.js";
import EventDesciption from "./components/EventDesciption";
function App() {
  return (
    <>
      <div>
        <div>
          <h1 className="my-5 mx-5 text-center fw-bold">Events of PhotoGraphy</h1>
          <div className="container">
            <div className="row">
              {arr.map((element) => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" >
                    <div
                      className="my-3 p-2 " style={{"borderRadius":"10%",justifyItems:"center"}}
                      key={element.title}
                    >
                      <Category
                        title={element.title}
                        desc={element.desc}
                        url={element.url}
                      />
  
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
       
        
      </div>
      <EventDesciption/>
    </>
  );
}

export default App;
