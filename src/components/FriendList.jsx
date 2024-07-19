import FriendListItem from "./FriendListItem";
// import friends from "../friends.json";

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id}>
            <FriendListItem
              key={id}
              avatar={avatar}
              name={name}
              isOnline={isOnline ? "Online" : "Offline"}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default FriendList;
