import { useState } from "react"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Formulario(props) {
    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [clave, setClave] = useState("")
    const [clave2, setClave2] = useState("")

    const handleSubmit = (e) => {

        e.preventDefault();
        if (nombre === "" || correo === "" || clave === "" || clave2 === "") {
            props.setAlerta({
                error: true,
                mensaje: "Debes completar todos los campos",
                color: "danger",
            });

    } else if (clave != clave2) {
        props.setAlerta({
            error: true,
            mensaje: "Las Claves deben coincidir",
            color: "danger",
        });

    } else {

        props.setAlerta({
            error: true,
            mensaje: "Registro Correcto",
            color: "success"
        });
        setNombre("");
        setCorreo("");
        setClave("");
        setClave2("");

    }
}
return(
<>

<Form onSubmit={handleSubmit}>

                <Form.Group>
                    <Form.Control
                        placeholder="Nombre"
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        placeholder="registro@ejemplo.com"
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        placeholder="Contraseña"
                        type="password"
                        value={clave}
                        onChange={(e) => setClave(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        placeholder="Confirma tu contraseña"
                        type="password"
                        value={clave2}
                        onChange={(e) => setClave2(e.target.value)}
                    />
                </Form.Group>
                <Button>
                    Registrarse
                </Button>
            </Form>
</>
)
}
export default Formulario