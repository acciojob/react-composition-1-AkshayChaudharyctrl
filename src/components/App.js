
import React from "react";
import Tabs from "./../Tabs";
import './../styles/App.css';

const App = () => {
  const tabs = [
    { title: 'Tab 1', content: 'This is the content for Tab 1.' },
    { title: 'Tab 2', content: 'This is the content for Tab 2.' },
    { title: 'Tab 3', content: 'This is the content for Tab 3.' },
  ];

  return (
    <div>
      <h1>Tabs Example</h1>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;
