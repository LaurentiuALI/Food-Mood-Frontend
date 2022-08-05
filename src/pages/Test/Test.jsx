import React from "react";
import MainPageTemplate from "../../common/templates/MainPageTemplate.jsx";
import { Button, Col, Row } from "antd";
import "./Home.less";

import RestaurantsList from "./RestaurantsList";
import { useLocation } from "react-router-dom";

import { useState } from 'react'
import './App.css';
//import styled from 'styled-components'
import people from './data/data'
import { arraySearch } from './utils'


const Test = () => {
  //const { state } = useLocation();
  //const { pref } = state;

//EX 1
//  const names = ['James', 'John', 'Paul', 'Ringo', 'George'];

// EX 2
  const arr = [
    {id: 1, name: "Restaurant 1", country: ['Austria', 'Italia']},
    {id: 2, name: "Restaurant 2", country: 'Germany'},
    {id: 3, name: "Restaurant 3", country: ['Austria', 'Franta', 'Romania']},
  ];

  // ✅ Find first object that matches condition
  const found = arr.find(obj => {
    return obj.id === 1;
  });

  // 👇️ {id: 1, country: 'Austria'}
  console.log(found);

  // -----------------------

  // ✅ Find multiple objects that satisfy condition
  const filtered = arr.filter(obj => {
    return obj.country === 'Austria';
    //return obj.country.contains("A");
    //return obj.country("Austria") || obj.country("r");
  });

  // 👇️ [{id: 1, country: 'Austria'}, {id: 3, country: 'Austria'}]
  console.log(filtered);


//EX 3
/*
let names = ["Aragorn", "Gandalf", "Frodo", "Sam"];

// 👇 filter the names with two conditions using OR
let newNames = names.filter(function (name) {
  return name.contains("m") || name.contains("r");
});

// 👇 result will be ['Aragorn', 'Frodo', 'Sam']
console.log(newNames);
*/
/*
// 👇 REQUIRED multiple conditions
const data = arr.filter(function (element) {
  return // condition1 && condition2 && condition3...
});

// 👇 OPTIONAL multiple conditions
const data = arr.filter(function (element) {
  return // condition1 || condition2 || condition3...
});
*/

//EX 4
const [population, setPopulation] = useState(people)
const [count, setCount] = useState(people.length)

//alert(count);

  const handleOnChange = async (e) => {
    let value = e.target.value;
    if (value.length > 2) {
      let search = await arraySearch(population, value);
      setPopulation(search)
      setCount(search.length)
    } else {
      setPopulation(people)
      setCount(people.length)
    }
  }

  return (
    <div>
      <MainPageTemplate>

{/* EX 1
<div>
  {names.filter(name => name.includes('J')).map(filteredName => (
    <li>
      {filteredName}
    </li>
  ))}
</div>
*/}
{/* EX 2*/}
<div>
      {/* 👇️ render single object */}
      {found && (
        <div>
          <h2>id: {found.id}</h2>
          <h2>name: {found.name}</h2>
          <h2>country: {found.country}</h2>
        </div>
      )}

      <hr />

      {/* 👇️ render array of objects */}
      {filtered.map(obj => {
        return (
          <div key={obj.id}>
            <h2>id: {obj.id}</h2>
             <h2>name: {obj.name}</h2>
            <h2>country: {obj.country}</h2>
          </div>
        );
      })}
</div>

    <div className="App">
      <div>Count: {count}
      <input className="search" type="text" name="search" id="search" placeholder="Search Filter" onChange={handleOnChange}/>
      </div>
  
      <div className="container" name="container">
        {population.map(person => (
        <div className="card" key={person.guid}>
          <p>Name: {person.name}</p>
          <p>Age: {person.age}</p>
          <p>Gender: {person.gender}</p>
          <p>Address: {person.address}</p>
        </div>
        ))}
      </div>
    
    </div>
        <div>
          {/*
          <p>show Rest by Preferences: {state.pref}</p>
          */}
        </div>
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 380,
          }}
        >
          <div>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <div className="home-title">Restaurants</div>
              </Col>
              <Col span={24}>
                <div className="home-subtitle">
                  <div>Can’t decide ?</div>
                  <div>Not what you’re looking for? Let us help you!</div>
                  <Button
                    type="primary"
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: "700",
                      width: "7.5rem",
                    }}
                  >
                    Mood me up
                  </Button>
                </div>
              </Col>

              {RestaurantsList.map(({ name, preferences }, index) => {
                return (
                  <Col className="gutter-row" span={6}>
                    <div className="img_res">{name}</div>
                    <div>{preferences}</div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </MainPageTemplate>
    </div>
  );
};

export default Test;
/*
const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 2em;
  justify-items: center;
  overflow-y: auto;
  height: calc(100vh - 5em);
`

const Card = styled.div`
  display: block;
  width: 20em;
  height: 10em;
  border-radius: 4px;
  background-color: #424242;
  color: #fff;
  margin: 1em;
`

const Search = styled.input`
color: #fff;
width: 100%;
border: 0;
height: 1.1876em;
margin: 0;
display: block;
margin: 1em auto;
width: 40em;
padding: 6px 0 7px;
min-width: 0;
background-color: #424242;
box-sizing: content-box;
animation-name: mui-auto-fill-cancel;
letter-spacing: inherit;
animation-duration: 10ms;
-webkit-tap-highlight-color: transparent;
`
*/