import { useState } from 'react';
import { MemberProps } from '../../shared/types';
import LocationImg from '../../shared/assets/location.svg';
import GithubImg from '../../shared/assets/github-icon.svg';
import ButtonElement from '../../shared/UI/buttonElement/ButtonElement';

const Member = (props: MemberProps): JSX.Element => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = (): void => {
    setIsFlipped(!isFlipped);
  };

  const handleBackClick = (): void => {
    setIsFlipped(false);
  };

  return (
    <div className={`about__member card ${isFlipped ? 'flipped' : ''}`}>
      <div className="about__member-wrapper front">
        <img className="about__member-img" src={props.src} alt="member" />
        <p className="about__member-name">{props.name}</p>
        <p className="about__member-role">{props.role}</p>
        <p className="about__member-location">
          <img className="about__member-location-img" src={LocationImg} alt="location" />
          {props.location}
        </p>
        <p className="about__member-description">{props.description}</p>
        <ButtonElement
          title="Contributions"
          additionalClassName="about__member-contribution-btn"
          onClick={handleCardClick}
        />
        <a className="about__member-link" href={props.href} target="blank">
          <img className="about__member-link-img" src={GithubImg} alt="github-link" />
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
          <ButtonElement title="Back" onClick={handleBackClick} />
        </div>
      </div>
    </div>
  );
};

export default Member;
