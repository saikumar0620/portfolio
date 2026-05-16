import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills">
      <div />

      <div>
        <div>
          <span>
            // Skills
          </span>
          <h2>
            My Tech Stack
          </h2>
          <div />
        </div>

        <div>
          {skills.map((skill, i) => (
            <div
              key={skill.name}
            >
              <div>
                <span
                  role="img"
                  aria-label={skill.name}
                >
                  {skill.icon}
                </span>
                <div>
                  <h3>
                    {skill.name}
                  </h3>
                  <p>
                    {skill.description}
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <span>
                    Proficiency
                  </span>
                  <span>
                    {skill.level}%
                  </span>
                </div>
                <div>
                  <div style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
