import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Redirect
} from 'react-router-dom';
import Header from './features/Header/Header';
import SubredditContent from './features/Subreddits/Subreddit';
import Posts from './features/posts/Posts';
import Footer from './features/Footer/Footer';


function App() {
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route 
            exact path="/"
            render={() => (
              <React.Fragment>
                <Header />
                <SubredditContent />
                <Posts />
                <Footer />
              </React.Fragment>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App