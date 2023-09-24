import Member from '../../widgets/about/Member';
import RssLogo from '../../shared/assets/logo-rsschool.svg';
import AlionaImg from '../../shared/assets/aliona.jpg';
import XushaImg from '../../shared/assets/Xusha-1.jpg';
import ZhenyaImg from '../../shared/assets/TupaTip.jpg';

const About = (): JSX.Element => {
  return (
    <main className="about">
      <div className="container about__container">
        <h2 className="about__title">Our Team</h2>
        <div className="about__members">
          <Member
            src={ZhenyaImg}
            name="Yevhenii Khovaiev"
            role="Team leader, Frontend developer"
            description="I learned computer engineering in Kyiv Politecnical Institute. 
            Frontend and programming in general are, perhaps, areas my future will be connected with. And I'd be happy if I`m not wrong about it. 
            In couple years I see myself as an excellent full-stack developer, which I am persistently and confidently pursuing. We'll se:)"
            location="Kyiv, Ukraine"
            href="https://github.com/eugenekhovaiev"
            nickname="eugenekhovaiev"
            contributionFirst="Provided technical leadership and expertise in frontend technologies."
            contributionSecond="Managed project architecture and repository."
            contributionThird="Worked on User Profile and Catalog pages."
            contributionFourth="Integratad CommerceTools into the project."
          />
          <Member
            src={AlionaImg}
            name="Aliona Khomich"
            role="Frontend developer"
            description="I graduated from Belarusian State University. After that I've been a teacher for 2 years.
            My passion for sports, literature, and the natural world serves as a wellspring of inspiration.
            As a frontend developer, my goal is to create applications that enhance the quality of life and provide user-friendly solutions."
            location="Warsaw, Poland"
            href="https://github.com/Alena636"
            nickname="alena636"
            contributionFirst="Set up project to work with React."
            contributionSecond="Embedded Trello in the team workflow."
            contributionThird="Implemented Product and Login pages."
            contributionFourth="Worked on About Us page."
          />
          <Member
            src={XushaImg}
            name="Xeniya Gazizova"
            role="Frontend developer"
            description="I was a student at Moscow State University.
            In my spare time, I find joy in drawing, quality family time, and Nintendo Switch games.
            The process of crafting something meaningful from scratch truly resonates with me, and after a long search for my true calling, I believe I've finally found it in web development."
            location="Merced, CA, USA"
            href="https://github.com/XeniyaMV"
            nickname="xeniyamv"
            contributionFirst="Implemented frontend features, user interfaces, and animations."
            contributionSecond="Worked on Basket page."
            contributionThird="Implemented filtering, sorting, and searching functionality."
            contributionFourth="Created Registration page."
          />
        </div>
        <div className="about__methods-wrapper">
          <h2 className="about__title">Effective Collaboration Methods</h2>
          <div className="about__methods-list">
            <div className="about__methods-list-item">
              <p className="about__methods-item-title">Agile Development</p>
              <p className="about__methods-item-description">
                We adopted agile methodologies, such as Scrum, to foster flexibility and adaptability in our development
                process. This allowed us to respond effectively to changing project requirements
              </p>
            </div>
            <div className="about__methods-list-item">
              <p className="about__methods-item-title">Version Control and Collaboration Tools</p>
              <p className="about__methods-item-description">
                The use of version control systems and collaboration tools like Git and collaborative coding platforms
                enabled our team to work cohesively on codebases, track changes, and resolve issues efficiently
              </p>
            </div>
            <div className="about__methods-list-item">
              <p className="about__methods-item-title">Code Reviews</p>
              <p className="about__methods-item-description">
                Regular code reviews within the frontend development team promoted code quality, consistency, and
                knowledge sharing. This iterative feedback loop improved the overall codebase.
              </p>
            </div>
          </div>
        </div>
        <div className="about__footer">
          <a href="https://rs.school/" className="about__rss-link">
            <img src={RssLogo} alt="logo-rss" className="about__rss-logo" />
          </a>
          <p className="about__footer-date">2023</p>
        </div>
      </div>
    </main>
  );
};

export default About;
