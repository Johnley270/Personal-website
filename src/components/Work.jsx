import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import "./Work.css";

function Work() {
  return (
    <section id="work" className="work">
      <div className="section">
        <motion.div
          className="work-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">Crafted with purpose</h2>
          <p className="section-description">
            Projects that solve real problems through thoughtful design and
            research.
          </p>
        </motion.div>

        <div className="work-grid">
          {projects.map((project, i) => (
            <Link
              key={project.id}
              to={`/work/${project.slug}`}
              className="work-card-link"
            >
              <motion.article
                className="work-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
              >
              <div
                className="work-card-visual"
                style={{
                  background: `linear-gradient(135deg, ${project.color}15, ${project.color}08)`,
                }}
              >
                <div
                  className="work-card-accent"
                  style={{ background: project.color }}
                />
              </div>

              <div className="work-card-body">
                <div className="work-card-meta">
                  <span className="work-card-category">{project.category}</span>
                  <span className="work-card-year">{project.year}</span>
                </div>

                <h3 className="work-card-title">
                  {project.title}
                  <ArrowUpRight size={18} className="work-card-arrow" />
                </h3>

                <p className="work-card-description">{project.description}</p>

                <div className="work-card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="work-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
