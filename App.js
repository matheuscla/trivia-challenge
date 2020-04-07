import * as React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';

import store from './src/store';

if (__DEV__) {
  import('./src/config/ReactotronConfig');
}

export default function App() {
  return (
    <Provider store={store}>
      <Text>Teste</Text>
    </Provider>
  );
}
