import { MemberProps } from '../../shared/types';

const Member = (props: MemberProps): JSX.Element => {
  return (
    <div className="about__member card">
      <div className="about__member-wrapper front">
        <img className="about__member-img" src={props.src} alt="member" />
        <p className="about__member-name">{props.name}</p>
        <p className="about__member-role">{props.role}</p>
        <p className="about__member-location">
          <img className="about__member-location-img" src="src/shared/assets/location.svg" alt="location" />
          {props.location}
        </p>
        <p className="about__member-description">{props.description}</p>
        <a className="about__member-link" href={props.href} target="blank">
          <img className="about__member-link-img" src="src/shared/assets/github-icon.svg" alt="github-link" />
          <span>{props.nickname}</span>
        </a>
      </div>
      <div className="about__member-wrapper back">
        <div className="back-content">
          <h2>Contributions</h2>
          <ul className="about__description-list">
            <li className="about__description-list-item-circle">{props.contributionFirst}</li>
            <li className="about__description-list-item-circle">{props.contributionSecond}</li>
            <li className="about__description-list-item-circle">{props.contributionThird}</li>
          </ul>
          <a className="about__member-link back-link" href={props.href} target="blank">
            <img className="about__member-link-img" src="src/shared/assets/github-icon.svg" alt="github-link" />
            <span>{props.nickname}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Member;
