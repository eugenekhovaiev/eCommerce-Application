interface MemberProps {
  src: string;
  name: string;
  role: string;
  description: string;
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
      <a className="about__member-link" href={props.href}>
        <img src="#" alt="github-link" />
        <span>{props.nickname}</span>
      </a>
    </div>
  );
};

export default Member;
