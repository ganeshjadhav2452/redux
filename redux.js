const redux = require('redux')

let initalState = {
    count: 0
}
const counterReducer = (state = initalState, action) => {
    // reducer should be plain functions
    if (action.type === 'increment') {
        return {
            ...state,
            count: state.count + 1
        }
    }

    if (action.type == 'decrement') {
        return {
            ...state,
            count: state.count - 1
        }
    }

    if (action.type == 'custom') {
        return {
            ...state,
            count: state.count + action.payload
        }
    }

    return state
}

const store = redux.createStore(counterReducer);

console.log(initalState)
const getUpdatedState = () => {
    const updatedState = store.getState()
    console.log(updatedState)
}

store.subscribe(getUpdatedState)

store.dispatch({ type: 'increment' })
store.dispatch({ type: 'increment' })
store.dispatch({ type: 'decrement' })
store.dispatch({ type: 'custom', payload: 10 })