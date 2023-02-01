import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    artistContainer: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    },
    artistImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
    },
    artistName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    },
    artistAge: {
    fontSize: 16,
    marginBottom: 5,
    },
    artistFollowers: {
    fontSize: 16,
    marginBottom: 5,
    },
    albumContainer: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    },
    albumImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
    },
    albumName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    },
    albumDescription: {
    fontSize: 16,
    marginBottom: 5,
    },
    albumReleaseDate: {
    fontSize: 16,
    marginBottom: 5,
    },
    albumPlays: {
    fontSize: 16,
    marginBottom: 5,
    },
});
const styles2 = {
    text: {
      color: 'white'
    },
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C70039',
        padding: 10
      },
      buttonContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E1D1D1',
        borderRadius: 10,
        justifyContent: 'space-between',
        padding: 20
      },
      button: {
        padding:20,
        width: 110,
        alignItems: 'center',
        height: 60,
        marginVertical:5,
        marginHorizontal:10,
        borderRadius: 10,
        backgroundColor: '#765763'
      },
      artistContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        padding: 40,
  
      },
      selectedArtistContainer: {
          backgroundColor: '#765763'
      },
      image: {
        width: 120,
        height: 120,
        borderRadius: 75
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
    };
    const styles3 = {
        albumContainer: {
          alignItems: 'center',
          margin: 10,
        },
        albumImage: {
          width: '100%',
          height: 200,
          borderRadius: 10,
        },
        albumName: {
          fontWeight: 'bold',
          fontSize: 20,
          marginTop: 10,
        },
        albumInfo: {
          color: 'gray',
          marginTop: 5,
        },
      };