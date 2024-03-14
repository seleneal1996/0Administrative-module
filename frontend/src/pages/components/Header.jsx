import logo from "../../assets/assets/img/logo-icon.png";
const Header = () => {
  return (
    <div className="login-header d-flex justify-content-between align-items-center">
      <div className="d-flex">
        <img src={logo} />
        <h5 className="text-uppercase">
          Campus
          {/* {lblPortalHeader} */}
          <br />
          Cayetano
          {/* {lblDeNotasHeader} */}
        </h5>
      </div>
    </div>
  );
};

export default Header;
