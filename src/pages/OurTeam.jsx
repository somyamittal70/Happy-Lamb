
import TeamHero from "../components/team/Hero";

import Teamstats from "../components/team/Teamstats";
// import Teamgrid from "../components/team/TeamGrid";
import Teamcta from "../components/team/Teamcta";
import TeamCards from "../components/team/TeamGrid";

export default function TeamPage() {
  return (
    <main>
     
     <TeamHero />
      <Teamstats />
      <TeamCards />
      <Teamcta />
    </main>
  );
}
