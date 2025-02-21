import 'bootstrap/dist/css/bootstrap.min.css';

function Cards({img, name, desc, ingredients, price, button1Label, button1Action, button2Label, button2Action }) {
  return (
    <div className="card" style={{ width: '18rem' , backgroundColor: '#333'  }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title text-center text-white">{name}</h5>
        <p className="card-text text-center text-white">{desc}</p>
        <hr className='text-white'/>
        <ul className="card-subtitle mb-2 text-muted text-center list-unstyled">
          {ingredients.map((item) => (
            <li className='card-text text-white' key={item}>{item}</li>
          ))}
        </ul>
        <hr className='text-white'/>
        <h5 className="card-text text-center text-white">Precio: <strong>$</strong>{price}</h5>
        <div className="d-flex justify-content-between">
        <button className="btn btn-light" style={{ border: '1px solid #000' }} onClick={button1Action}>{button1Label}</button>
        <button className="btn btn-dark" onClick={button2Action}>{button2Label}</button>
        </div>
      </div>
    </div>
  )
}

export default Cards;