import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const ArticleCard = ({ article, imageUrls }) => {
  const { title, url } = article;

  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const variants = {
    right: { y: "5vw", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="col-12 col-md-6 col-lg-6">
      <a href={url}>
        <motion.div
          className="article-card"
          ref={ref}
          variants={variants}
          initial="right"
          animate={inView ? "visible" : "right"}
          transition={{ duration: 0.4, ease: "easeInOut", type: "spring", stiffness: 260, damping: 20 }}
        >
          {imageUrls && <img className="article-image" src={imageUrls} alt={title} />}
          <div className="article-text">
            <p className="article-news">POPULAR</p>
            <h3 className="article-title">{title}</h3>
          </div>
        </motion.div>
      </a>
    </div>
  );
};

export default ArticleCard;
