import "./Profile.scss";
import ImgProfile from "../../../../../public/Ellipse 4.png";
import { useState } from "react";
import ProfileModal from "../../../../Component/Modal/ProfileModal/ProfileModal.jsx";
export default function Profile() {
  const [modalState, setModalState] = useState(false);
  return (
    <div className="profile" onClick={() => setModalState(true)}>
      <img src={ImgProfile} alt="alt" />
      <div className="circle"></div>
      <ProfileModal call={modalState} onDestroy={() => setModalState(false)} />
    </div>
  );
}
