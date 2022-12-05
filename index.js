import {AppRegistry} from 'react-native';
import App from './App';

import {name as appName} from './app.json';

import Routes from './src/routes/index.js';

AppRegistry.registerComponent(appName, () => Routes);
