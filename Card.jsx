import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="cards">
        <div className="card ">
          <img src={props.imgscr} alt="myPic" className="card__img" />
          <div className="card__info">
            <span className="card__category"> {props.title}</span>
            <h3 className="card__title">{props.sname}</h3>
            <a href={props.links} target="_blank">
              <button> Watch Now </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

<img src="https://wallpapercave.com/wp/wp4056410.jpg" alt="myPic" class="card__img" style="
    height: 919px;
    width: 551.003;
"></img>