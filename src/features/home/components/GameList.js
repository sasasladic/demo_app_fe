import React from "react";
import GameItem from "./GameItem";
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";

const GameList = (props) => {
  return (
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
        {props.games.map((game) => (          
          <GameItem
            key={game.id}
            item={game}
            onGameChangeHandler={props.onGameChangeHandler}
            selectedGame={props.selectedGame}
            setShowPlayground={props.setShowPlayground}
            showPlayground={props.showPlayground}
            />
        ))}
        </Grid>
      </Container>
  );
};

export default GameList;
