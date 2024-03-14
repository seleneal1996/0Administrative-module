import { useForm } from "react-hook-form";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import EyeIconFill from "../../components/icons/EyeIconFill";
import PersonIcon from "../../components/icons/PersonIcon";
import { useNavigate } from "react-router-dom";
import CONSTANTS from "../../../config/constants";
import ErrorField from "../../components/ErrorField";

const { ROUTES } = CONSTANTS;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (sendData) => {
    console.log("🚀 ~ onSubmit ~ sendData:", sendData);
    navigate(ROUTES.PRIVATE.PANEL_ADMIN.to);
  };

  return (
    <>
      <div className="container-fluid login ">
        <div className="row vh-95 va-middle">
          <div className="card">
            <div className="row  h-100">
              <div className="col-md-12 col-lg-12 col-sm-12 form-div px-0">
                <Header />
                <div className="login-content d-flex align-items-center justify-content-center align-items-center ">
                  <div className="center">
                    <div className="log-title">
                      <h1>Iniciar Sesion</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <p>
                        Ingresa al nuevo sistema con tus credenciales activas,
                        correo institucional y contraseña.
                      </p>

                      <div className="mb-3">
                        <label htmlFor="email">Correo Electronico</label>
                        <div className="input-group flex-nowrap">
                          <input
                            type="text"
                            className="form-control login-control form-control-sm"
                            id="email"
                            placeholder="Ingrese Correo"
                            {...register("email", { required: true })}
                          />
                          <span
                            className="input-group-text login-control "
                            id="addon-wrapping"
                          >
                            <PersonIcon />
                          </span>
                        </div>
                        {errors?.email && <ErrorField />}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password">Contraseña</label>
                        <div className="input-group flex-nowrap">
                          <input
                            type="text"
                            className="form-control login-control form-control-sm"
                            id="password"
                            placeholder="Ingrese Contraseña"
                            {...register("password", { required: true })}
                          />
                          <span
                            className="input-group-text login-control "
                            id="addon-wrapping"
                          >
                            <EyeIconFill />
                          </span>
                        </div>
                        {errors?.password && <ErrorField />}
                      </div>

                      <div className="text-center mt-3">
                        <button
                          type="submit"
                          className="btn btn-send btn-login mb-3"
                        >
                          Ingresar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
