import React, {useState, useEffect} from 'react';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {Cards} from '../../components/cards';

import axios from 'axios';

import {
  Title,
  Container,
  Content,
  InputSearch,
  AreaInput,
  AreaCards,
  AreaInputSearch,
} from './styles';

const baseURL = 'https://pokeapi.co/api/v2/pokemon?limit=260&offset=0';

export function Home({navigation}) {
  const [pokemons, setPokemons] = useState(null);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (search === '') {
      axios.get(baseURL).then(response => {
        setPokemons(response.data);
        setIsLoading(false);
      });
    } else {
      axios.get(baseURL + search).then(response => {
        setPokemons(response.data);
      });
    }
  }, [search]);

  console.warn('pobaseURL + searchke', baseURL + search);

  return (
    <Container>
      {isLoading ? (
        <Content>
          <ActivityIndicator size="large" color="#21386e" />
        </Content>
      ) : (
        <Content>
          <Title>More than 250 Pokemons for you to choose your favorite</Title>
          <AreaInput>
            <AreaInputSearch>
              <Icon2 name="search1" size={20} color="#3663AD" />
              <InputSearch
                placeholder="Seach Pokémon"
                value={search}
                onChangeText={setSearch}
              />
              <Icon name="arrow-right-circle" size={30} color="#3663AD" />
            </AreaInputSearch>
          </AreaInput>

          <AreaCards>
            {pokemons?.results?.map(item => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Item', {item: item});
                }}>
                <Cards data={item} />
              </TouchableOpacity>
            ))}
          </AreaCards>
        </Content>
      )}
    </Container>
  );
}
