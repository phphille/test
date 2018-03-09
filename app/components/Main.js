import React from 'react';
import { Link } from 'react-router';
import glamorous from 'glamorous';
import H1 from './styled-components/h-elements/h1';

const Wrapper = glamorous.div({
  maxWidth: '900px',
  margin: '0 auto'
})


class Main extends React.Component {
  render() {
    return (
      <Wrapper>
        <H1>
          <Link to="/">ihiuhiuh</Link>
        </H1>
        {React.cloneElement({...this.props}.children, {...this.props})}
      </Wrapper>
    )
  }
};

export default Main;
