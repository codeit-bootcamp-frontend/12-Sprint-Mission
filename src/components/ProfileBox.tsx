import profileIcon from "./../assets/icon_profile.png";
import useDate from "../utils/formatDate";
import "./ProfileBox.css";

interface Props {
  img?: string;
  name: string;
  date: Date;
}

const ProfileBox = ({ img, name, date }: Props) => {
  const formattedDate = useDate(date);

  return (
    <div className="name_area">
      <div className="profile">
        <img src={img ? img : profileIcon} alt={name} onError={(e) => ((e.target as HTMLImageElement).src = profileIcon)} />
      </div>
      <div className="name">
        <p>{name}</p>
        <div className="date">{formattedDate}</div>
      </div>
    </div>
  );
};

export default ProfileBox;
