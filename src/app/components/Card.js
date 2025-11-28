'use client';

export default function Card({ product }) {
  const { name, price, image_url, in_stock } = product;

  return (
    <div className="card">
      <div className="image">
        {image_url ? (
          <img 
            src={image_url} 
            alt={name}
            className="img"
          />
        ) : (
          <span>Нет фото</span>
        )}
      </div>
      
      <div className="content">
        <div className="header">
          <h3>{name}</h3>

        </div>
        
         
        <div className="footer">
          <span className="price">
            ${price}
          </span>

        </div>
        
        <button 
          className={`button ${in_stock ? 'active' : 'disabled'}`}
          disabled={!in_stock}
        >
          {in_stock ? 'В корзину' : 'Нет в наличии'}
        </button>
      </div>
    </div>
  );
}