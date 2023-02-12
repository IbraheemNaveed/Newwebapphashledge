import React, { useEffect, useState } from 'react'
import { createClient } from "contentful"
import { Link } from 'react-router-dom'
import './blog.css'
const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([])
  const client = createClient({ space: "8v72rkodxqxz", accessToken: "7SvBqRXY-3-W_plJeHU42I9pXi_QOV2q2DAnUcGCv-0", host: "preview.contentful.com" })
  useEffect(() => {
    client.getEntries().then(function (entries) {
      console.log('Data that we get from the contentful ',entries)
      // log the title for all the entries that have it
      // entries.items.forEach(function (entry) {
      //   if (entry.fields.productName) {
      //     console.log(entry.fields.productName);
      //   }
      // });
    })
  }, [])
  return (
    <div id="layout" className="pure-g">
      <div className="  ">
        <div>
          <div className="posts">
            <h1 className="content-subhead">Web Dev Blog</h1>

            {blogPosts?.items?.map((post) => (
              <section className="post" key={post.sys.id}>
                <header className="post-header">
                  <img src={post.fields.blogMedia.fields.file.url} title="" alt={post.fields.blogTite} width="578" height="291" />
                  <h2 className="post-title pt-3">{post.fields.blogTite}</h2>
                  <p className="post-meta">
                    By <a href="https://thecodeangle.com/" className="post-author">{post.fields.blogAuthor}</a> Date <span></span>
                    <small>
                      {new Intl.DateTimeFormat('en-GB', {
                        month: 'long',
                        day: '2-digit',
                        year: 'numeric',
                      }).format(new Date(post.fields.createDate))}
                    </small>
                  </p>
                </header>
                <div className="post-description">
                  <p>{post.fields.blogSummary}
                  </p>
                  <button
                    to={`/blogDetails/${post.sys.id}`}
                    className="button button1">
                    Read More
                  </button>
                </div>
              </section>
            ))}
          </div>

          <div className="footer">
            <div className="pure-menu pure-menu-horizontal">
              <div className="pure-menu-item">
                <a href="http://twitter.com/thecodeangle" className="pure-menu-link">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogList