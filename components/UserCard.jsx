import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import React, { useState } from "react";
import UserCardDetail from "./UserCardDetail";

export default function UserCard(props) {
  const [IsShow, setIsShow] = useState(false);

  const handClick = (event) => {
    setIsShow((current) => !current);
  };

  return (
    <div className="border-bottom">
      <div className="d-flex align-items-center p-3" onClick={handClick}>
        <div className="align-items">
          <img
            src={props.x.img}
            alt="img"
            style={{
              borderRadius: "50%",
            }}
          ></img>
        </div>
        <div
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: "40px",
            marginLeft: "20px",
            fontWeight: "10px",
          }}
        >
          {props.x.name}
        </div>
        <div
          style={{
            marginRight: "0",
            marginLeft: "auto",
          }}
        >
          <IconChevronDown />
        </div>
      </div>
      {IsShow && (
        <div>
          <div
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: "15px",
              marginRight: "auto",
              marginLeft: "auto",
              marginBottom: "15px",
            }}
          >
            <UserCardDetail set1={props.x} />
          </div>
        </div>
      )}
    </div>
  );
}
