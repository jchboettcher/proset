import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import LevelPage from './containers/LevelPage'
import Leaderboard from './containers/Leaderboard'

const App = () => (
  <Router basename="/proset" >
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <div className="App">
          <Switch>
            <Route
              exact path={`/:level(4|5|6|7|8|9)`}
              component={LevelPage}
            />
            <Redirect to='/4' />
          </Switch>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)

export default App
