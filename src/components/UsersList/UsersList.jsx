import { UserInfoRow } from '../UserInfoRow/UserInfoRow';
import './UsersList.scss';

export const UsersList = ({ 
  userdata,
  activeAdding,
  setActiveAdding 
}) => {
  return (
    <div className="UsersList">
      <table className="UsersList__table">
        <tbody>
          {userdata.map(user => 
            <UserInfoRow user={user} key={user}/>
          )}
        </tbody>
      </table>

      <button 
        className="UsersList__button"
        onClick={() => setActiveAdding(!activeAdding)}
      >
        {activeAdding? (
          `Додати`
        ) : (
          `Скасувати`
        )}
        
      </button>
    </div>
  )
};
