
export default function Login(){

    return(
        <div className="login">
            <h2>Iniciar Sesion</h2>
            <form action="">
                <div className="input-group">
                    <label>Correo Electronico</label>
                    <input type="email" placeholder="tu@correo.com"/>
                </div>

                <div className="input-group">
                    <label>Contrasenia</label>
                    <input type="password" placeholder="-----------" />
                </div>

                <button className="btn-submit" >Ingresar</button>
            </form>
        </div>
    );
}