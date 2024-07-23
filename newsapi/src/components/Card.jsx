import React from "react";
import defaultimg from "../../src/assets/image/1.jpeg";

const Card = (props) => {
  // console.log(props);
  return (
    <div className="">
      <div className="row">
        <div className="col">
          <div
            className="card bg-dark text-white mb-3 d-inline-block my-3 mx-3 px-2 py-2"
            style={{ width: "300px" }}
          >
            <img
              src={props.src ? props.src : defaultimg}
              className="card-img-top"
              alt="Card image"
            />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.para}</p>
              <a href={props.url} className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
