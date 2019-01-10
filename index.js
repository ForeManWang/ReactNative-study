// 从 Reactnative 的包中，导入 AppRegistry 组件，它的作用，就是注册项目首页的
import { AppRegistry } from 'react-native';

import App from './App';

// 导入自己的组件页面
import MyHomePage from './MyHomePage.js'

// 当使用 AppRegistry 注册项目的时候，方法中的第一个参数，不要改，否则项目就废了
// 第二个参数，表示要把哪个页面注册为项目的首页
AppRegistry.registerComponent('rn_douban', () => App);