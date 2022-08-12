import React from "react";
import UserCard from "./UserCard";
import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";

export default function UserCardDetail(props) {
  return (
    <div className="text-center">
      <div>{props.set1.email}</div>
      <div>{props.set1.address}</div>
    </div>
  );
}
