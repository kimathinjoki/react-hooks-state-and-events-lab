import React, {useState} from "react";





function Item({ name, category }) {

  const [item, setItem]= useState("")

  // const btnMsg = function(){
  //   if(item === "in-cart"){
  //     return "Remove from Cart"
  //   }else{
  //     return "Add to Cart"
  //   }
  // }


  return (
    <li className={item}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={()=>setItem("in-cart")}>{item ? "Remove from Cart": "Add to Cart"}</button>
    </li>
  );
}

export default Item;
