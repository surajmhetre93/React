import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Hello} from './components/Hello'
import Welcome from  './components/Welcome'
import Message from './components/Message'
import Count from './components/Count'
import FunctionClick from './components/FucntionClick'
import ClassClick from './components/ClassClick'
import StyleSheet from './components/StyleSheet'
import Inline from './components/Inline'
import styles from './mystyle.module.css'
import LifeCycle from './components/Lifecycle'

function App() {
  return (
    <div className="App">
      <h1>Hello React!!</h1>
      <Hello name="Suraj" training="Python">
        <h2>Children Component</h2>
      </Hello>
      <Welcome name="Siddharth" training="java">
        <button>Action</button>
      </Welcome>
      <Message />
      <Count />
      <FunctionClick />
      <ClassClick />
      <StyleSheet />
      <Inline />
      <h1 className={styles.success}>I am using css module</h1>
      <LifeCycle favcolor = "yellow"/>
    </div>
  );
}

export default App;
