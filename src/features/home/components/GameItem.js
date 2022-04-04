import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const GameItem = (props) => {
  const handleClick = (game) => {
    if (props.selectedGame && game.name === props.selectedGame.name) {
      props.setShowPlayground(!props.showPlayground);
    }
    props.onGameChangeHandler(game);
  };

  return (
    <Grid item key={props.item.name} xs={12} sm={6} md={4}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          //usually it would be loaded dinamically
          image="https://assetstorev1-prd-cdn.unity3d.com/key-image/9160120e-feb0-44b9-9487-869d92e12b15.jpg"
          alt={props.item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
        <CardActions>
          <Button fullWidth variant={"contained"} onClick={() => handleClick(props.item)}>
            <Typography>Get started</Typography>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GameItem;
