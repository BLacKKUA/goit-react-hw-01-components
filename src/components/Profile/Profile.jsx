import propTypes from "prop-types";
import {Wrapper, ProfileDetail, ProfileStats, UserStats} from './Profile.styled'

const Stats = ({stats ,text}) => {
   return (
      <UserStats>{stats}<p>{text}</p></UserStats>
   )
}

export const Profile = ({ profile: { username, tag, location: loca, avatar, stats: { followers, views, likes } } }) => {
      return (
         <Wrapper>
            <ProfileDetail>
               <img src={avatar} alt="avatar" width={100} heigh={100} />
               <p className="name">{username}</p>
               <p className="tag">@{tag}</p>
               <p className="location">{loca}</p>
            </ProfileDetail>
            <ProfileStats>
               <Stats stats="Followers" text={`${followers}`} />
               <Stats stats="Views" text={`${views}`} />
               <Stats stats="Likes" text={`${likes}`} />
            </ProfileStats>
      </Wrapper>
   );
}

Profile.propTypes = {
      username: propTypes.string.isRequired,
      tag: propTypes.string.isRequired,
      location: propTypes.string.isRequired,
      avatar: propTypes.string.isRequired,
      followers: propTypes.number.isRequired,
      views: propTypes.number.isRequired,
      likes: propTypes.number.isRequired,
}.isRequired