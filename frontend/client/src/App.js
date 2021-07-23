import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PostPages from './pages/Post'
import FeedPages from './pages/Feed'
import EditPages from './pages/Edit'
import AboutPages from './pages/About'

function App() {
  return (
  <Router>
    <Switch>
      <Route path="/" exact component={FeedPages} />
      <Route path="/post" component={PostPages} />
      <Route path="/edit/:id" component={EditPages} />
      <Route path="/about/:id" component={AboutPages} />
    </Switch>
  </Router>
  )
}

export default App;
