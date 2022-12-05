import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';
import axios from 'axios';
import {
  Container,
  IdArea,
  IdText,
  AreaImage,
  NamePokemon,
  PowerItem,
  PowerArea,
  PowerItemText,
} from './styles';

export function Cards({data}) {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    axios.get(data?.url).then(response => {
      setPokemonDetails(response);
    });
  }, []);

  return (
    <Container>
      <IdArea>
        <IdText>#{pokemonDetails?.data?.id}</IdText>
      </IdArea>
      <AreaImage>
        <Image
          style={{width: 150, height: 150, resizeMode: 'contain'}}
          source={{uri: pokemonDetails?.data?.sprites?.front_default}}
        />
      </AreaImage>
      <NamePokemon>{data?.name}</NamePokemon>
      <PowerArea>
        <PowerItem>
          <PowerItemText>
            {pokemonDetails?.data?.types[0]?.type?.name}
          </PowerItemText>
        </PowerItem>
        {pokemonDetails?.data?.types[1]?.type?.name ? (
          <PowerItem>
            <PowerItemText>
              {pokemonDetails?.data?.types[1]?.type?.name}
            </PowerItemText>
          </PowerItem>
        ) : (
          <></>
        )}
      </PowerArea>
    </Container>
  );
}
