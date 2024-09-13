// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {BlogDetails} = props
  const {title, description, publishedDate} = BlogDetails

  return (
    <li className="Blog-item">
      <div className="Blog-item-container">
        <h1 className="blog-heading">{title}</h1>
        <p className="blog-description">{publishedDate}</p>
      </div>
      <p className="blog-description">{description}</p>
      <hr className="separator" />
    </li>
  )
}
export default BlogItem
