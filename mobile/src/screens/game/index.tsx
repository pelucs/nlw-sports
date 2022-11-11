import { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, FlatList, Text } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/background';
import { useNavigation, useRoute } from '@react-navigation/native';
import { GameParams } from '../../@types/navigation';
import { Entypo } from '@expo/vector-icons';
import { THEME } from '../../theme';
import { Heading } from '../../components/heading';
import { DuoCard, DuoCardProps } from '../../components/duocard';

import logo from '../../assets/logo-nlw-esports.png';

export function Game() {

  const [duo, setDuo] = useState<DuoCardProps[]>([]);

  const route = useRoute();
  const game = route.params as GameParams;
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  }

  useEffect(() => {
    fetch(`http://192.168.0.28:3333/games/${game.id}/ads`)
    .then(res => res.json())
    .then(data => setDuo(data))
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity 
            activeOpacity={0.5}
            onPress={handleGoBack}
          >
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image 
            style={styles.logo}
            source={logo}
          />

          <View style={styles.right}/>
        </View>

        <Image
          style={styles.cover}
          source={{ uri: game.bannerUrl }}
          resizeMode="cover"
        />

        <Heading
          title={game.title}
          subtitle="Conecte-se e comece a jogar!"
        />

        <FlatList
          data={duo}
          horizontal
          contentContainerStyle={[ duo.length > 0 ? styles.listAds : styles.emptyContent ]}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DuoCard 
              data={item} 
              onConnect={() => {}}
            />
          )}
          ListEmptyComponent={() => (
            <Text style={styles.title}>
              Não há anúncios publicados ainda.
            </Text>
          )}
        />

      </SafeAreaView>
    </Background>
  );
}