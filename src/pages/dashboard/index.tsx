import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, Text, FlatList, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector, connect } from 'react-redux';

import { IState } from '../../store/redux';
import { IHeroesData } from '../../store/modules/details/heroesTypes';

import { Container } from './styles';
import { heroesThunk } from '../../store/thunk/getHeroes';

const Dashboard: React.FC = () => {
  const HeroesList = useSelector<IState, IHeroesData[]>(state => state.details.items)
  const InitialOffSet = useSelector<IState, number>(state => state.details.offSet)
  const [searchValue, setSearchValue] = useState('')
  const [loadingMoreHeroes, setLoadingMoreHeroes] = useState(false)

  const dispatch = useDispatch()
  const { navigate } = useNavigation()

  useEffect(() => {
      dispatch(heroesThunk.getAll(InitialOffSet))
  }, [loadingMoreHeroes])

  return (
    <View>
      <TextInput
        style={{width: 400, height: 100, paddingBottom: 40, marginTop: 100}}
        placeholderTextColor='#f92000'
        placeholder='Find Your Hero' value={searchValue} onChangeText={setSearchValue} >
      </ TextInput>
      <FlatList
        data={HeroesList[0]}
        keyExtractor={(heroe) => String(heroe.id)}
        onEndReached={() => setLoadingMoreHeroes(!loadingMoreHeroes)}
        onEndReachedThreshold={0.1}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigate('heroDetailsPage', {id: item.id})}
          >
            <Image style={{width: 200, height: 200}}source={{uri:
              `${item.thumbnail.path}/standard_fantastic.${item.thumbnail.extension}`
            }}/>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default Dashboard;