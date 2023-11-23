import "./navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Dashboard</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icons" />
        <img src="/app.svg" alt="" className="icons" />
        <img src="/expand.svg" alt="" className="icons" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="/noavatar.png" alt="" />
          <span>Jovan</span>
        </div>
        <img src="/settings.svg" alt="" className="icons" />
      </div>
    </div>
  );
};
