import React from 'react';
import './MoreBlogs.css'; // Import the CSS

// Placeholder data for blog tiles
const blogPosts = [
  {
    id: 1,
    title: "Understanding TB Stigma and Disability Inclusion",
    excerpt: "Exploring the challenges faced by persons with disabilities in accessing TB care and the importance of inclusive community programs.",
    imageUrl: "https://via.placeholder.com/300x180/AED6F1/34495E?text=Blog+Image+1",
    date: "2025-04-10",
    slug: "understanding-tb-stigma" // For routing later
  },
  {
    id: 2,
    title: "Empowering Women with Disabilities: MHM Access",
    excerpt: "A look into ADPHA's initiatives promoting access to safe menstrual hygiene management for girls and women with disabilities.",
    imageUrl: "https://via.placeholder.com/300x180/F5B7B1/641E16?text=Blog+Image+2",
    date: "2025-04-05",
    slug: "empowering-women-mhm"
  },
  {
    id: 3,
    title: "The Role of Peer Support in HIV/AIDS Services",
    excerpt: "How peer support groups are strengthening advocacy for inclusive TB and HIV/AIDS services within the community.",
    imageUrl: "https://via.placeholder.com/300x180/A9DFBF/145A32?text=Blog+Image+3",
    date: "2025-03-28",
    slug: "peer-support-hiv-aids"
  },
    {
    id: 4,
    title: "Navigating Development Assistance Challenges",
    excerpt: "Reflections on recent funding shifts and the resilience of community organizations like ADPHA Uganda.",
    imageUrl: "https://via.placeholder.com/300x180/D6DBDF/2C3E50?text=Blog+Image+4",
    date: "2025-03-20",
    slug: "development-assistance-challenges"
  },
];

const MoreBlogs = () => {

  // In a real app, this function would likely navigate using react-router-dom
  const handleTileClick = (slug) => {
    console.log(`Maps to blog post: ${slug}`);
    // Example with react-router: history.push(`/blog/${slug}`);
    alert(`Simulating navigation to blog post: ${slug}`);
  };

  return (
    <section className="more-blogs-section">
        <h2 className="more-blogs-title">More From Our Blog</h2>
        <div className="more-blogs-container">
        {blogPosts.map((post) => (
            <div
            key={post.id}
            className="blog-tile"
            onClick={() => handleTileClick(post.slug)}
            role="link" // Add role for accessibility
            tabIndex="0" // Make it focusable
            onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && handleTileClick(post.slug)} // Keyboard accessibility
            >
            <img src={post.imageUrl} alt={post.title} className="tile-image" />
            <div className="tile-content">
                <h3 className="tile-title">{post.title}</h3>
                <p className="tile-excerpt">{post.excerpt}</p>
                 <div className="tile-footer">
                     <span>{post.date}</span>
                     {/* Optionally add a read more link style if needed */}
                     {/* <span className="tile-link"> Read More &rarr;</span> */}
                </div>
            </div>
            </div>
        ))}
        </div>
    </section>
  );
};

export default MoreBlogs;