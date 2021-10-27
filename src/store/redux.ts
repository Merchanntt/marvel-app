import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { persistStore , persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { IHeroesState } from './modules/details/heroesTypes'
import rootReducers from './modules/rootReducers'

export interface IState {
  details: IHeroesState
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(store)


export { store, persistor };