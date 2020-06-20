import React, {useState} from 'react'
import Posts from "../../lib/Posts/posts";

const CreatePost = props => {
  const [post, setPost] = useState({})

  function handleSubmit (ev) {
    ev.preventDefault()
    Posts().create(post)
  }

  return (
    <form className="box" onSubmit={handleSubmit}>
      <div class="field">
        <label class="label">Type something!</label>
        <div class="control">
          <input class="input" type="text" name="content" placeholder="..." value={post.title} onChange={({target}) => setPost(post => ({...post, title: target.value}))} />
        </div>
      </div>
      <div className="columns is-centered mt-5  ">
        <div className="column is-one-fifth">
          <button className='button is-primary has-text-weight-bold'>Post it!</button>
        </div>
      </div>
    </form>
  )
}

export default CreatePost
