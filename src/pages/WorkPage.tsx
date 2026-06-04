import PageLayout from "../components/PageLayout";
import WorkImage from "../components/WorkImage";
import { projects } from "../data/projects";
import { MdArrowOutward } from "react-icons/md";
import "../components/styles/Work.css";
import "../components/styles/InnerPage.css";

const WorkPage = () => {
  return (
    <PageLayout pageKey="work">
      <main className="inner-page-main">

        {/* ── Hero ── */}
        <section className="ip-hero section-container">
          <p className="ip-kicker pe-kicker">Selected projects</p>
          <h1 className="ip-title pe-title">
            My <span>Work</span>
          </h1>
          <p className="ip-subtitle pe-body">
            A curated list of projects I've designed and built — from portfolios to business platforms.
          </p>
        </section>

        {/* ── Project list ── */}
        <section className="ip-project-list section-container">
          {projects.map((project, i) => (
            <article className="ip-project-card pe-card" key={project.title}>
              <div className="ip-card-index">{String(i + 1).padStart(2, "0")}</div>
              <div className="ip-card-image">
                <WorkImage image={project.image} alt={project.title} link={project.link} />
              </div>
              <div className="ip-card-info">
                <p className="ip-card-category">{project.category}</p>
                <h2 className="ip-card-title">{project.title}</h2>
                <p className="ip-card-summary">{project.summary}</p>
                <p className="ip-card-tools">{project.tools}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="ip-card-link"
                >
                  View Live <MdArrowOutward />
                </a>
              </div>
            </article>
          ))}
        </section>

      </main>
    </PageLayout>
  );
};

export default WorkPage;
