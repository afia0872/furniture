import React from 'react';
import { Link } from 'react-router-dom';

// Import all your blog images
import blog1 from '../../assets/blog-1.jpeg';
import blog2 from '../../assets/blog-2.jpg';
import blog3 from '../../assets/blog-3.jpg';
import blog4 from '../../assets/blog-4.jpg';
import blog5 from '../../assets/blog-5.jpg';
import blog6 from '../../assets/blog-6.jpeg';

// Create an object to easily map blog IDs to their imported images
const blogImages = {
    1: blog1,
    2: blog2,
    3: blog3,
    4: blog4,
    5: blog5,
    6: blog6,
    // Add more mappings if you have more blogs and corresponding images
};

import blogs from '../../Blogs.json';

function Blog() {
    return (
        <>
            {/* Page Header/Breadcrumb Section */}
            <div className="page-section text-center py-5 position-relative overflow-hidden">
                <p className="breadcrumb-text text-muted mb-2">
                    {/* <Link to='/' className='breadcrumb-link'>Home</Link> / <span className="text-dark">Blog</span> */}
                </p>
                <h2 className="page-heading fw-bold text-uppercase">Blog</h2>
            </div>

            {/* Main Blog Content Section */}
            <div className="container my-5">
                <div className="row">
                    {/* Blog Posts Column (now col-lg-8 to make space for sidebar) */}
                    <div className="col-lg-8 blog-posts-container">
                        <div className="row">
                            {blogs.map((blog) => (
                                <div className="col-md-6 mb-4" key={blog.id}> {/* Changed to col-md-6 for two columns per row on medium screens */}
                                    <div className="blog-card h-100 overflow-hidden shadow-sm rounded"> {/* Added shadow and rounded corners */}
                                        <div className="blog-img-wrapper overflow-hidden">
                                            {/* Dynamically get the image based on blog.id */}
                                            <img
                                                src={blogImages[blog.id] || blog1} // Fallback to blog1 if image not found
                                                className='img-fluid w-100'
                                                alt={blog.title}
                                                style={{ height: '200px', objectFit: 'cover' }} // Enforce consistent image height
                                            />
                                        </div>
                                        <div className="blog-content p-3"> {/* Added padding */}
                                            <h6 className="blog-meta text-muted mb-2"> {/* Changed to h6 for subtle meta info */}
                                                {blog.date} <span className="mx-1">•</span> By {blog.author}
                                            </h6>
                                            <Link to={`/blog/${blog.id}`} className="blog-title h5 d-block text-decoration-none fw-bold text-dark mb-3"> {/* Use h5 for title, added dynamic link */}
                                                {blog.title}
                                            </Link>
                                            <p className="blog-desc text-secondary mb-3">
                                                {blog.description}
                                            </p>
                                            <Link to={`/blog/${blog.id}`} className="blog-btn btn btn-outline-dark btn-sm rounded-pill">Read More</Link> {/* Styled button */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar Column */}
                    <div className="col-lg-4"> {/* Changed to col-lg-4 for a wider sidebar */}
                        <div className="blog-sidebar p-4 bg-light rounded"> {/* Added padding and background */}
                            <div className="blog-search mb-4">
                                <h4 className="fw-bold mb-3">Search</h4>
                                <form className="d-flex align-items-center gap-2">
                                    <input type="text" placeholder='Search Blog' className="form-control rounded-pill py-2" /> {/* Adjusted padding */}
                                    <button className="btn btn-dark rounded-circle custom-search-btn"><i className="bi bi-search"></i></button> {/* Darker button, circular */}
                                </form>
                            </div>

                            <div className="recent-posts mb-4">
                                <h4 className="fw-bold mb-3">Recent Posts</h4>
                                {/* You might want to map recent posts from your blogs.json as well */}
                                <div className="blog-post d-flex align-items-center mb-3">
                                    <img src={blog1} className='img-fluid rounded-circle me-3' style={{ width: "60px", height: "60px", objectFit: "cover" }} alt="Recent Blog 1" /> {/* Smaller image */}
                                    <div className="blog-post-content">
                                        <h6 className="fw-bold mb-1">9 Customer Experience Trends That'll Define the Next Year</h6>
                                        <span className="text-muted small">Feb 28, 2025</span> {/* Smaller font */}
                                    </div>
                                </div>
                                <div className="blog-post d-flex align-items-center mb-3">
                                    <img src={blog2} className='img-fluid rounded-circle me-3' style={{ width: "60px", height: "60px", objectFit: "cover" }} alt="Recent Blog 2" />
                                    <div className="blog-post-content">
                                        <h6 className="fw-bold mb-1">6 Simple Ways to Boost Your Ecommerce Conversion Rate</h6>
                                        <span className="text-muted small">Jan 15, 2025</span>
                                    </div>
                                </div>
                                <div className="blog-post d-flex align-items-center">
                                    <img src={blog3} className='img-fluid rounded-circle me-3' style={{ width: "60px", height: "60px", objectFit: "cover" }} alt="Recent Blog 3" />
                                    <div className="blog-post-content">
                                        <h6 className="fw-bold mb-1">The Top 10 Must-Have Furniture Pieces for a Modern Home</h6>
                                        <span className="text-muted small">Dec 1, 2024</span>
                                    </div>
                                </div>
                            </div>

                            <div className="blog-categories">
                                <h4 className="fw-bold mb-3">Categories</h4>
                                {/* Consider making these links active to filter blogs */}
                                <ul className="list-unstyled">
                                    <li className="mb-2"><Link to="#" className="text-decoration-none text-dark">Business (5)</Link></li>
                                    <li className="mb-2"><Link to="#" className="text-decoration-none text-dark">Creative (6)</Link></li>
                                    <li className="mb-2"><Link to="#" className="text-decoration-none text-dark">Development (4)</Link></li>
                                    <li className="mb-2"><Link to="#" className="text-decoration-none text-dark">Marketing (7)</Link></li>
                                    <li className="mb-2"><Link to="#" className="text-decoration-none text-dark">Writing (4)</Link></li>
                                    <li className="mb-2"><Link to="#" className="text-decoration-none text-dark">Educational (4)</Link></li>
                                    <li className="mb-2"><Link to="#" className="text-decoration-none text-dark">Experience (4)</Link></li>
                                    <li className="mb-2"><Link to="#" className="text-decoration-none text-dark">Knowledge (5)</Link></li>
                                    <li className="mb-2"><Link to="#" className="text-decoration-none text-dark">Learning (4)</Link></li>
                                    <li className="mb-2"><Link to="#" className="text-decoration-none text-dark">Management (7)</Link></li>
                                    <li className="mb-2"><Link to="#" className="text-decoration-none text-dark">Networking (5)</Link></li>
                                    <li className="mb-2"><Link to="#" className="text-decoration-none text-dark">Photography (4)</Link></li>
                                    <li className="mb-2"><Link to="#" className="text-decoration-none text-dark">Success Story (4)</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;