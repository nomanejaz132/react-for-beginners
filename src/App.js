import React from 'react';
import FunctionalComponent from './components/FunctionalComponent';
import ArrowFunctionalComponent from './components/ArrowFunctionalComponent';
import ClassComponent from './components/ClassComponent';
import PropsInFunctionalComponent from './components/PropsInFunctionalComponent';
import PropsInClassComponent from './components/PropsInClassComponent';
import StateInClassComponent from './components/StateInClassComponent';
import SetStateInClassComponent from './components/SetStateInClassComponent';
import DestructuringPropsInFunctionalComponentI from './components/DestructuringPropsInFunctionalComponentI';
import DestructuringPropsInFunctionalComponentII from './components/DestructuringPropsInFunctionalComponentII';
import DestructuringPropsInClassComponent from './components/DestructuringPropsInClassComponent';
import EventHandlingInFunctionalComponent from './components/EventHandlingInFunctionalComponent';
import EventHandlingInClassComponent from './components/EventHandlingInClassComponent';
import BindingEventHandlerInRender from './components/BindingEventHandlerInRender';
import BindingEventHandlerInRenderUsingArrowFunction from './components/BindingEventHandlerInRenderUsingArrowFunction';
import BindingEventHandlerInConstructor from './components/BindingEventHandlerInConstructor';
import BindingEventHandlerUsingArrowFunctionAsClassProperty from './components/BindingEventHandlerUsingArrowFunctionAsClassProperty';





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
      <DestructuringPropsInFunctionalComponentII value="Value" />
      <DestructuringPropsInClassComponent value="Value"/>
      <EventHandlingInFunctionalComponent />
      <EventHandlingInClassComponent />
      <BindingEventHandlerInRender />
      <BindingEventHandlerInRenderUsingArrowFunction />
      <BindingEventHandlerInConstructor />
      <BindingEventHandlerUsingArrowFunctionAsClassProperty />
    </div>
  );
}

export default App;
