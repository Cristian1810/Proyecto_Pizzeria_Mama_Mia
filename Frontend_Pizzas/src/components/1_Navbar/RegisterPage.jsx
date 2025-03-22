import React, { useState } from 'react';
import { useUser } from '../../Store/UserContext';
import "./RegisterPage.css";

const RegisterPage = () => {
  const { register } = useUser();
  const [Informacion, setInformacion] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [MensajeExitoso, setMensajeExitoso] = useState('');
  const [MensajeErroneo, setMensajeErroneo] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInformacion({ ...Informacion, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Informacion.password !== Informacion.confirmPassword) {
      setMensajeErroneo('Las contraseñas no coinciden');
      return;
    }
    if (Informacion.password.length < 6) {
      setMensajeErroneo('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    try {
      await register(Informacion);
      setMensajeExitoso('Registro exitoso. ¡Bienvenido!');
      setMensajeErroneo('');
    } catch (error) {
      setMensajeErroneo('Error durante el registro');
      setMensajeExitoso('');
    }
  };

  return (
    <div className='register-page'>
      <div className="container mt-5">
        <h2>Registro de Usuario</h2>
        {MensajeExitoso && <div className="alert alert-success">{MensajeExitoso}</div>}
        {MensajeErroneo && <div className="alert alert-danger">{MensajeErroneo}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre de usuario:</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={Informacion.username}
              onChange={handleChange}
              required
            />
          </div>
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
          <div className="mb-3">
            <label className="form-label">Confirmar contraseña:</label>
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              value={Informacion.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-success">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;