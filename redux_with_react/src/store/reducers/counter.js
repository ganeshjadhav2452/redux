import { action as actions } from '../actions/actions'

const initalState = {
    count: 0
}
const counter = (state = initalState, action) => {

    switch (action.type) {
        case actions.increment:
            return {
                count: state.count + 1
            }

        case actions.decrement:
            return {
                count: state.count - 1
            }
        case actions.custom:
            console.log('custom')
            break;
        default:
            console.log('no any match')
    }
}


export default counter;