import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";


 
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items: [
        {
        id: 1,
          title: 'Gray chair',
          img: 'Chair.jpg',
          desc: 'Description',
          category: 'Chairs',
          price: '49.99'
      },
      {
        id: 2,
          title: 'Brown Table',
          img: 'Table.jpg',
          desc: 'Description',
          category: 'Chairs',
          price: '49.99'
      },
      {
        id: 3,
          title: 'Puff',
          img: 'Puff.jpg',
          desc: 'Description',
          category: 'Chairs',
          price: '49.99'
      },
      {
        id: 4,
          title: 'Big chair',
          img: 'Chair(1).jpg',
          desc: 'Description',
          category: 'Chairs',
          price: '49.99'
      },
      {
        id: 5,
          title: 'Coffe Table',
          img: 'Coffe Table.jpg',
          desc: 'Description',
          category: 'Chairs',
          price: '49.99'
      },
      {
        id: 6,
          title: 'Sofa',
          img: 'Sofa.jpg',
          desc: 'Description',
          category: 'Chairs',
          price: '49.99'
      },
      {
        id: 7,
          title: 'Lamp',
          img: 'Lamp.jpg',
          desc: 'Description',
          category: 'Chairs',
          price: '49.99'
      },
      {
        id: 8,
          title: 'Carpet',
          img: 'Carpet.jpg',
          desc: 'Description',
          category: 'Chairs',
          price: '49.99'
      },
      {
        id: 9,
          title: 'Plant',
          img: 'Plant.jpg',
          desc: 'Description',
          category: 'Chairs',
          price: '49.99'
      },
     
      ]
    }
  }
 render (){
  return (
    <div className="wrapper">
      <Header />
      <Items items={this.state.items}/>
      <Footer />
    </div>
  );
 }
}

export default App;
