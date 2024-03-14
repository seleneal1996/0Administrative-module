import { Link, useLocation, useNavigate } from "react-router-dom";
import DoubleArrowLeft from "../../components/icons/DoubleArrowLeft";
import logomenu from "../../../assets/assets/img/logo-blanco.png";
import fallbackImageUrl from "../../../assets/avatar-neutro.png";
import FileIcon from "../../components/icons/FileIcon";
import { useId } from "react";
import BoxArrowInRight from "../../components/icons/BoxArrowInRight";
import CONSTANTS from "../../../config/constants";
import { matchFunction } from "../../../utilities/match.function";
import ContractsIcon from "../../components/icons/ContractsIcon";

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
            <img src={logomenu} alt="Logo" />
          </div>
          <div className="menu">
            <DoubleArrowLeft />
          </div>
        </div>

        <div className="divider" />
        <nav>
          <ul>
          <li>
                <Link
                  className={
                    matchFunction(location.pathname, '/admin')
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to={`../admin`}
                >
                  <FileIcon height={24} width={24} />

                  <span className="text">Panel Administrativo</span>
                </Link>
              </li>

              <li>
                <Link
                  className={
                    matchFunction(location.pathname, '/contracts')
                      ? "nav-link active"
                      : "nav-link"
                  }
                  to={`../contracts`}
                >
                  <ContractsIcon height={24} width={24} />

                  <span className="text">Panel Administrativo</span>
                </Link>
              </li>
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
