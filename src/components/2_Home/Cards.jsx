import 'bootstrap/dist/css/bootstrap.min.css';


function Cards({ img, name, ingredients, description, price, button1Label, button1Action, button2Label, button2Action }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title text-center">{name}</h5>
        <hr />
        <h6 className="card-subtitle mb-2 text-muted text-center ">{ingredients}</h6>
        <p className="card-text text-center">{description}</p>
        <hr />
        <h5 className="card-text text-center">{price}</h5>
        <p></p>
        <div className="d-flex justify-content-between">
        <button className="btn btn-light" style={{ border: '1px solid #000' }} onClick={button1Action}>{button1Label}</button>
        <button className="btn btn-dark" onClick={button2Action}>{button2Label}</button>
        </div>
      </div>
    </div>
  )
}

export default Cards;