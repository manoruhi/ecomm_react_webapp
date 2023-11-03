import { useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
//Database
import products from "./db/data";
import Card from "./components/Card";
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState("");

  // Input filter
  const handleInputChange = (event) => {
    setQuery(event.target.value)
  };

  const filteredItems = products.filter((product) =>
  product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  );

  // Radio filter
  const handleChange = event =>{
    setSelectedCategory(event.target.value)
  }

  // Button filter
  const handleClick = event =>{
    setSelectedCategory(event.target.value)
  }

  function filteredData(products, selected, query){
    let filteredProducts = products;

  // Filtering input itmes
  if(query){
    let filteredProducts = filteredItems;
  }

  // Selected Filter
  if(selected){
    let filteredProducts = filteredProducts.filter(
      ({category, color, company,newPrice, title}) => 
      category === selected || 
      color === selected || 
      company === selected || 
      newPrice === selected || 
      title === selected 
      );
  }


  return filteredProducts.map(({img,title,star,reviews,prePrice,newPrice}) => (
    <Card
    key = {Math.random()}
    img = {img}
    title = {title}
    star = {star}
    reviews = {reviews}
    prePrice = {prePrice}
    newPrice = {newPrice }
    />
  ));
}

 const result = filteredData(products, selectedCategory, query);


  return (
    <>
    <Sidebar/>
    <Navigation/>
    <Recommended/>
    <Products/>
    
    </>
  );
}

export default App;
