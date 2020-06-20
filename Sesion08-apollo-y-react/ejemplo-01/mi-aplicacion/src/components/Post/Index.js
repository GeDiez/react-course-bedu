import React from 'react'

const IndexPosts = (props) => {
  const posts = []

  return (
    <div className="columns is-multiline">
      {
        posts.map(function (post) {
          return (
            <div className="column is-one-quarter ">
              <div className="card">
                <header className="card-header is-shadowless">
                  <p className='card-header-title'></p>
                  <a href="#" className="card-header-icon" aria-label="more options">
                    <span className="icon">
                      <i className="fas fa-times has-text-grey-dark" aria-hidden="true"></i>
                    </span>
                  </a>
                </header>
                <div className="card-content">
                  <p className="title">
                    "{post.title}"
                  </p>
                </div>
                <footer className="card-footer">
                  <p className="card-footer-item">
                    <span>
                      Published by: {post.User.name}
                    </span>
                  </p>
                </footer>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default IndexPosts
