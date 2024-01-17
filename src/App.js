import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";


 
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders:[],

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
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }
 render (){
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Items items={this.state.items} onAdd={this.addToOrder}/>
      <Footer />
    </div>
  );
 }

 deleteOrder(id){
this.setState({orders: this.state.orders.filter(el => el.id !== id)})

 }

 addToOrder(item){
  let isInArray = false
this.state.orders.forEach(el => {
  if(el.id === item.id)
  isInArray = true
})
if(!isInArray)
this.setState({orders: [...this.state.orders, item]  })
 }
}

export default App;
