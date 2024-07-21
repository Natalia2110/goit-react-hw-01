import FriendListItem from "./FriendListItem";
import css from "./FriandList.module.css";
// import friends from "../friends.json";

const FriendList = ({ friends }) => {
  return (
    <ul className={css["friends-list"]}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={css["friend-item"]} key={id}>
            <FriendListItem
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default FriendList;
