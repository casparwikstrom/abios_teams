import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ResultsTable from "./ResultsTable";
import Container from "@material-ui/core/Container";
import { MyLoader } from "../MyLoader";
import Banner from "../Banner";
import { useResults } from "../../api/results/useResults";

const dota_image_url =
  "https://png2.cleanpng.com/sh/b86cc99e3e26672421eee2ab456bb458/L0KzQYm3WMA5N6h2fpH0aYP2gLBuTfRwfJIySp9tZXbofsTsTf9nNaVtfZ9qbnPsdbB7k71kd6ZzjNd7LYP3grryhb1odJCyiN5qeXX1g377hfFuNZdxjeo2NXK5cba5Wck6PGY9S6U3MUW1RYS6UcYyPWQ4T6U6NEi0RoGAVr5xdpg=/kisspng-dota-2-defense-of-the-ancients-counter-strike-glo-players-team-flux-5b6ae299945833.1525331615337314816076.png";

export function ResultsPage() {
  const { isLoading, teams } = useResults();
  return (
    <div>
      {isLoading && <MyLoader />}
      {!isLoading && <Banner title={"dota"} image_url={dota_image_url} />}
      {!isLoading && (
        <Container fixed>
          <ResultsTable teams={teams} />
        </Container>
      )}
    </div>
  );
}
