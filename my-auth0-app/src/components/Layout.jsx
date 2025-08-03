import './Layout.css'; // Ensure this path is correct

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <h1>Weather Application</h1>
      </header>
      <main>{children}</main>
      
    </div>
  );
};

export default Layout;