import PropTypes from 'prop-types';
import {
  Container,
  Img,
  ContainerWrapper,
  ProfileList,
  StatsWrapper,
  StatsList,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <>
      <ContainerWrapper>
        <Container>
          <div>
            <Img />
            <img src={avatar} alt={tag} width={50} />

            <p className="name">{username}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
          </div>
        </Container>

        <ProfileList>
          <StatsWrapper>
            <StatsList>
              <span>Followers </span>
              <span>{stats.followers}</span>
            </StatsList>
            <StatsList>
              <span>Views </span>
              <span>{stats.views}</span>
            </StatsList>
            <StatsList>
              <span>Likes </span>
              <span>{stats.likes}</span>
            </StatsList>
          </StatsWrapper>
        </ProfileList>
      </ContainerWrapper>
    </>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
