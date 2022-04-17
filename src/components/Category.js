import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import EventDesciption from "./EventDesciption";

const Category = (props) => {
  const [open, setOpen] = useState(false);
  // let navigate = useNavigate();
  return (
    <div>
      <div className="bg-body" style={{"borderRadius":"10%"}}>
        <div className="card" style={{ width: "18rem","borderRadius":"10%" }}>
          <img src={props.url} style={{"WebkitBorderTopLeftRadius":"10%","WebkitBorderTopRightRadius":"10%",}} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title text-center">{props.title}</h3>
            <div className="text-center p-2 ">
            <a
              href="#"
              className="text-decoration-none lead text-body"
              // onClick={() => navigate("/EventDescription",{title:props.title},{description:props.disc},{venue:props.venue},{image:props.url})}
            >
              Read More
            </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
