
import TeamHero from "../components/team/Hero";

import Teamstats from "../components/team/Teamstats";
import Teamgrid from "../components/team/TeamGrid";
import Teamcta from "../components/team/Teamcta";

export default function TeamPage() {
  return (
    <main>
     
     <TeamHero />
      <Teamstats />
      <Teamgrid />
      <Teamcta />
    </main>
  );
}
