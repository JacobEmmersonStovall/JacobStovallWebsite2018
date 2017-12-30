import React from 'react';
import AnchorTagListItem from './AnchorTagListItem'

class App extends React.Component {
  render(){
    return (
      <div>
        <p>This is my new website</p>
        <ul>
          <AnchorTagListItem link="https://www.google.com" text="Google" />
        </ul>
      </div>
    );
  }
}

export default App;
