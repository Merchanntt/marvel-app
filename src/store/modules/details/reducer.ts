import { Reducer } from "redux";
import { produce } from 'immer'
import { IHeroesData, IHeroesState } from './heroesTypes'

const INITIAL_STATE: IHeroesState = {
  items: [],
  offSet: 0
}

const Heroes: Reducer<IHeroesState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_HEROES_TO_STORE': {
        const { heroe, offSet } = action.payload;

          draft.items.push(heroe)
          draft.offSet = offSet + 20
        break
      };

      case 'EDIT_HEROE_ON_STORE': {
        const { heroe } = action.payload;
          const findHeroe = draft.items.indexOf(item => item.id === heroe.id)
            console.log(findHeroe)
          // draft.items[findHeroe].name = heroe.name
          // draft.items[findHeroe].description = heroe.description
        break
      };

      default: {
        return draft;
      };
    }
  })
}

export default Heroes