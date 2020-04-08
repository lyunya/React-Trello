import React from 'react';
import './App.css';
import List from './components/List';

function App(props) {
  const lists = props.store.lists.map((item, index) =>{
  return <List key = {index} header = {item.header} cards = {getCards(item.cardIds)}/>
  })
  function getCards(cardNums){
    let result = [];
      for(let i= 0; i < cardNums.length; i++){
         const cardId = cardNums[i];
         const card = props.store.allCards[cardId];
         result.push(card);
         console.log(result, 'leon');
      }
      
    return result;
  }

  return (
    <main className="App">
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">
      {lists}
    </div>
    </main>
  );
}

export default App;
