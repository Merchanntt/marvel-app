import { IHeroesData } from "./heroesTypes";

interface IHeroEditData {
  id: number;
  name: string;
  description: string;
}

export function addHeroesToStore(heroe: IHeroesData[], offSet: number) {
  return {
    type: 'ADD_HEROES_TO_STORE',
    payload: {
      heroe,
      offSet
    }
  }
}

export function editHeroeOnStore(heroe: IHeroEditData) {
  return {
    type: 'EDIT_HEROE_ON_STORE',
    payload: {
      heroe
    }
  }
}