import React from 'react';
import { Grommet } from 'grommet';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import Footer from './Footer';
import { theme } from '../../styles/themes';

// GlobalStyles will go here

const Layout = ({ children, history }) => {
  return (
    <>
      <Grommet theme={theme}>
        <Container>
          <NavBar history={history} />
          {children}
          <Footer />
        </Container>
      </Grommet>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  history: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const Container = styled.main`
  width: 100%;
  position: relative;
  .brand-background {
    background: ${props => props.theme.global.colors.brand};
  }
  .status-ok {
    background: ${props => props.theme.global.colors['status-ok']};
  }
`;

export default Layout;
