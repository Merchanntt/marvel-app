import AsyncStorage from "@react-native-async-storage/async-storage"
import api from "../../services/api"
import { addHeroesToStore } from "../modules/details/actions"
import { IHeroesData } from "../modules/details/heroesTypes"

const heroesThunk = {
    getAll: (offSet: number) => async dispatch => {
      api.get(`characters?limit=20&offset=${offSet}`, {
      }).then(response => {
        const heroesList = response.data.data.results.map((item: IHeroesData) => ({
          id: item.id,
          name: item.name,
          description: item.description,
          thumbnail: {
            path: item.thumbnail.path,
            extension: item.thumbnail.extension
          }
        }))
        dispatch(addHeroesToStore(heroesList, offSet))
      })
  }
}

export {heroesThunk}