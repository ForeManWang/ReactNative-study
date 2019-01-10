/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// 导入 React 基础包，这个包，作用是创建 组件
import React, { Component } from 'react';

// 从 react-native 中导入系统开发需要的包
import {
  Platform, // 用来提供平台检测功能的
  StyleSheet, // 样式相关的组件，专门用来创建样式的
  Text, // 文本节点，所有文本必须放到这个里面
  View, // 用来布局的，相当于 div
  TextInput, // 文本框组件
  Image, // 图片组件
  Button, // 按钮组件
  ActivityIndicator, // 加载中的 loading 效果小圆圈
  ScrollView, // 滚动组件（默认，如果一个RN的页面非常长，超出了屏幕高度，这时候，不会像网页中那样自动提供滚动条，如果需要让页面实现滚动的话，需要使用 ScrollView 把页面包裹起来）
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// 这是 TS（TypeScript） 的语法
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* 如果使用 animating 隐藏 loading效果，只是让他不可见了，但是区域还在 */}
        <ScrollView style={{width: '100%'}}>
          <ActivityIndicator color="red" size="large" animating={true}></ActivityIndicator>
          <Text style={styles.welcome}>
            Welcome to React Native!
        </Text>
          <Text style={styles.instructions}>
            To get started, edit App.js
        </Text>
          <Text style={styles.instructions}>
            {instructions}
          </Text>
          <TextInput style={styles.inputStyle} defaultValue="哈哈，今天总有人在后面说话" secureTextEntry={true}></TextInput>

          {/* 引入本地的图片资源 */}
          <Image source={require('./images/1.jpg')}></Image>
          <Image source={require('./images/1.jpg')}></Image>
          <Image source={require('./images/1.jpg')}></Image>
          <Image source={require('./images/1.jpg')}></Image>

          {/* 引入网络中的图片资源，除了要指定 一个 uri 资源路径之外，还需要 为这张网络图片，指定宽和高，否则显示不出来； */}
          <Image source={{ uri: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=358796479,4085336161&fm=200&gp=0.jpg' }} style={{ width: 200, height: 160 }}></Image>

          {/* 在 Button 按钮中， title 属性 和 onPress 属性是必须的 */}
          {/* onPress 表示点击按钮，要触发的操作 */}
          <Button title="这是一个按钮" onPress={() => { console.warn('123') }}></Button>

        </ScrollView>
      </View>
    );
  }
}

// 使用 StyleSheet.create 创建样式表对象，可以为 create 传递 一个配置对象，这个对象，就是要创建的样式
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // 在RN中，主轴默认是纵向的
    justifyContent: 'flex-start', // 一些 文本类型的 样式值，需要使用 引号包裹起来
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20, // 长度单位的 px 值可以省略，因为 RN 默认就是以 px 作为单位的
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inputStyle: {
    width: '100%'
  }
});



// 总结：如果要定义一个基本的 RN 页面：需要的步骤：
// 1. 导入 react 包，来创建组件
// 2. 导入 react-native 包，来提供基础的开发组件
// 3. 从 react-naitve 中，可以导入 StyleSheet 的组件，用它 的 create 方法，可以创建样式对象
// 4. 使用 react 基础的语法，创建出来的组件，就是一个 合法的 RN 组件页面；如果想要在页面中，放置一些合法的 页面元素，只能使用 RN 库提供的 固有组件；不能使用 网页中的 任何 元素；