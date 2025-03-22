import React, { useEffect } from 'react';
import { useUser } from '../../Store/UserContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Profile() {
  const { email, getProfile, logout } = useUser();

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-50">
      <Card className="user-profile text-white text-center bg-dark" style={{ width: '24rem' }}>
        <Card.Body>
          <Card.Title>Perfil de Usuario</Card.Title>
          <h1>👤</h1>
          <Card.Text>
            <strong>Email:</strong>
          </Card.Text>
          <h5>{email}</h5>
          <Button className='btn btn-danger' type="button" onClick={logout}>
            Cerrar Sesión
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Profile;