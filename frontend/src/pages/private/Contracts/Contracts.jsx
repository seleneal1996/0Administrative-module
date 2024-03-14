import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";
import useGetAllContractors from "../../../hook/useGetAllContract";
import { Modal, Table } from "react-bootstrap";
import PenIcon from "../../components/icons/Pencil";
import ErrorField from "../../components/ErrorField";
import {
  createContract,
  deleteByIdContract,
  updateByIdContract,
} from "../../../services/bsg.service";

const Contracts = () => {
  const [openModal, setOpenModal] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [epsValue, setEpsValue] = useState(false);
  const [insuranceValue, setInsuranceValue] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { contractors, loading } = useGetAllContractors(isLoading);

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
      setEpsValue(selectedRowIndex.eps);
      setInsuranceValue(selectedRowIndex.insuranceValue);
    }
  }, [selectedRowIndex]);

  const onSubmit = async (data) => {
    if (selectedRowIndex) {
      const payload = {
        name: data.name,
        insurance: insuranceValue,
        eps: epsValue,
      };

      setIsLoading(true);
      const response = await updateByIdContract(selectedRowIndex._id, payload);
      if (response) {
        handleClose();
      }
      setIsLoading(false);
    } else {
      const payload = {
        name: data.name,
        insurance: insuranceValue,
        eps: epsValue,
        activate: true,
      };

      setIsLoading(true);
      const response = await createContract(payload);
      if (response) {
        handleClose();
      }
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    setIsLoading(true);
    const response = await deleteByIdContract(selectedRowIndex._id);
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
            Agregar contrato
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
              <th>Tipo de contrato</th>
              <th>EPS</th>
              <th>Seguro</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {contractors?.map((row, index) => (
              <tr key={index} onClick={() => handleRowClick(row)}>
                <td>{index}</td>
                <td>{row?.name}</td>
                <td>
                  <button
                    className={`btn btn-${
                      row?.eps ? "success" : "primary"
                    } p-0 px-1`}
                  >
                    {row?.eps ? "Activado" : "Desactivado"}
                  </button>
                </td>
                <td>
                  <button
                    className={`btn btn-${
                      row?.insurance ? "success" : "primary"
                    } p-0 px-1`}
                  >
                    {row?.insurance ? "Activado" : "Desactivado"}
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
                      Nombre del contrato:
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="campo-vacio form-control form-control-sm form-control-outline"
                      {...register("name", { required: true })}
                    />
                    {errors?.name && <ErrorField />}
                  </div>
                </div>

                <div className="col-md-12 col-lg-12 mb-12 mt-2">
                  <p>Cuenta con EPS: </p>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      checked={epsValue}
                      onChange={(event) => setEpsValue(event.target.checked)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    >
                      {switchValue ? "Activo" : "Inactivo"}
                    </label>
                  </div>

                  <div className="col-md-12 col-lg-12 mb-12 mt-2">
                    <p>Cuenta con Seguro: </p>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        checked={insuranceValue}
                        onChange={(event) =>
                          setInsuranceValue(event.target.checked)
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        {switchValue ? "Activo" : "Inactivo"}
                      </label>
                    </div>
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

export default Contracts;
