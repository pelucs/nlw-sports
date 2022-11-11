import { useEffect, useState } from 'react';
import { styles } from './styles';
import { Image, FlatList } from 'react-native';
import { Heading } from '../../components/heading';
import { GameCard, GameCardProps } from '../../components/gamecard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'

import logo from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/background';

export function Home() {

  const [game, setGame] = useState<GameCardProps[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('http://192.168.0.28:3333/games')
    .then(res => res.json())
    .then(data => setGame(data))
  }, []);

  const handleOpenGame = ({ id, bannerUrl, title }: GameCardProps) => {
    navigation.navigate('game', { id, bannerUrl, title });
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
          source={logo}
          style={styles.logo}
        />

        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList 
          data={game}
          horizontal
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item } ) => (
            <GameCard
              data={item}
              onPress={() => handleOpenGame(item)}
            />
          )}
        />
      </SafeAreaView>
    </Background>
  );
}