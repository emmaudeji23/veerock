// components/BlogPost.js



const BlogPostComment = ({ commentFormData, handleCommentSubmit, handleCommentChange}) => {


  return (
    <div >

      {/* Add comment form */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Add Comment</h2>
        <form onSubmit={handleCommentSubmit}>
          <label className="block mb-2">
            Name:
            <input
              type="text"
              name="name"
              value={commentFormData.name}
              onChange={handleCommentChange}
              className="w-full border p-2"
              required
            />
          </label>
          <label className="block mb-2">
            Email:
            <input
              type="email"
              name="email"
              value={commentFormData.email}
              onChange={handleCommentChange}
              className="w-full border p-2"
            />
          </label>
          <label className="block mb-2">
            Comment:
            <textarea
              name="comment"
              value={commentFormData.comment}
              onChange={handleCommentChange}
              className="w-full border p-2"
              required
            />
          </label>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            Submit Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogPostComment;
