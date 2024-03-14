import { useEffect, useState } from "react";
import { Modal, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useGetAllCollaborators from "../../../hook/useGetAllCollaborators";
import ErrorField from "../../components/ErrorField";
import PenIcon from "../../components/icons/Pencil";
import Layout from "../components/Layout";
import {
  deleteByIdCollaborator,
  postByIdCollaborator,
  updateByIdCollaborator,
} from "../../../services/bsg.service";

const Panel = () => {
  const [openModal, setOpenModal] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { collaborators, loading } = useGetAllCollaborators(isLoading);

  const handleSwitchChange = (event) => {
    setSwitchValue(event.target.checked);
  };

  const handleRowClick = (item) => {
    setSelectedRowIndex(item);
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  const handleClose = () => {
    setOpenModal(!openModal);
    setSelectedRowIndex(null);
    setSwitchValue(false);
    reset();
  };
  useEffect(() => {
    if (selectedRowIndex) {
      setValue("name", selectedRowIndex?.nombre);
      setValue("lastname", selectedRowIndex?.apellido);
      setValue("dni", selectedRowIndex?.dni);
      setSwitchValue(selectedRowIndex?.estado);
    }
  }, [selectedRowIndex]);

  const onSubmit = async (data) => {
    if (selectedRowIndex) {
      const payload = {
        nombre: data.name,
        apellido: data.lastname,
        dni: data.dni,
        estado: switchValue,
      };

      setIsLoading(true);
      const response = await updateByIdCollaborator(
        selectedRowIndex._id,
        payload
      );

      if (response) {
        handleClose();
      }
      setIsLoading(false);
    } else {
      const payload = {
        nombre: data.name,
        apellido: data.lastname,
        dni: data.dni,
        estado: switchValue,
        id_colaborador: Math.floor(Math.random() * 100) + 1,
      };

      setIsLoading(true);
      const response = await postByIdCollaborator(payload);

      if (response) {
        handleClose();
      }
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    setIsLoading(true);
    const response = await deleteByIdCollaborator(selectedRowIndex._id);
    if (response) {
      handleClose();
    }
    setIsLoading(false);
  };

  return (
    <Layout>
      <div className="d-flex justify-content-end my-2">
        <div>
          <button
            className={`btn btn-success p-0 px-1`}
            onClick={() => setOpenModal(!openModal)}
          >
            Agregar Colaborador
          </button>
        </div>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table striped bordered responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {collaborators?.map((row, index) => (
              <tr key={index} onClick={() => handleRowClick(row)}>
                <td>{index}</td>
                <td>{row?.nombre}</td>
                <td>{row?.apellido}</td>
                <td>
                  <button
                    className={`btn btn-${
                      row?.estado ? "success" : "primary"
                    } p-0 px-1`}
                  >
                    {row?.estado ? "Activado" : "Desactivado"}
                  </button>
                </td>
                {/* TODO: Add validation */}
                <td onClick={() => setOpenModal(!openModal)}>
                  <PenIcon />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <Modal
        show={openModal}
        centered
        backdrop="static"
        keyboard={false}
        backdropClassName="modalGenerateCode iconoPayment"
        className="pruebafondo"
        size="md"
      >
        <Modal.Header closeButton onClick={() => handleClose()}>
          <Modal.Title>
            <h5 className="modal-title">Detalle</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border br-3 p-3 detalle-pago">
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-12 col-lg-12 mb-6">
                    <label className={`mb-2 fw-regular `} htmlFor="name">
                      Nombre:
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="campo-vacio form-control form-control-sm form-control-outline"
                      {...register("name", { required: true })}
                    />
                    {errors?.name && <ErrorField />}
                  </div>
                  <div className="col-md-12 col-lg-12 mb-6">
                    <label className={`mb-2 fw-regular `} htmlFor="lastname">
                      Apellido:
                    </label>
                    <input
                      id="lastname"
                      type="text"
                      className="campo-vacio form-control form-control-sm form-control-outline"
                      {...register("lastname", { required: true })}
                    />
                    {errors?.lastname && <ErrorField />}
                  </div>

                  <div className="col-md-12 col-lg-12 mb-6">
                    <label className={`mb-2 fw-regular `} htmlFor="dni">
                      Dni:
                    </label>
                    <input
                      id="dni"
                      type="text"
                      className="campo-vacio form-control form-control-sm form-control-outline"
                      {...register("dni", { required: true })}
                      maxLength={9}
                    />
                    {errors?.dni && <ErrorField />}
                  </div>
                </div>

                <div className="col-md-12 col-lg-12 mb-12 mt-2">
                  <p>Estado del usuario: </p>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      checked={switchValue}
                      onChange={handleSwitchChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    >
                      {switchValue ? "Activo" : "Inactivo"}
                    </label>
                  </div>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn py-1 btn-dark text-white float-start back mt-4 px-4 rounded-3"
                      disabled={isLoading}
                      onClick={handleDelete}
                    >
                      {isLoading ? "Procesando" : "Eliminar"}
                    </button>
                    <button
                      type="submit"
                      className="btn py-1 btn-dark float-end px-3 mt-4 rounded-3 bg-color-info"
                      disabled={isLoading}
                    >
                      {isLoading ? "Procesando" : "Enviar"}
                    </button>
                  </div>
                </div>
              </form>
            </>
          </div>
        </Modal.Body>
      </Modal>
    </Layout>
  );
};

export default Panel;
