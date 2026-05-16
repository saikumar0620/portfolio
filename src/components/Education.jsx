import { education, experience } from '../data/portfolioData';
import { GraduationCap, Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function Education() {
  return (
    <section id="education">
      <div />

      <div>
        <div>
          <span>
            // Journey
          </span>
          <h2>
            Education & Experience
          </h2>
          <div />
        </div>

        <div>
          <div>
            <div>
              <div>
                <GraduationCap />
              </div>
              <h3>Education</h3>
            </div>

            <div>
              {education.map((edu, i) => (
                <div key={i}>
                  <div>
                    <Calendar />
                    {edu.year}
                  </div>
                  <h4>
                    {edu.degree}
                  </h4>
                  <p>
                    {edu.field}
                  </p>
                  <p>
                    {edu.institution}
                  </p>
                  <p>
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div>
              <div>
                <Briefcase />
              </div>
              <h3>Experience</h3>
            </div>
            <div>
              {experience.map((exp, i) => (
                <div key={i}>
                  <div>
                    <Calendar />
                    {exp.period}
                  </div>
                  <h4>
                    {exp.role}
                  </h4>
                  <p>
                    {exp.type}
                  </p>
                  <p>
                    {exp.description}
                  </p>
                  <ul>
                    {exp.highlights.map((h, j) => (
                      <li key={j}>
                        <CheckCircle2 />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
