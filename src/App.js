import React from 'react';
import FunctionalComponent from './components/FunctionalComponent';
import ArrowFunctionalComponent from './components/ArrowFunctionalComponent';
import ClassComponent from './components/ClassComponent';
import PropsInFunctionalComponent from './components/PropsInFunctionalComponent';
import PropsInClassComponent from './components/PropsInClassComponent';
import StateInClassComponent from './components/StateInClassComponent';
import SetStateInClassComponent from './components/SetStateInClassComponent';
import DestructuringPropsInFunctionalComponentI from './components/DestructuringPropsInFunctionalComponentI';





function App() {
  return (
    <div className="App">
      <FunctionalComponent />
      <ArrowFunctionalComponent />
      <ClassComponent />
      <PropsInFunctionalComponent value="This Value is from Props in Functional Component."/>
      <PropsInClassComponent value="This Value is from Props in Class Component." />
      <StateInClassComponent />
      <SetStateInClassComponent />
      <DestructuringPropsInFunctionalComponentI value="Value" />
    </div>
  );
}

export default App;
