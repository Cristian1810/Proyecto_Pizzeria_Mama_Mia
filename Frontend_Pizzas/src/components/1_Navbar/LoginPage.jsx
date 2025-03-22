import React, { useState } from 'react';
import { useUser } from '../../Store/UserContext';
import "./RegisterPage.css";

const LoginPage = () => {
  const { login } = useUser();
  const [Informacion, setInformacion] = useState({
    email: '',
    password: ''
  });
  const [MensajeExitoso, setMensajeExitoso] = useState('');
  const [MensajeErroneo, setMensajeErroneo] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInformacion({ ...Informacion, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Informacion.password.length < 6) {
      setMensajeErroneo('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    try {
      await login(Informacion);
      setMensajeExitoso('Inicio de sesión exitoso. ¡Bienvenido!');
      setMensajeErroneo('');
    } catch (error) {
      setMensajeErroneo('Error durante el inicio de sesión');
      setMensajeExitoso('');
    }
  };

  return (
    <div className='login-page'>
      <div className="container mt-5">
        <h2>Inicio de Sesión</h2>
        {MensajeExitoso && <div className="alert alert-success">{MensajeExitoso}</div>}
        {MensajeErroneo && <div className="alert alert-danger">{MensajeErroneo}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={Informacion.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña:</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={Informacion.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-success">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;