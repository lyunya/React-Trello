import React from 'react';
import './App.css';
import List from './components/List';
import STORE from './store';

class App extends React.Component {
  state = {
    store: STORE,
  };

  omit = (obj, keyToOmit) => {
    let { [keyToOmit]: _, ...rest } = obj;
    return rest;
  };

  newRandomCard = () => {
    const id =
      Math.random().toString(36).substring(2, 4) +
      Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: "lorem ipsum",
    };
  };

  addRandomCard = (listId) => {
    const randomCard = this.newRandomCard();
    const stateCopy = { ...this.state.store };
    const test = stateCopy.lists.map((item) => {
      if (item.id === listId) {
        console.log(item.cardIds);
        return { ...item, cardIds: [...item.cardIds, randomCard.id] };
      }
      return item;
    });
    stateCopy.allCards[randomCard.id] = randomCard;
    const newAllCards = stateCopy.allCards;
    this.setState({
      store: { lists: test, allCards: newAllCards },
    });

    console.log(stateCopy.allCards, "cant wait to see this work");
  };

  deleteCard = (cardId) => {
    const stateCopy = { ...this.state.store };
    const test = stateCopy.lists.map((item) => {
     
    });
    this.omit(stateCopy.allCards, cardId);
    this.setState({
      store: { lists: test, allCards: newAllCards },
    });

    console.log(stateCopy.allCards, "cant wait to see this work");
  };

  getCards = (cardNums) => {
    let result = [];
    for (let i = 0; i < cardNums.length; i++) {
      const cardId = cardNums[i];
      const card = this.state.store.allCards[cardId];
      result.push(card);
    }

    return result;
  };

  render() {
    const lists = this.state.store.lists.map((item, index) => {
      return (
        <List
          key={index}
          id={item.id}
          header={item.header}
          cards={this.getCards(item.cardIds)}
          handleRandomCard={this.addRandomCard}
        />
      );
    });

    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">{lists}</div>
      </main>
    );
  }
}

export default App;
