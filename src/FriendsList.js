import { Friend } from "./Friend";

export function FriendsList({ friendList, onSelection, selectedFriend }) {
  const friends = friendList;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
