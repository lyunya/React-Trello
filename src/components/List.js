import React from 'react';
import Card from './Card'
import './List.css'

export default function List(props){
    const cards = props.cards.map((item, i) => {
        return <Card key = {i} title={item.title} content={item.content} />
    }
        )
    return (
      <section className="List">
        <header className="List-header">
          <h2>{props.header}</h2>
        </header>
        <div className="List-cards">
          {cards}
          <button
            type="button"
            className="List-add-button"
            onClick={() => props.handleRandomCard(props.id)}
          >
            + Add Random Card
          </button>
        </div>
      </section>
    );
}

