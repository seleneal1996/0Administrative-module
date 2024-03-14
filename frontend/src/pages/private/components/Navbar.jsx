import { useId } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

// import logo from "../../assets/assets/img/logo.png";
import logo from "../../../assets/assets/img/logo.png";
import CONSTANTS from "../../../config/constants";

const { ROUTES, NAVIGATE } = CONSTANTS;

const Navbar = () => {
  const id = useId();

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate(ROUTES.PUBLIC.SIGN_USER.to);
  };

  return (
    <nav className="navbar navbar-light navbar-expand-md bg-white justify-content-center">
      <div className="container">
        <a href="/" className="navbar-brand d-flex w-50 me-auto">
          <img src={logo} />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsingNavbar3"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="navbar-collapse collapse w-100 " id="collapsingNavbar3">
          <ul className="nav navbar-nav justify-content-end ms-auto w-100  order-wrapper">
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="nav-item d-block d-sm-block d-md-none three me-3">
              <Link className="nav-link" to="/">
                <div className="d-inline-flex me-1 home-svg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    {/* <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                  </svg>
                </div>
                Menu Inicio
              </Link>
            </li>
            {NAVIGATE.map((item, index) => (
              <li
                key={`${id}-${index}`}
                className="nav-item fourth notas-option me-3"
              >
                <Link className="nav-link" to={item.to}>
                  <i className="far fa-pencil fs-sm me-1 text-upch" />
                  {item.label}
                </Link>
              </li>
            ))}

            {/* generateFakeMenu.map((item, index) => (
              <li
                key={`${id}-${index}`}
                className="nav-item fourth notas-option me-3"
              >
                <Link className="nav-link" to={item.tobjeto}>
                  <i className="far fa-pencil fs-sm me-1 text-upch" />
                  {item.dmodulo}
                </Link>
              </li>
            ))} */}
            <li className="nav-item  d-none fourth me-3">
              <a className="nav-link fs-sm " href="#">
                {" "}
                <i className="far fa-user fs-sm me-1 text-primary " />
                Mi Perfil
              </a>
            </li>

            <li className="nav-item d-block d-sm-block d-md-none fourth ">
              <a
                className="nav-link logout fs-sm fourth border-top mt-2 me-3"
                onClick={handleLogout}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  {/* <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                  <path d="M534.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L434.7 224 224 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM192 96c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-53 0-96 43-96 96l0 256c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
                </svg>
                Cerra Session
              </a>
            </li>

            <li className="nav-item me-3 noti-display d-none">
              <a
                className=" nav-link dropdown-toggle icon-noti   waves-effect waves-dark position-relative
         "
                href="#"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-bell"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
                <span className="badge rounded-pill bg-warning noti">3</span>
              </a>
            </li>

            <li className="nav-item dropdown d-flex profile-info one ">
              <div className="d-flex align-items-center">
                <p>
                  Ramdon
                  {/*  {perfil && perfil[0].dusuario} <br />{" "} */}
                  <span className=" ">
                    Ramdon
                    {/* {perfil && perfil[0].cargo} <br />{" "} */}
                  </span>
                </p>
              </div>
              <OverlayTrigger
                trigger="click"
                rootClose
                key="bottom"
                placement="bottom"
                overlay={
                  <Popover>
                    <Popover.Body
                      style={{
                        paddingLeft: 0,
                        paddingRight: 0,
                        paddingBottom: 8,
                        paddingTop: 8,
                      }}
                    >
                      <div className="arrow" />
                      <div className="profile-info text-start">
                        <a className="dropdown-item fs-sm ">
                          <i className="far fa-envelope me-2" />
                          Correo Electronico
                          {/*  {perfil && perfil[0].tcorreo_inst} <br />{" "} */}
                        </a>
                      </div>
                      <hr className="dropdown-divider" />
                      <div className="popover-foote">
                        <a
                          className="dropdown-item logout fs-sm text-start"
                          /*  href="/" */
                          onClick={handleLogout}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M534.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L434.7 224 224 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM192 96c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-53 0-96 43-96 96l0 256c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
                          </svg>
                          Cerrar Sesion
                        </a>
                      </div>
                    </Popover.Body>
                  </Popover>
                }
              >
                <a
                  className="nav-link dropdown-toggle toggle-profile pe-4 "
                  id="navbarScrollingDropdown"
                  role="button"
                  // data-bs-toggle="dropdown"
                  // aria-expanded={open ? "true" : "false"}
                  // onClick={() => {
                  //   //console.log("aaaaa",refAvatar.current.classList.value.includes("show"))
                  //   setOpen(!open);
                  // }}
                >
                  <div className="border border-2 border-bs-gray-200  crop crop-round-40">
                    {/* <!-- <img src="../../assets/profile.png" alt="user" className="profile-pic"> --> */}
                    {/*  <span>{avatar(perfil && perfil[0].dusuario)}</span> */}
                  </div>
                </a>
              </OverlayTrigger>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
