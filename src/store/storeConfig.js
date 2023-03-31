import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
    numeros: function (state, action) {
        return {
            min: 1,
            max: 10
        }
    },
    nomes: function (state, action) {
        return [
            'ana',
            'bia',
            'carlos'
        ]
    }
})

function configStore() {
    return createStore(reducers)
}

export default configStore;