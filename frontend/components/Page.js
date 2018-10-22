import React, {Component} from 'react';
import styled from 'styled-components'
import Header from './Header'
import Meta from './Meta'

const SuckButton = styled.button`
  background: red;
  font-size: ${props => (props.huge ? '75px' : '40px')};
  span.poop {
    font-size: 100px;
  }
`

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <SuckButton huge>
          Fuck Me I'm suck\
          <span className={`poop`}>💩</span>
        </SuckButton>
        <SuckButton>
          Fuck Me I'm fucked\
          <span className={`poop`}>🐔</span>
        </SuckButton>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
