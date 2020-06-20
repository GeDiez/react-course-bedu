import React from 'react'
import { Route, Link } from "react-router-dom";
import CreatePost from "../Post/Create";
import IndexPost from "../Post/Index";

const Main = () => {
  return (
    <>
      <section class="hero is-dark">
        <div class="hero-body">
          <div class="container">
            <div className="columns">
              <div className="column is-one-third">
                <h1 class="title">
                  GraphQL
                </h1>
                <h2 class="subtitle">
                  Great posts about GraphQL
                </h2>
              </div>

              <div className="column">
              <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-menu">
                  <Link class="navbar-item" to="/post/index">
                    See all posts
                  </Link>
                  <Link class="navbar-item" to="/post/create">
                    Create a post
                  </Link>
                </div>
              </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Route path="/post/create">
        <section class="hero is-success is-fullheight">
          <div class="hero-body">
            <div class="container">
            <p class="title is-1 has-text-centered mb-5">Create a new amazing post!</p>
            <div className="columns is-centered">
              <div className="column is-half">
              <CreatePost />
              </div>
            </div>
            </div>
          </div>
        </section>
      </Route>
      <Route path="/post/index">
      <section class="hero is-light is-bold is-fullheight">
          <div class="hero-body">
            <div class="container">
              <IndexPost />
            </div>
          </div>
        </section>
      </Route>
    </>
  )
}

export default Main
