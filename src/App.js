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
          title: 'Gray chair',
          img: 'chair-grey.jpeg',
          desc: 'Description',
          category: 'Chairs',
          price: '49.99'
      },
      {
        id: 3,
          title: 'Gray chair',
          img: 'chair-grey.jpeg',
          desc: 'Description',
          category: 'Chairs',
          price: '49.99'
      },
      {
        id: 4,
          title: 'Gray chair',
          img: 'chair-grey.jpeg',
          desc: 'Description',
          category: 'Chairs',
          price: '49.99'
      },
      {
        id: 5,
          title: 'Gray chair',
          img: 'chair-grey.jpeg',
          desc: 'Description',
          category: 'Chairs',
          price: '49.99'
      },
      {
        id: 6,
          title: 'Gray chair',
          img: 'chair-grey.jpeg',
          desc: 'Description',
          category: 'Chairs',
          price: '49.99'
      },
      {
        id: 7,
          title: 'Gray chair',
          img: 'chair-grey.jpeg',
          desc: 'Description',
          category: 'Chairs',
          price: '49.99'
      },
      {
        id: 8,
          title: 'Gray chair',
          img: 'chair-grey.jpeg',
          desc: 'Description',
          category: 'Chairs',
          price: '49.99'
      },
      {
        id: 9,
          title: 'Gray chair',
          img: 'chair-grey.jpeg',
          desc: 'Description',
          category: 'Chairs',
          price: '49.99'
      },
      {
        id: 10,
          title: 'Gray chair',
          img: 'chair-grey.jpeg',
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
