import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
        <button
  className="auth-button login"
  onClick={() => loginWithRedirect()}
  style={{
    background: 'rgba(78, 64, 64, 0.15)',
    color: 'white',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    padding: '1rem 2rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    letterSpacing: '0.5px',
    width: '100%',
    maxWidth: '220px',
    marginTop: '1rem',
    ':hover': {
      background: 'rgba(255, 255, 255, 0.25)',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
      borderColor: 'rgba(255, 255, 255, 0.4)'
    },
    ':active': {
      transform: 'translateY(0)'
    }
  }}
>
  Log In
</button>
  );
};

export default LoginButton;