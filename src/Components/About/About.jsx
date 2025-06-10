import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const About = () => {
    return (
        <section id='about' className="about">
            <header className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="Decorative pattern" />
            </header>

            <main className="about-content">
                <div className="top-section">
                    <section className="about-hobbies">
                        <h2>My Hobbies</h2>
                        <div className="hobby-grid">
                            {[
                                { title: "Bass Guitar", description: "Learning pretty much any and every genre from gospel to heavy metal and jazz" },
                                { title: "Cars", description: "Modifying my cars performance and just learning motor mechanic skills." },
                                { title: "Chess", description: "Love analyzing positions and grinding puzzles." },
                                { title: "Rock Climbing", description: "I climb twice a week at the Wits Mountain Club but, have quickly fallen in love with the sport." },
                                { title: "Video Games", description: "Gaming is one of my many outlets too bad i only enjoy them if it's a challenge." },
                                { title: "Cooking", description: "Cooking is such a passion for me and it always has been. Whether it's trying a new recipe or watching some Gordon Ramsey, I am all for it." }
                            ].map((hobby, index) => (
                                <div key={index} className="hobby-card">
                                    <div className="hobby-card-inner">
                                        <div className="hobby-card-front">
                                            <h3>{hobby.title}</h3>
                                        </div>
                                        <div className="hobby-card-back">
                                            <p>{hobby.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="about-description">
                        <p>
                            I’m not the best at describing myself, but here goes: I’m a very goal-oriented person who often gets hyper-focused on whatever new interest sparks my curiosity.
                        </p>
                        <p>
                            My life revolves around four main pillars: Church, Work, Gym, and Home. At Church and during the week I like to take a break from everything else and just spend time with God, I also serve at church which really helps you take your mind of your own problems once in a while. I genuinely enjoy helping those around me and offering support whenever I can. For Gym and Work, these i approach with discipline and dedication. Due to my ability to hyperfocus when I am in these modes my full undivided attention is there and nothing can distract me from it, until the task at hand is done. At home, I’m usually diving into some new skill to add to my toolbelt — whether it’s learning how to rebuild an engine from scratch or playing a video game I just remembered I loved. If not that i am spending time with my family and pets Lexi and Sydney.
                        </p>
                        <p>
                            I know I still have a lot to learn, and since I’m interested in so many things, that list seems never-ending. But I’m excited to enter the professional world and open new avenues for growth and learning.
                        </p>
                    </section>
                </div>

                <section className="skills-section">
                    <div className="coding-skills">
                        <h2>Coding Skills</h2>
                        <div className="about-skills">
                            <Skill name="HTML & CSS" width="50%" />
                            <Skill name="JavaScript" width="70%" />
                            <Skill name="Python" width="80%" />
                            <Skill name="Next.js" width="65%" />
                            <Skill name="R" width="60%" />
                            <Skill name="C & C++" width="90%" />
                        </div>
                    </div>

                    <div className="soft-skills">
                        <h2>Soft Skills</h2>
                        <div className="about-skills">
                            <Skill name="Communication" width="85%" />
                            <Skill name="Teamwork" width="80%" />
                            <Skill name="Problem Solving" width="90%" />
                            <Skill name="Adaptability" width="75%" />
                            <Skill name="Work Ethic" width="95%" />
                            <Skill name="Interpersonal Skills" width="90%"/>
                        </div>
                    </div>
                </section>
            </main>
        </section>
    );
};

const Skill = ({ name, width }) => (
    <div className="about-skill">
        <p><strong>{name}</strong></p>
        <div className="skill-bar-container">
            <div className="skill-bar-fill" style={{ width }}></div>
        </div>
    </div>
);

export default About;
