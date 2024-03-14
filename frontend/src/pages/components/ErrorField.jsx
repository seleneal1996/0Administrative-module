const ErrorField = (props) => {
  const { message = "Campo requerido" } = props;

  return <span className="text-danger">*{`  ${message}`}</span>;
};

export default ErrorField;
