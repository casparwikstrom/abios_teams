import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Banner from "../Banner";
import { fetchRoster } from "../../api/teams/TeamFetch";
import { MyLoader } from "../MyLoader";
import Container from "@material-ui/core/Container";
import LabTabs from "./LabTabs";
import styled from "styled-components";

const TeamWrapper = styled.div`
  .makeStyles-root-9 {
    margin-top: 2% !important;
  }
`;

function TeamPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [teamId, setID] = useState({ id });
  const [team_info, setTeam] = useState([]);
  const [roster, setRoster] = useState({});
  const [past_matches, setPastMatches] = useState({});
  const [upcoming_matches, setMatches] = useState({});

  useEffect(() => {
    let team = fetchRoster(id);
    team.then((result) => {
      setTeam(result.team_info);
      setID(id);
      setRoster(result.roster);
      setPastMatches(result.matches.past_matches);
      setMatches(result.matches.upcoming_matches);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {!loading && (
        <Banner title={team_info.info.name} image_url={team_info.picture} />
      )}
      {loading && <MyLoader />}
      <TeamWrapper>
        {!loading && (
          <Container fixed>
            <LabTabs
              className="lab_tabs"
              roster={roster}
              past_matches={past_matches}
              upcoming_matches={upcoming_matches}
            />
          </Container>
        )}
      </TeamWrapper>
    </div>
  );
}

export default TeamPage;
