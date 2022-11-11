import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    marginTop: 28
  },
  logo: {
    width: 72,
    height: 40
  },
  right: {
    width: 5,
    height: 5
  },
  cover: {
    width: 350,
    height: 160,
    borderRadius: 8,
    marginTop: 32
  },
  listAds: {
    paddingRight: 64
  },
  emptyContent: {
    flex: 1,
    height: 400,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.CAPTION_500
  }
});