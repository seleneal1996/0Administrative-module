import { Link, useLocation, useNavigate } from "react-router-dom";
import DoubleArrowLeft from "../../components/icons/DoubleArrowLeft";
import logomenu from "../../../assets/assets/img/logo-blanco.png";
import fallbackImageUrl from "../../../assets/avatar-neutro.png";
import FileIcon from "../../components/icons/FileIcon";
import { useId } from "react";
import BoxArrowInRight from "../../components/icons/BoxArrowInRight";
import CONSTANTS from "../../../config/constants";
import { matchFunction } from "../../../utilities/match.function";

const { ROUTES, NAVIGATE } = CONSTANTS;

const Sidebar = () => {
  const id = useId();

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate(ROUTES.PUBLIC.SIGN_USER.to);
  };

  return (
    <>
      <div className="sidebar">
        <div className="sidebartop d-flex">
          <div className="logo">
            <img src={logomenu} alt="Logo Cayetano" />
          </div>
          <div className="menu">
            <DoubleArrowLeft />
          </div>
        </div>

        <div className="divider" />
        <nav>
          <ul>
            {NAVIGATE.map((item, index) => (
              <li key={`${id}-${index}`}>
                <Link
                  className={
                    matchFunction(location.pathname, item.to)
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to={`..${item.to}`}
                >
                  <FileIcon height={24} width={24} />

                  <span className="text">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="account">
          <div className="avatar">
            <img src={fallbackImageUrl} alt="Imagen por defecto" />
          </div>
          <div className="name">
            <p className="mb-0 fw-regular">
              {/* TODO: Usuario */}
              Ramdon <br />
              {/* TODO: Cargo */}
              <span> Ramdon </span>
            </p>
          </div>
          <div className="logout">
            <a onClick={handleLogout}>
              <BoxArrowInRight />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
