/* eslint-disable react/prop-types */
import Alert from "react-bootstrap/Alert";
const Alertas = (props) => {
  return (
    <Alert  key={props.variant} variant={props.variant}>
      {props.mensaje}
    </Alert>
  );
};

export default Alertas;