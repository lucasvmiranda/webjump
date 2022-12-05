import React, {useState, useEffect} from 'react';
import {Image, ActivityIndicator} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';
import {
  Container,
  Content,
  Header,
  AreaImage,
  AreaInfo,
  AreaAvatar,
  NamePokemon,
  IdArea,
  IdText,
  PowerArea,
  PowerItemText,
  PowerItem,
  AreaDescription,
  Description,
  AreaFeatures,
  ItemFeature,
  TitleFeature,
  BoxFeature,
  TextBoxFeature,
  AreaList,
  AreaLine,
  ProgressBarArea,
  TextLine,
} from './styles';

export function Item() {
  const route = useRoute();
  const {item} = route.params;
  const baseURL = item?.url;

  const [pokemons, setPokemons] = useState(null);
  const [pokemonDescription, setPokemonDescription] = useState(null);
  const [bestMove, setBestMove] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios.get(baseURL).then(response => {
      ShowName(response);
      setPokemons(response);
      setIsLoading(false);
    });
  }, []);

  let tempMoveValue = 0;

  const ShowName = response => {
    response?.data?.moves?.forEach(m => {
      if (m.version_group_details.length > tempMoveValue) {
        setBestMove(m.move.name);
        tempMoveValue = m.version_group_details.length;
      }
    });
  };

  useEffect(() => {
    axios.get(pokemons?.data?.species?.url).then(response => {
      setPokemonDescription(
        response?.data?.flavor_text_entries[0]?.flavor_text.replaceAll(
          '\n',
          ' ',
        ),
      );
    });
  }, [pokemons]);

  return (
    <Container>
      {isLoading ? (
        <Content style={{padding: '50%'}}>
          <ActivityIndicator size="large" color="#21386e" />
        </Content>
      ) : (
        <Content>
          <Header>
            <AreaAvatar>
              <AreaImage>
                <Image
                  style={{width: 150, height: 150}}
                  source={{uri: pokemons?.data?.sprites?.front_default}}
                />
              </AreaImage>
            </AreaAvatar>
            <AreaInfo>
              <IdArea>
                <IdText>#{pokemons?.data?.id}</IdText>
              </IdArea>
              <NamePokemon>{item?.name}</NamePokemon>
              <PowerArea>
                <PowerItem>
                  <PowerItemText>
                    {pokemons?.data?.types[0]?.type?.name}
                  </PowerItemText>
                </PowerItem>
                {pokemons?.data?.types[1]?.type?.name ? (
                  <PowerItem>
                    <PowerItemText>
                      {pokemons?.data?.types[1]?.type?.name}
                    </PowerItemText>
                  </PowerItem>
                ) : (
                  <></>
                )}
              </PowerArea>
            </AreaInfo>
          </Header>
          <AreaDescription>
            <Description>{pokemonDescription}</Description>
          </AreaDescription>
          <AreaFeatures>
            <ItemFeature>
              <TitleFeature>Weight:</TitleFeature>
              <BoxFeature>
                <TextBoxFeature>
                  {pokemons?.data?.weight / 10} kg
                </TextBoxFeature>
              </BoxFeature>
            </ItemFeature>

            <ItemFeature>
              <TitleFeature>Height:</TitleFeature>
              <BoxFeature>
                <TextBoxFeature>{pokemons?.data?.height / 10} m</TextBoxFeature>
              </BoxFeature>
            </ItemFeature>

            <ItemFeature>
              <TitleFeature>Major Move:</TitleFeature>
              <BoxFeature>
                <TextBoxFeature>{bestMove}</TextBoxFeature>
              </BoxFeature>
            </ItemFeature>
          </AreaFeatures>
          <AreaList>
            {/* <AreaLine>
              <TextLine>Gender</TextLine>
              <ProgressBarArea>
                <TextLine style={{marginRight: 5}}>45</TextLine>
                <ProgressBar
                  style={{borderRadius: 25}}
                  progress={65}
                  width={100}
                  color="red"
                />
              </ProgressBarArea>
            </AreaLine> */}
            <AreaLine>
              <TextLine>HP</TextLine>
              <ProgressBarArea>
                <TextLine style={{marginRight: 5}}>
                  {pokemons?.data?.stats[0].base_stat}
                </TextLine>
                <ProgressBar
                  style={{borderRadius: 25}}
                  progress={pokemons?.data?.stats[0].base_stat / 100}
                  width={100}
                  color={
                    pokemons?.data?.stats[0].base_stat > 50
                      ? '#45C0A3'
                      : '#E63950'
                  }
                />
              </ProgressBarArea>
            </AreaLine>
            <AreaLine>
              <TextLine>Attack</TextLine>
              <ProgressBarArea>
                <TextLine style={{marginRight: 5}}>
                  {pokemons?.data?.stats[1].base_stat}
                </TextLine>
                <ProgressBar
                  progress={pokemons?.data?.stats[1].base_stat / 100}
                  width={100}
                  color={
                    pokemons?.data?.stats[1].base_stat > 50
                      ? '#45C0A3'
                      : '#E63950'
                  }
                />
              </ProgressBarArea>
            </AreaLine>
            <AreaLine>
              <TextLine>Defense</TextLine>
              <ProgressBarArea>
                <TextLine style={{marginRight: 5}}>
                  {pokemons?.data?.stats[2].base_stat}
                </TextLine>
                <ProgressBar
                  style={{borderRadius: 25}}
                  progress={pokemons?.data?.stats[2].base_stat / 100}
                  width={100}
                  color={
                    pokemons?.data?.stats[2].base_stat > 50
                      ? '#45C0A3'
                      : '#E63950'
                  }
                />
              </ProgressBarArea>
            </AreaLine>
            <AreaLine>
              <TextLine>Special Attack</TextLine>
              <ProgressBarArea>
                <TextLine style={{marginRight: 5}}>
                  {pokemons?.data?.stats[3].base_stat}
                </TextLine>
                <ProgressBar
                  style={{borderRadius: 25}}
                  progress={pokemons?.data?.stats[3].base_stat / 100}
                  width={100}
                  color={
                    pokemons?.data?.stats[3].base_stat > 50
                      ? '#45C0A3'
                      : '#E63950'
                  }
                />
              </ProgressBarArea>
            </AreaLine>
            <AreaLine>
              <TextLine>Special Defense</TextLine>
              <ProgressBarArea>
                <TextLine style={{marginRight: 5}}>
                  {pokemons?.data?.stats[4].base_stat}
                </TextLine>
                <ProgressBar
                  style={{borderRadius: 25}}
                  progress={pokemons?.data?.stats[4].base_stat / 100}
                  width={100}
                  color={
                    pokemons?.data?.stats[4].base_stat > 50
                      ? '#45C0A3'
                      : '#E63950'
                  }
                />
              </ProgressBarArea>
            </AreaLine>
            <AreaLine>
              <TextLine>Speed</TextLine>
              <ProgressBarArea>
                <TextLine style={{marginRight: 5}}>
                  {pokemons?.data?.stats[5].base_stat}
                </TextLine>
                <ProgressBar
                  style={{borderRadius: 25}}
                  progress={pokemons?.data?.stats[5].base_stat / 100}
                  width={100}
                  color={
                    pokemons?.data?.stats[5].base_stat > 50
                      ? '#45C0A3'
                      : '#E63950'
                  }
                />
              </ProgressBarArea>
            </AreaLine>
            <AreaLine>
              <TextLine>Total</TextLine>
              <ProgressBarArea>
                <TextLine style={{marginRight: 5}}>
                  {pokemons?.data?.stats[0].base_stat +
                    pokemons?.data?.stats[1].base_stat +
                    pokemons?.data?.stats[2].base_stat +
                    pokemons?.data?.stats[3].base_stat +
                    pokemons?.data?.stats[4].base_stat +
                    pokemons?.data?.stats[5].base_stat}
                </TextLine>
                <ProgressBar
                  style={{borderRadius: 25}}
                  progress={65}
                  width={100}
                  color="#53E37E"
                />
              </ProgressBarArea>
            </AreaLine>
          </AreaList>
        </Content>
      )}
    </Container>
  );
}
