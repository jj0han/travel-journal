import React from 'react'
import Header from './components/Header.js'
import Card from './components/Card.js'
import data from './data.js'
import './App.css'

export default function App() {
  const cards = data.map((card) => {
    console.log(card)
    return <Card
      key={card.id}
      item={card}
    />
  })
  return (
    <>
      <Header/>
      {cards}
    </>
  )
}