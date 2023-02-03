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
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    justifyContent: 'space-between',
    padding: 20
  },
  text:{
    color: 'black',
    fontSize: 20,
  },
  button: {
    justifyContent: 'center',
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    marginVertical:5,
    textColor: 'white',
    marginHorizontal:10,
    borderRadius: 10,
    backgroundColor: '#FFC300'
  },
  buttonConcert: {
  },
  artistContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    padding: 40,

  },
  artistName: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 10
  },
  artistInfo: {
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