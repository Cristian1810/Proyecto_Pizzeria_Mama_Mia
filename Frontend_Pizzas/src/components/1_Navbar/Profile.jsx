import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Profile() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-50">
      <Card className="user-profile text-white text-center bg-dark" style={{ width: '24rem' }}>
        <Card.Body>
          <Card.Title>Perfil de Usuario</Card.Title>
          <h1>👤</h1>
          <Card.Text>
            <strong>Email:</strong>
            <h5>PepitoJuan@gmail.com</h5>
          </Card.Text>
          <Button className='btn btn-danger' type="button">
            Cerrar Sesión
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Profile;