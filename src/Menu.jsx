import React from 'react'

const Menu = ({items}) => {
  return (
    <div className='section-center'>
      {items.map(menuItem => {
         const {id, title, image, desc, price} = menuItem;
        return (
         <article key={id} className='menu-item'>
           <img src={image} alt={title} />
           <div className="item-info">
            <header>
              <h4>{title}</h4>
              <h6>$ {price}</h6>
            </header>
            <p className='desc'>{desc}</p>
           </div>
         </article>
        );
      })};
    </div>
  );
};

export default Menu