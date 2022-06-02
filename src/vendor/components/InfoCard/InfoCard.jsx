import React, { useState } from "react";
import "./InfoCard.scss";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
            className="icon-color"
          />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>

      <div className="info">
        <span>Status: </span>
        <span>Active</span>
      </div>

      <div className="info">
        <span>Products in: </span>
        <span>Bauchi</span>
      </div>

      <div className="info">
        <span>Total Products: </span>
        <span>3</span>
      </div>

      <div className="info">
        <span>Total Sold: </span>
        <span>1</span>
      </div>

      <div className="info">
        <span>Available in Stock: </span>
        <span>2</span>
      </div>

      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
