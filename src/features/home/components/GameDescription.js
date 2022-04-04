import { Grid, Typography } from "@mui/material";

const GameDescription = (props) => {
  return (
      //If game had a property description we could use it here
    <Grid container direction="column" spacing={3}>
      <Grid item xs={12}>
        <Typography>
          Enter a word that exists in English dictionary. You will get a score
          by the following rules:
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          a) 1 point for each unique letter.
          <br />
          b) 3 extra points if the word is a palindrome.
          <br />
          c) 2 extra points if the word is “almost palindrome”.
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          “Almost palindrome”: if by removing at most one letter from the word,
          the word will be a true palindrome.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default GameDescription;
