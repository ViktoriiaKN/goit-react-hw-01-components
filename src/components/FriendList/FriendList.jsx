import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import {
  FriendListWrapper,
  FriendListItemStyled,
} from 'components/FriendListItem/FriendListItem.styled';

export const FriendList = ({ friends }) => {
  return (
    <>
      <FriendListWrapper>
        <FriendListItemStyled>
          {friends.map(friend => (
            <FriendListItem
              avatar={friend.avatar}
              isOnline={friend.isOnline}
              name={friend.name}
              key={friend.id}
            />
          ))}
        </FriendListItemStyled>
      </FriendListWrapper>
    </>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
