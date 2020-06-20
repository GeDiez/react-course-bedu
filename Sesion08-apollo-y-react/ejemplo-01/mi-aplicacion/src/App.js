import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from './components/Layout/Main';
import 'bulma';

const query = `
{
  Post(id: 1) {
    id
    title
    views
    User {
      name
    }
    Comments {
      date
      body
    }
  }
}
`

class App extends React.Component {
  state = {
    data: {
      Post: {
        title: '',
        Comments: [],
        User: {
          name: '',
        },
      },
    },
  }

  async componentDidMount() {
    const raw = await this.getData('http://localhost:4000', {query})
    const { data } = await raw.json()

    this.setState({ data })
  }

  getData = (url, query) => fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
  })

  render() {
    return (
      <Router>
        <MainLayout />
      </Router>
    )
  }
}

export default App;
