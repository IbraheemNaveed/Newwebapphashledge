import React, { useEffect, useState } from 'react'
import { createClient } from "contentful"
import { Link } from 'react-router-dom'
import './blog.css'
const BlogList2 = () => {
    const client = createClient({ space: "8v72rkodxqxz", accessToken: "7SvBqRXY-3-W_plJeHU42I9pXi_QOV2q2DAnUcGCv-0", host: "preview.contentful.com" })
    const [blogPosts, setBlogPosts] = useState([])
    useEffect(() => {
        client.getEntries().then(function (entries) {
            setBlogPosts([...blogPosts, entries?.items]);  
        })
    }, [])
    return (
        <div className=' antialiased text-dark [--scroll-mt:max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl.875rem] lg:[--scroll-mt:6.3125rem] js-focus-visible-500 dark:text-slate-400 bg-slate-900'>
            <div id="layout" className=" bg-slate-900 ">
                <div className="  ">
                <div className="     w-56  h-40 bg-gradient-to-r from-[#6EE7B7]/50 to-[#6EE7B7]  blur-[100px] absolute ">
              {" "}
            </div>
                    <div className='  '>
                    <div className='text-center  '>
                    <h1 class="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold dark:text-slate-200">Latest Updates</h1>
                    <p class="text-lg text-slate-700 dark:text-slate-400">All the latest Tech  news, straight from the&nbsp;team.</p>
                    </div>
                       <div className=' mt-28 relative sm:pb-[2500px] sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]'>
                       <div className=" hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 dark:bg-slate-800 sm:block"></div>
                      <div className='space-y-16 '>
                     <div className='  relative group  antialiased text-slate-500 dark:text-slate-400  dark:bg-slate-900 '>
                     <div className='absolute  ' >
                     {/* <svg viewBox="0 0 9 9" class="hidden absolute right-full  text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"><circle cx="4.5" cy="4.5" r="4.5" stroke="currentColor" class="fill-white dark:fill-slate-900" stroke-width="2"></circle></svg> */}
                        <div className='relative group '>
                        <div className=" group antialiased text-slate-500 dark:text-slate-400  dark:bg-slate-900 ">
                            <h1 className="text-base font-semibold tracking-tight text-slate-900  pt-8 lg:pt-0"> 
                            {console.log(blogPosts&&blogPosts)}</h1>
                            {blogPosts[0]?.map((post) => (
                                <section className="  bg-slate-900 post mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2  " key={post?.sys?.id}>
                                      
                                        <svg viewBox="0 0 9 9" class="hidden absolute right-full  text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"><circle cx="4.5" cy="4.5" r="4.5" stroke="currentColor" class="fill-white dark:fill-slate-900" stroke-width="2"></circle></svg>
                                         <small className=' absolute  lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)] whitespace-nowrap text-sm leading-6 ' >
                                                {new Intl.DateTimeFormat('en-GB', {
                                                    month: 'long',
                                                    day: '2-digit',
                                                    year: 'numeric',
                                                }).format(new Date(post?.fields?.createDate))}
                                            </small>
                                    <header className="post-header  ">
                                        <img src={post?.fields?.blogMedia?.fields?.file?.url} title="" alt={post?.fields?.blogTite} width="300" height="300" />
                                        <h2 className=" text-white font-bold text-3xl  pt-3">{post?.fields?.blogTite}</h2>
                                        <p className="post-meta  ">
                                            By <a href="https://thecodeangle.com/" className="post-author">{post?.fields?.blogAuthor}</a>  <span></span>
                                            <div className='  '>
                                       
                                            </div>
                                        </p>
                                    </header>
                                    <div className="post-description">
                                        <p>{post?.fields?.blogSummary}
                                        </p>
                                        <Link 
                                            to={`/blogDetails/${post?.sys?.id}`}
                                            className="flex items-center text-sm text-sky-500 font-medium ">
                                            Read More
                                            <svg class="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0L3 3L0 6"></path></svg>
                                        </Link>
                                    </div>
                                </section>
                            ))}
                        </div>
                        </div>
                      </div>
                     </div>
                      </div>
                       </div>

                        {/* <div className="footer">
                            <div className="">
                                <div className="pure-menu-item">
                                    <a href="http://twitter.com/thecodeangle" className="pure-menu-link">Twitter</a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogList2