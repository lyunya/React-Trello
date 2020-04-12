import React from 'react';
import './App.css';
import List from './components/List';
import STORE from './store';

class App extends React.Component {
  state = {
    store: STORE,
  };
  
  getCards = (cardNums) => {
    let result = [];
        for (let i = 0; i < cardNums.length; i++) {
          const cardId = cardNums[i];
          const card = this.state.store.allCards[cardId];
          result.push(card);
        }

        return result;
  };;

  render() {
    const lists = this.state.store.lists.map((item, index) => {
      return (
        <List key={index} header={item.header} cards={this.getCards(item.cardIds)} />
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
