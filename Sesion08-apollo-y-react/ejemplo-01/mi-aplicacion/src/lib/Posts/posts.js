const queryAllPosts = `
  query allPosts {
    allPosts {
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

const mutationCreatePost = ({title}) => `
  mutation createPost {
    createPost(id: 1, title: "${title}", views: 0, user_id: 1) {
      title,
      User {
        name
      }
    }
  }
`

function querySender({query}) {
  return window.fetch('http://localhost:4000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({query}),
  })
}

function Posts() {
  function fetch() {
    return querySender({query: queryAllPosts})
    .then(r => r.json())
    .then(response => response.data.allPosts)
  }

  function create(post) {
    return querySender({query: mutationCreatePost(post)})
    .then(r => r.json())
    .then(response => response.data.allPosts)
  }

  return {
    create,
    fetch,
  }
}


export default Posts;
