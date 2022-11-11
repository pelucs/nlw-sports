import { View, TouchableOpacity, Text } from 'react-native';
import { DuoInfo } from '../duoinfo';
import { styles } from './styles';

import { THEME } from '../../theme';
import { Ionicons } from '@expo/vector-icons';

export interface DuoCardProps{
  hourEnd: string;
  hourStart: string;
  id: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

interface Props {
  data: DuoCardProps;
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo 
        label={"Nome"}
        value={data.name}
      />

      <DuoInfo 
        label={"Tempo de jogo"}
        value={`${data.yearsPlaying} ano(s)`}
      />

      <DuoInfo 
        label={"Disponibilidade"}
        value={`${data.weekDays.length} dia(s) \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />

      <DuoInfo 
        label={"Chamada de áudio"}
        value={data.useVoiceChannel ? "Sim" : "Não"}
        colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.5}
        onPress={onConnect}
      >
        <Ionicons
          name='ios-game-controller-outline'
          size={20}
          color={THEME.COLORS.TEXT}
        />

        <Text style={styles.text}>
          Conectar
        </Text>
      </TouchableOpacity>

    </View>
  );
}