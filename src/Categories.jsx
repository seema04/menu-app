import React from 'react'

const Categories = ({categories, filterItems}) => {
  return(
    <div className="btn-container">
      {categories.map((category, index) => {
        return(
          <div className='btn-categories'>
            <button 
                key={index} 
                className='btn' 
                onClick={() => filterItems(category)}>
              {category}
            </button>
          </div>
        )
      })}
    </div>
  )
}


export default Categories;