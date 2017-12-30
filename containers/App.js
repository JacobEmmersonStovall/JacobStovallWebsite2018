import React from 'react';
import AnchorTagListItem from './AnchorTagListItem'

class App extends React.Component {
  render(){
    return (
      <div>
        <p>This is my new website I will build overtime.</p>
        <ul>
          <AnchorTagListItem link="mailto:jacobestovall@gmail.com" text="Email Me." />
          <AnchorTagListItem link="mailto:jacobestovall@gmail.com" text="Look at LinkedIn." />
        </ul>
      </div>
    );
  }
}

export default App;
