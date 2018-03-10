import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>
          <Link to="/">ihiuhiuh</Link>
        </h1>
        {/*React.cloneElement({...this.props}.children, {...this.props})*/}
      </div>
    )
  }
};

export default Main;
