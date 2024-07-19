// import { useState } from 'react'

// import './components/App.css'

import userData from "./userData.json";
import Profile from "./components/Profile";
import friends from "./friends.json";
import FriendList from "./components/FriendList";

export default function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList
        friends={friends}
        // key={friends.id}
        // avatar={friends.avatar}
        // name={friends.name}
        // isOnline={friends.isOnline}
      />
    </div>
  );
}
