import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      style={{
        
        backgroundColor: '#111010ff',
    position: 'fixed',  // Changed from 'relative' to 'fixed'
    top: '120px',       // Adjusted from negative value
    right: '40px',     // Adjusted from negative value
    color: 'white',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '15px',
    cursor: 'pointer',
    fontSize: '13px',
    transition: 'background-color 0.3s',
    zIndex: 1000  
      }}
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;