import React, {useEffect, useState, useCallback} from 'react';
import { useRoute } from '@react-navigation/native';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './styles';
import { editHeroeOnStore } from '../../store/modules/details/actions';
import { TextInput } from 'react-native-gesture-handler';
import { IState } from '../../store/redux';
import { IHeroesData } from '../../store/modules/details/heroesTypes';

interface HeroeDetailData {
    id: number;
    name: string;
    description: string;
    thumbnail: {
      path: string;
      extension: string;
  }
}

const HeroDetailsPage: React.FC = () => {
  const HeroesList = useSelector<IState, IHeroesData[]>(state => state.details.items)
  const route = useRoute()
  const dispatch = useDispatch()
  const [heroeDetail, setHeroeDetail] = useState<HeroeDetailData>({} as HeroeDetailData)
  const [heroeName, setHeroeName] = useState('')
  const [heroeDescription, setHeroeDescription] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  const heroeId = route.params?.id

  useEffect(() => {
    try {
      const findHeroe = HeroesList[0]
      const heroe = findHeroe.find(item => item.id === heroeId)

      setHeroeDetail(heroe)
      setHeroeDescription(heroe.description)
      setHeroeName(heroe.name)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const handleEditHeroeInformation = useCallback(() => {
    const heroe = {
      id: heroeId,
      name: heroeName,
      description: heroeDescription
    }
    dispatch(editHeroeOnStore(heroe))
  }, [heroeId, heroeName, heroeDescription])

  return (
    <View>

        <View key={heroeDetail.name}>
            <Image style={{width: 390, height: 250}}
              source={{uri:
                  `${heroeDetail.thumbnail.path}/landscape_incredible.${heroeDetail.thumbnail.extension}`
                  }}
                />
          <TouchableOpacity
          style={{width: 60, height: 60, backgroundColor: '#fff'}}
          onPress={() => {setIsEditing(!isEditing)}} />
          {(!isEditing) ? (
            <>
              <Text>{heroeDetail.name}</Text>
              <Text>{heroeDetail.description}</Text>
            </>
           ) : (
            <>
              <TextInput
                defaultValue={heroeDetail.name}
                onChangeText={setHeroeName}
                />
                <TextInput
                  multiline
                  defaultValue={heroeDetail.description}
                  onChangeText={setHeroeDescription}
                />
                <TouchableOpacity
                  style={{width: 60, height: 60, backgroundColor: '#fff'}}
                  onPress={handleEditHeroeInformation}
                />
            </>
          )}
        </View>
    </View>
  );
}

export default HeroDetailsPage;