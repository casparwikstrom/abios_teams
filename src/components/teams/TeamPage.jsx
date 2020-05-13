import React from "react";
import { useParams } from "react-router";
import Banner from "../Banner";
import { MyLoader } from "../MyLoader";
import Container from "@material-ui/core/Container";
import LabTabs from "./LabTabs";
import styled from "styled-components";
import { useTeam } from "../../api/teams/useTeam";

const TeamWrapper = styled.div`
  .makeStyles-root-9 {
    margin-top: 2% !important;
  }
`;

function TeamPage() {
  const { id } = useParams();
  const { isLoading, team } = useTeam(id);
  return (
    <div>
      {isLoading && <MyLoader />}
      {!isLoading && (
        <Banner
          title={team.team_info.info.name}
          image_url={team.team_info.picture}
        />
      )}
      <TeamWrapper>
        {!isLoading && (
          <Container fixed>
            <LabTabs
              className="lab_tabs"
              roster={team.roster}
              past_matches={team.matches.past_matches}
              upcoming_matches={team.matches.upcoming_matches}
            />
          </Container>
        )}
      </TeamWrapper>
    </div>
  );
}

export default TeamPage;
