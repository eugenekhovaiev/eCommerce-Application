import Member from '../../widgets/member/Member';

const About = (): JSX.Element => {
  return (
    <main className="about">
      <div className="container about__container">
        <h2 className="about__title">Our Team</h2>
        <div className="about__members">
          <Member
            src="src/shared/assets/user-icon.svg"
            name="Yevhenii Khovaiev"
            role="Team leader, Frontend developer"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit aperiam nesciunt eius doloremque
              reiciendis inventore doloribus sit non culpa? Odio assumenda quaerat id pariatur accusantium possimus
              molestiae incidunt voluptatibus debitis."
            href="https://github.com/eugenekhovaiev"
            nickname="eugenekhovaiev"
          />
          <Member
            src="src/shared/assets/user-icon.svg"
            name="Khomich Aliona"
            role="Frontend developer"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit aperiam nesciunt eius doloremque
              reiciendis inventore doloribus sit non culpa? Odio assumenda quaerat id pariatur accusantium possimus
              molestiae incidunt voluptatibus debitis."
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
            href="https://github.com/XeniyaMV"
            nickname="xeniyamv"
          />
        </div>
      </div>
    </main>
  );
};

export default About;
