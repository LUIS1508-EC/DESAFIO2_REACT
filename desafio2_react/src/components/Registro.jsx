/* eslint-disable react/prop-types */

import Formulario from "./Formulario";
import Alertas from "./Alertas";
import Container from "react-bootstrap/Container";
import Parrafo from "./Parrafo";

const Registro = (props) => {
  const iconosImagenes = [
    {
      id: 1,
      value: "fa-brands fa-facebook",
    },
    {
      id: 2,
      value: "fa-brands fa-github",
    },
    {
      id: 3,
      value: "fa-brands fa-linkedin-in",
    },
  ];
  return (
    <>
      <Container className="pt-5 pl-2 pr-2 mb-5 pb-5 bg-light text-center rounded-5">
        <h1>Registrate</h1>
        <div className="pb-0" id="iconos">
          {iconosImagenes.map(({ id, value }) => (
            <SocialButton key={id} icono={value} />
          ))}
        </div>
        <Texto />
        <Formulario setAlerta={props.setAlerta} alerta={props.alerta} />
        {props.alerta.msg ? (
          <Alert
            className="rounded-3"
            variant={props.alerta.color}
            mensaje={props.alerta.msg}
          />
        ) : null}
      </Container>
    </>
  );
};

export default Registro;