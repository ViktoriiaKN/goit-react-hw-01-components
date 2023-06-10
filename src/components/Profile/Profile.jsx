import PropTypes from 'prop-types';
import { Container, Img, ContainerWrapper } from './Profile.styled';

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

          <ul className="stats">
            <li>
              <span className="label">{stats.followers}</span>
              <span className="quantity">1000</span>
            </li>
            <li>
              <span className="label">{stats.views}</span>
              <span className="quantity">2000</span>
            </li>
            <li>
              <span className="label">{stats.likes}</span>
              <span className="quantity">3000</span>
            </li>
          </ul>
        </Container>
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
