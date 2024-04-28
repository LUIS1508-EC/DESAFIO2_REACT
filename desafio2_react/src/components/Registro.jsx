import Formulario from "./Formulario";
import Alert from "./Alertas";
import Parrafo from "./Parrafo";
import Container from "react-bootstrap/esm/Container";
import Boton from "./Boton";

function Registro(){
  const iconosImg = [
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
return(
<>
<Container>
        <h1>Crea una cuenta</h1>
        <div>
          {iconosImg.map(({ id, value }) => (
            <Boton key={id} icono={value} />
          ))}
        </div>
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
export default Registro