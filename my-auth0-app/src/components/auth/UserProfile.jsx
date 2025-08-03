import { useAuth0 } from "@auth0/auth0-react";
import "./UserProfile.css";

const UserProfile = () => {
  const { user } = useAuth0();

  return (
    <div className="user-profile">
      
      <div className="profile-info">
        <img src={user.picture} alt={user.name} className="profile-pic" />
        <div>
          <p>Logged: <strong>{user.email}</strong></p>
         
        </div>
      </div>
    </div>
  );
};

export default UserProfile;