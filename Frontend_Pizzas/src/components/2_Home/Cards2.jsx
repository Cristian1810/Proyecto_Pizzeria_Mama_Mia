import 'bootstrap/dist/css/bootstrap.min.css';

function Cards2({ img, name, desc, ingredients =[], price }) {
  return (
    <div className="card mb-4" style={{ maxWidth: '100%', height: 'auto' }}>
      <div className="row g-0">
        <div className="col-md-6">
          <img src={img} className="img-fluid w-100" alt={name} style={{ objectFit: 'cover', height: '100%' }} />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div className="card-body text-start">
            <h5 className="card-title text-white">{name}</h5>
            <hr className='text-white' />
            <p className="card-text text-white">{desc}</p>
            <hr className='text-white' />
            <ul className="card-text text-white list-unstyled"><strong>Ingredientes:</strong><li>{ingredients.join(', ')}</li></ul>
            <div className='d-flex justify-content-between'>
              <p className="card-text text-white"><strong>Precio: $ {price}</strong></p>
              <button className="btn btn-dark">🛒Añadir</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards2;