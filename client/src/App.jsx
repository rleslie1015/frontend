import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grommet } from 'grommet';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PrivateRoute from './auth/PrivateRoute';
import { useAuth0 } from './auth/authWrapper';
import { theme } from './styles/themes';
import Loading from './components/Layout/Loading';
import Dashboard from './components/Dashboard/SchoolDashboard';
import Onboard from './components/Dashboard/Onboard';
import SchoolDetailsForm from './components/Dashboard/Onboard/SchoolDetailsForm';
import Landing from './components/Landing';
import CredentialForm from './components/Dashboard/CredentialsForm';
import ErrorPage from './components/ErrorPage';
import GlobalStyle from './styles';

import Layout from './components/Layout';

function App(props) {
  const { loading } = useAuth0();
  console.log(loading);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Grommet theme={theme}>
          <Layout {...props}>
            <Switch>
              <Route exact path="/" component={Landing} />
              <PrivateRoute
                path="/onboarding/school"
                component={SchoolDetailsForm}
              />
              <PrivateRoute exact path="/onboarding" component={Onboard} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                path="/dashboard/credForm"
                component={CredentialForm}
              />
              {/* Error route */}
              <Route component={ErrorPage} />
            </Switch>
            <ToastContainer />
          </Layout>
          <GlobalStyle />
        </Grommet>
      )}
    </>
  );
}

export default App;
