import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '정희창',
  'birthday' : '960503',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '유영준',
  'birthday' : '961120',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '남상민',
  'birthday' : '960827',
  'gender' : '남자',
  'job' : '대학생'
}
]
class App extends Component {
   render() {
    return (
      <div>
        {
          customers.map(c =>{
            return (<Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
              );
          })
        }
     </div>
    );
  }
}

export default App;
