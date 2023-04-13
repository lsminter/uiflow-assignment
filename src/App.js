import {useState, useEffect} from 'react';

/**
 * Goals:
 * 1. Fetch a list of products from https://fakestoreapi.com/products
 * 2. Display the image, title, and price for each product in a grid or list
 * 3. Bonus: clicking on a product shows the other product attributes
 * Example (in Uiflow): https://www.uiflow.com/apps/brian_s_sandbox_app/studio/main
 
 The above link doesn't work
 */
 export default function App () {
  const [items, setItems] = useState([])
  const [toggledButtonId, setToggledButtonId] = useState(null);

  
  useEffect( () => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  console.log(items)

  function toggleButton(button) {
    setToggledButtonId(button.id);
  }

  
  return (
    <ul>
      {items.map((x) => {
        const isToggled = x.id === toggledButtonId
        return (
        <div>
          <ul>
            {x.title}
          </ul>
          <button 
              key={x.id}
              onClick={() => !isToggled ? toggleButton(x) : toggleButton("")}>
                {!isToggled ? "Show Description" : "Hide Description"}
            </button>
            {isToggled ? x.description : ""}
          <ul>Price: {x.price}</ul>
          <img src={x.image} alt="text" class="img"/>
        </div>
      )})}
    </ul>
  );
};
