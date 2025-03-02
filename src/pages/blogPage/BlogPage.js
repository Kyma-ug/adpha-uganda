import React from 'react';
import { motion } from 'framer-motion';
import './BlogPage.css';

import training from "./training-leadership-structures.avif";
import commemorating from "./commemorating-world-tb-day.avif";
import vaccination from "./vaccination-of-people-with-disabilities.avif";

const BlogPage = ({ posts }) => {
  // Default blog posts if none provided
  const defaultPosts = posts || [
    { 
      id: 1, 
      title: "Training: Strengthening the Leadership Structures of ADPHA-Uganda.", 
      excerpt: "Training is under way aiming at strengthening the cluster leadership structures of ADPHA-UGANDA from grass root levels & orient participants on membership payment and registration systems in guidance of their constitutions.", 
      date: 'April 6, 2023', 
      image: training, 
      slug: '/blog/strengthening-the-leadership-structures-of-adpha-uganda',
      isFeatured: true,
    },
    { 
      id: 2, 
      title: "Commemorating World TB day 2023.", 
      excerpt: "The 3rd deputy Prime Minister Hon. Lukiya Nakadaama on behalf of prime minister together with State minister for Hon. Hanifa Kawooya in Butaleja district at commemorating #WorldTBDay 2023 visiting ADPHA-UGANDA stall. #YesWeCanEndTB", 
      date: "March 24, 2023", 
      image: commemorating, 
      slug: '/blog/commemorating-worl-tb-day-2023',
    },
    { 
      id: 3, 
      title: "Vaccination Of People With Disabilities", 
      excerpt: "With support from People's vaccine, Agility vaccinated 867 people with disabilities that were left out during mass vaccination. This exercise was conducted in districts Kalungu, Bukomansimbi, Lwengo, Rakai and Masaka city.", 
      date: "March 5, 2023", 
      image: vaccination, 
      slug: '/blog/vaccination-of-people-with-disabilities',
    },
  ];

  const featuredPost = defaultPosts.find(post => post.isFeatured) || defaultPosts[0];
  const otherPosts = defaultPosts.filter(post => post.id !== featuredPost.id);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.03, transition: { duration: 0.3 } },
  };

  return (
    <section className="blog-page" aria-labelledby="blog-heading">
      <motion.h1 
        className="blog-title"
        id="blog-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        ADPHA Blog
      </motion.h1>

      <motion.div
        className="title-dash-blog"
        initial={{  width: 0  }}
        whileInView={{ width: "100px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      />


      {/* Featured Post */}
      <motion.article
        className="featured-post"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        role="article"
        aria-labelledby={`featured-title-${featuredPost.id}`}
      >
        <a href={featuredPost.slug} className="featured-link">
          <img
            src={featuredPost.image}
            alt={`${featuredPost.title} featured image`}
            className="featured-image"
            loading="lazy"
          />
          <div className="featured-content">
            <h2 id={`featured-title-${featuredPost.id}`} className="featured-title">
              {featuredPost.title}
            </h2>
            <p className="featured-excerpt">{featuredPost.excerpt}</p>
            <time dateTime={featuredPost.date} className="featured-date">
              {featuredPost.date}
            </time>
          </div>
        </a>
      </motion.article>

      {/* Blog Post List */}
      <motion.div
        className="blog-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {otherPosts.map((post) => (
          <motion.article
            key={post.id}
            className="blog-card"
            variants={itemVariants}
            whileHover="hover"
            role="article"
            aria-labelledby={`blog-title-${post.id}`}
          >
            <a href={post.slug} className="blog-card-link">
              <img
                src={post.image}
                alt={`${post.title} blog image`}
                className="blog-image"
                loading="lazy"
              />
              <h2 id={`blog-title-${post.id}`} className="blog-title-card">
                {post.title}
              </h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              <time dateTime={post.date} className="blog-date">
                {post.date}
              </time>
            </a>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default BlogPage;