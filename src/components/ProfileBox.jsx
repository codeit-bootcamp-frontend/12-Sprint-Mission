import profileIcon from "./../assets/icon_profile.png";
import useDate from "./../hooks/useDate";
import "./ProfileBox.css";

const ProfileBox = ({ img, name, date }) => {
  const formattedDate = useDate(date);

  return (
    <div className="name_area">
      <div className="profile">
        <img src={img ? img : profileIcon} alt={name} onError={(e) => (e.target.src = profileIcon)} />
      </div>
      <div className="name">
        <p>{name}</p>
        <div className="date">{formattedDate}</div>
      </div>
    </div>
  );
};

export default ProfileBox;
