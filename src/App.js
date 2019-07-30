import React from 'react';
import Gallery from './components/Gallery'
import Article from './components/Article'
// import Hello from './components/Hello'
// import Bye from './components/Bye'

function App() {
  return (
    <div className="App">
      {/* <Hello language="en" name="Bill" />
      <Hello language="zh" name="Michael" />
      <Hello language="zh" name="Amy" />
      <Hello language="en" name="Steven" />

      <Bye language="en" name="Bill" />
      <Bye language="zh" name="Michael" />
      <Bye language="zh" name="Amy" />
      <Bye language="en" name="Steven" /> */}
      <Gallery />
      <Article />
    </div>
  );
}

export default App;
