export interface IHeroesData {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  }
}

export interface IHeroesState {
  items: IHeroesData[];
  offSet: number;
}