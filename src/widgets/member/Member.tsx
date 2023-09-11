interface MemberProps {
  src: string;
  name: string;
  role: string;
  description: string;
  location: string;
  href: string;
  nickname: string;
}

const Member = (props: MemberProps): JSX.Element => {
  return (
    <div className="about__member">
      <img className="about__member-img" src={props.src} alt="member" />
      <p className="about__member-name">{props.name}</p>
      <p className="about__member-role">{props.role}</p>
      <p className="about__member-description">{props.description}</p>
      <p className="about__member-location">
        <img className="about__member-location-img" src="#" alt="location" />
        {props.location}
      </p>
      <a className="about__member-link" href={props.href} target="blank">
        <img className="about__member-link-img" src="src/shared/assets/github-icon.svg" alt="github-link" />
        <span>{props.nickname}</span>
      </a>
    </div>
  );
};

export default Member;
