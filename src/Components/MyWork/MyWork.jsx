import React, { useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';
import ink from '../../assets/Ink&PArchment.png';
import lend from '../../assets/LendAHand.jpeg';
import progress from '../../assets/ProgressiveOverload.webp'

const projects = [
  {
    id: 1,
    title: 'Ink & Parchment',
    image: ink,
    description: 'A Constituitonal Archive Application developed by my team and I. (It does take a second to load)',
    link: 'console.firebase.google.com/u/1/project/girls-girls-inc/firestore/databases/-default-/data/~2Fusers~2FjXIWR4OiLuNzWVBDnYXreoJnFoS2',
  },
  {
    id: 2,
    title: 'LendAHand',
    image: lend,
    description: 'A community app connecting volunteers with people in need.',
    link: 'https://www.youtube.com/watch?v=Cx-GmvVzzAM',
  },
  {
    id: 3,
    title: 'Progressive Overload',
    image: progress,
    description: 'A fitness passion project of mine that i would like to act as a fitness assistant and suggestor based on your goals.',
  },
];

const MyWork = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id='work' className='mywork'>
      <section className="mywork-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="" />
      </section>

      <section className="mywork-container">
        {projects.map((project) => (
          <div
            key={project.id}
            className="mywork-item"
            onClick={() => openModal(project)}
            style={{ cursor: 'pointer' }}
          >
            {project.image ? (
              <img src={project.image} alt={project.title} />
            ) : (
              <div className="placeholder-image">No Image Available</div>
            )}
            <div className="mywork-overlay">
              <p>{project.title}</p>
            </div>
          </div>
        ))}
      </section>

      <a
        className="mywork-showmore"
        href="https://github.com/EthanDhavaran"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </a>

      {modalOpen && selectedProject && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>

            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-button"
              >
                See More
              </a>
            )}

            <button onClick={closeModal} className="modal-close-button">&times;</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyWork;
