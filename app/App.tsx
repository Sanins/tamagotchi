import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './homeScreen/HomeScreen';
import GoogleFit, { Scopes } from 'react-native-google-fit';
import { AppRegistry } from 'react-native';

export default function App() {
// export default class App extends Component {
  useEffect(() => {
    const options = {
      scopes: [
        Scopes.FITNESS_ACTIVITY_READ_WRITE,
        Scopes.FITNESS_BODY_READ_WRITE,
      ],
    }
    GoogleFit.authorize(options)
      .then((res) => {
        console.log('authorized >>>', res)
      })
      .catch((err) => {
        console.log('err >>> ', err)
      });

      // GoogleFit.startRecording((callback) => {
      //   // Process data from Google Fit Recording API (no google fit app needed)
      // });
  });

  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
}

AppRegistry.registerComponent('googleFitExample', () => App);