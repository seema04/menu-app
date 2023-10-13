import React, {useState} from 'react';
import Menu from "./Menu";
import Categories from "./Categories";
import data from './data';

// ? why using set. Bcz, there is repetitiion of category in the array list, so to avoid repetition we are using set. Also we want to see a all button , but all is not a category, hence we need to use spread operator also.

const allCategories = ['all', ... new Set(data.map(item => item.category))];
console.log(allCategories);

function App() {
 const [menuItems, setMenuItems] = useState(data);
 const [categories, setCategories] = useState(allCategories);
 
 const filterItems = (category) => {
  if(category === 'all')
  {
    setMenuItems(data);
    return;
  }
  const newItems = data.filter(item => item.category === category);
  setMenuItems(newItems);
 };

  return (
    <main>
      <section className='menu-section'>
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
          <Categories categories={categories} filterItems={filterItems}/>
          <Menu  items={menuItems}/>
      </section>
    </main>
  );
}

export default App;
