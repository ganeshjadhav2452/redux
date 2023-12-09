import logo from './logo.svg';
import './App.css';
import store from './store';
import { useState } from 'react';
import { action } from './store/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const dispatch = useDispatch()
  const { count } = useSelector((state) => state)
  const [storeState, setStoreState] = useState(0)

  const getUpdatedState = () => {

    const state = store.getState()
    setStoreState(state.count)

  }

  store.subscribe(getUpdatedState)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Counter <h1> {count}</h1> and save to reload.

        </p>
        <div style={{ display: 'flex' }}>
          <button onClick={() => store.dispatch({ type: action.increment })} style={{ width: '10rem', height: '3rem', borderRadius: '25px', backgroundColor: 'green', color: 'white' }}>+</button>
          <button onClick={() => store.dispatch({ type: action.decrement })} style={{ width: '10rem', height: '3rem', borderRadius: '25px', backgroundColor: 'red', color: 'white' }}>-</button>
        </div>
      </header>
    </div>
  );
}

export default App;
