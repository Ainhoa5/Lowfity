import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 50
  },
  headerTitle: {
    color: '#fff',
    fontSize: 40,
  },
  headerConcert: {
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: 20,
    paddingTop: 50
  },
  headerTitleConcert: {
    color: '#fff',
    fontSize: 40,
  },

  albumContainer: {
    marginVertical: 10,
    padding: 40,

  },
  albumName: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  albumInfo: {
    fontSize: 20,
    marginVertical: 5
  },
  title: {
    fontSize: 80,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 50
  }
});