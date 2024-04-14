/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Headphone } from './components/headphone/component';
import { headphones } from './constants/mock';
import { Layout } from './components/layout/component';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <Layout>
    <div>
      {headphones.map((headphone) => (
          <Headphone headphone={headphone} />
        ))};
    </div>
    </Layout>
);
 
/* root.render (
  React.createElement ("div", {
    children: headphones.map ((headphone) => (
        <Headphone headphone = {headphone} />
      ))
    })
); */

/*   <button
    id = "myButton"
    onClick = { () => (
      console.log("Hi!")
    )}
  >
    <span>Click</span>
    <span>{name}</span>
  </button>

);

root.render(
  React.createElement ("button", {
    id: "myButton",
    onClick: () => {
      console.log("Hello!");
    },
    children: [
      React.createElement ("span", {children: "Click"}),
      React.createElement ("span", {children: "Me"}),
    ],
  })
); */