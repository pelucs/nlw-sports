import { LinearGradient } from 'expo-linear-gradient';
import { THEME } from '../../theme';
import { styles } from './styles';
import { 
  Text, 
  TouchableOpacity, 
  TouchableOpacityProps, 
  ImageBackground,  
} from 'react-native';

export interface GameCardProps {
  id: string;
  title: string;
  _count: {
    ads: number;
  };
  bannerUrl: string;
}

interface Props extends TouchableOpacityProps{
  data: GameCardProps;
}

export function GameCard({ data, ...rest }: Props) {

  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container} {...rest}>
      <ImageBackground 
        source={{ uri: data.bannerUrl }}
        style={styles.cover}
      >
        <LinearGradient
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >
          <Text style={styles.name}>
            {data.title}
          </Text>

          <Text style={styles.ads}>
            {data._count.ads} anúncios
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}