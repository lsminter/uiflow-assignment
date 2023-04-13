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
  const [showMore, setShowMore] = useState('')
  
  useEffect( () => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  // const handleButton = i => {
  //   setShowMore(prevState => {})
  // }
  
  return (
    <ul>
      {items.map((x, i) => (
        <div>
          <ul key={i}>
            {!showMore 
              ? x.title 
              : 
              <div>
                <div>{x.title}</div>
                <div>{x.description}</div>
              </div>
            }
            <button onClick={() => setShowMore(!showMore)}>{!showMore ? "Show More" : "Show Less"}</button>
            {/* One button updates the state for all of the buttons instead of just the one.*/}
            {/* <button onClick={() => handleButton(i)}>{!showMore ? "Show More" : "Show Less"}</button> */}
          </ul>
          <ul>Price: {x.price}</ul>
          <img src={x.image} alt="text" class="img"/>
        </div>
      ))}
    </ul>
  );
};
