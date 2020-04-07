import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import { NativeModules } from 'react-native';

let tron;

if (__DEV__) {
  tron = Reactotron.configure({
    name: 'Trivia',
    host: NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0],
  })
    .use(reactotronRedux())
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
}

export default tron;
