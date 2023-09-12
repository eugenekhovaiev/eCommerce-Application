import Member from '../../widgets/member/Member';

const About = (): JSX.Element => {
  return (
    <main className="about">
      <div className="container about__container">
        <h2 className="about__title">Introduction</h2>
        <p className="about__description">
          The success of our project owes much to the dedicated efforts of our frontend development team. In this
          introductory overview, we aim to highlight the pivotal role played by each member of the frontend development
          team and the effective collaborative methods that led to the creation of a successful product.
        </p>
        <div className="about__description-wrapper">
          <div className="about__description-wrapper-list">
            <p className="about__description-list-title">Frontend Development Team Members and Their Contributions:</p>
            <ol className="about__description-list">
              <li className="about__description-list-item-numeric">Lead Frontend Developer:</li>
              <ul className="about__description-list">
                <li className="about__description-list-item-circle">
                  Provided technical leadership and expertise in frontend technologies.
                </li>
                <li className="about__description-list-item-circle">
                  Defined the frontend architecture and coding standards.
                </li>
                <li className="about__description-list-item-circle">
                  Led the implementation of critical user-facing features.
                </li>
              </ul>
              <li className="about__description-list-item-numeric">Frontend Developers (Additional Team Members):</li>
              <ul className="about__description-list">
                <li className="about__description-list-item-circle">
                  Transformed design concepts into responsive, interactive web interfaces.
                </li>
                <li className="about__description-list-item-circle">
                  Implemented frontend features, user interfaces, and animations.
                </li>
                <li className="about__description-list-item-circle">
                  Ensured cross-browser compatibility and optimized performance for a seamless user experience.
                </li>
              </ul>
            </ol>
          </div>
          <div className="about__methods">
            <p className="about__description-list-title">Effective Collaboration Methods:</p>
            <ul className="about__description-list">
              <li className="about__description-list-item-square">
                Agile Development: We adopted agile methodologies, such as Scrum, to foster flexibility and adaptability
                in our development process. This allowed us to respond effectively to changing project requirements.
              </li>
              <li className="about__description-list-item-square">
                Version Control and Collaboration Tools: The use of version control systems and collaboration tools like
                Git and collaborative coding platforms enabled our team to work cohesively on codebases, track changes,
                and resolve issues efficiently.
              </li>
              <li className="about__description-list-item-square">
                Code Reviews: Regular code reviews within the frontend development team promoted code quality,
                consistency, and knowledge sharing. This iterative feedback loop improved the overall codebase.
              </li>
            </ul>
          </div>
        </div>
        <h2 className="about__title">Our Team</h2>
        <div className="about__members">
          <Member
            src="src/shared/assets/user-icon.svg"
            name="Yevhenii Khovaiev"
            role="Team leader, Frontend developer"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit aperiam nesciunt eius doloremque
              reiciendis inventore doloribus sit non culpa? Odio assumenda quaerat id pariatur accusantium possimus
              molestiae incidunt voluptatibus debitis."
            location="Kyiv, Ukraine"
            href="https://github.com/eugenekhovaiev"
            nickname="eugenekhovaiev"
          />
          <Member
            src="src/shared/assets/user-icon.svg"
            name="Aliona Khomich"
            role="Frontend developer"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit aperiam nesciunt eius doloremque
              reiciendis inventore doloribus sit non culpa? Odio assumenda quaerat id pariatur accusantium possimus
              molestiae incidunt voluptatibus debitis."
            location="Warsaw, Poland"
            href="https://github.com/Alena636"
            nickname="alena636"
          />
          <Member
            src="src/shared/assets/user-icon.svg"
            name="Xeniya Gazizova"
            role="Frontend developer"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit aperiam nesciunt eius doloremque
              reiciendis inventore doloribus sit non culpa? Odio assumenda quaerat id pariatur accusantium possimus
              molestiae incidunt voluptatibus debitis."
            location="Merced, USA"
            href="https://github.com/XeniyaMV"
            nickname="xeniyamv"
          />
        </div>
        <div className="about__footer">
          <a href="https://rs.school/" className="about__rss-link">
            <img src="src/shared/assets/logo-rsschool.svg" alt="logo-rss" className="about__rss-logo" />
          </a>
          <p className="about__footer-date">2023</p>
        </div>
      </div>
    </main>
  );
};

export default About;
