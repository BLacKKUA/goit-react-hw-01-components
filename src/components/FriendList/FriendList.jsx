import propTypes from "prop-types";


const Friends = ({ friendData: { avatar, name, isOnline, id: idishka} }) => {
   return (
      <li className="item">
         <span className="status">{isOnline ? `Онлайн` : `Офлайн`}</span>
         <img className="avatar" src={avatar} alt="User avatar" width="48" />
         <p className="name">{name}</p>
      </li>
   )
}

export const FriendList = ({friendsData}) => {
   return (
      <ul className="friend-list">
         {friendsData.map((friendData) => {
            return (
               <Friends key={friendData.id} friendData={friendData} />
            )
         })}
      </ul>
   )
}

Friends.propTypes = {
      name: propTypes.string.isRequired,
      isOnline: propTypes.bool.isRequired,
      id: propTypes.number.isRequired
}.isRequired