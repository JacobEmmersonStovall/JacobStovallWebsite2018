import React from 'react';
import AnchorTagListItem from './AnchorTagListItem';
import '../styles/app.less';

class App extends React.Component {
  render(){
    return (
      <div className="appDiv">
        <p>This is my new website I will build overtime.</p>
        <ul>
          <AnchorTagListItem link="mailto:jacobestovall@gmail.com" text="Email Me." />
          <AnchorTagListItem link="https://www.linkedin.com/in/jacob-stovall-14b2a093" text="Look at LinkedIn." />
        </ul>
      </div>
    );
  }
}

export default App;
