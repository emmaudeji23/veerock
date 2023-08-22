'use client'

// components/BlogPost.js
import ReactMarkdown from 'react-markdown';
import ImageContainer from '../Cards/ImageContainer';
import BlogPostComment from '../forms/BlogPostComment';
import { useState } from 'react';

const BlogPost = ({blogPost}) => {

const { title, imageUrl, category, introduction, sections, conclusion, cta, author, date, likes, comments } = blogPost


const [commentFormData, setCommentFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setCommentFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      author: commentFormData.name,
      text: commentFormData.comment,
      date: new Date().toISOString(),
    };
    // You can add logic to update the comments array or send data to a backend here
    console.log('New Comment:', newComment);
    // Clear the form
    setCommentFormData({
      name: '',
      email: '',
      comment: '',
    });
  };



  return (
    <div className="max-w-4xl lg:pl-8 text-lg">
      <h1 className="text-2xl md:text-4xl font-semibold mb-4">{title}</h1>
      
      <div className="mb-4 font-semibold">{introduction}</div>
      <div className="flex mb-4 flex-wrap gap-4 justify-between w-full">
      <p className='flex-shrink-0'>Author: {author}</p>
      <p className='flex-shrink-0'>Date: {date}</p>
      <p className='flex-shrink-0'>Likes: {likes}</p>
      <p className='flex-shrink-0'>Category: {category}</p>
      </div>

      <div className="h-[500px] w-full overflow-hidden pb-4">
        <ImageContainer img={imageUrl} alt={title}/>
      </div>

      

      {/* Render blog sections using ReactMarkdown */}
      {sections.map((section, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-lg font-semibold mb-2">{section.subheading}</h2>
          <ReactMarkdown>{section.content}</ReactMarkdown>
        </div>
      ))}

      <div className="mb-4">{conclusion}</div>
      <p>{cta}</p>

      {/* Render comments */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2 mt-10">Comments</h2>
        {comments.map((comment, index) => (
          <div key={index} className="border p-4 mb-2">
            <p className="font-semibold">{comment.author}</p>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <BlogPostComment commentFormData={commentFormData} handleCommentSubmit={handleCommentSubmit} handleCommentChange={handleCommentChange}/>
      </div>
    </div>
  );
};

export default BlogPost;
