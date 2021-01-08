import React from 'react';
import FunctionalComponent from './components/FunctionalComponent';
import ArrowFunctionalComponent from './components/ArrowFunctionalComponent';
import ClassComponent from './components/ClassComponent';
import PropsInFunctionalComponent from './components/PropsInFunctionalComponent';



function App() {
  return (
    <div className="App">
      <FunctionalComponent />
      <ArrowFunctionalComponent />
      <ClassComponent />
      <PropsInFunctionalComponent value="This Value is from Props"/>
    </div>
  );
}

export default App;
