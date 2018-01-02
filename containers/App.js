import React from 'react';
import AnchorTagListItem from './AnchorTagListItem';
import '../styles/general.less';
import '../styles/app.less';

class App extends React.Component {
  render(){
    return (
      <div className="appDiv">
        <img src="../images/Jacob_Vector.png" />
        <p>Software Developer. Improv Person. Just a Guy.</p>
        <ul>
          <AnchorTagListItem link="mailto:jacobestovall@gmail.com" text="Email Me." />
          <AnchorTagListItem link="https://www.linkedin.com/in/jacob-stovall-14b2a093" text="Look at LinkedIn." />
        </ul>
      </div>
    );
  }
}

export default App;
