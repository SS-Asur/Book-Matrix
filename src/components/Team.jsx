import { team } from '../data/team';
import TeamMember from './TeamMember';

export default function Team() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-white" style={{paddingBottom:0}}>
      <div className="container-page">
        {/* Section Header */}
        <div className="mb-16 flex flex-col gap-8 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brass">
                Our Team
              </p>
            </div>

            <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[56px]">
              The people behind
              <span className="block text-ink-muted">your success.</span>
            </h2>
          </div>

          <p className="max-w-sm text-[15px] leading-relaxed text-ink-muted sm:text-[16px] lg:pb-1">
            A dedicated team of qualified professionals focused on keeping your
            finances accurate, organized, and moving forward.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {team.map((person, i) => (
            <TeamMember key={person.name} person={person} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}