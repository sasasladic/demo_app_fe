import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect } from "react";

const GamePlayground = (props) => {
  useEffect(() => {
    window.scrollTo(0, 500)
  }, []);
  
  function handleSubmit(e) {
    e.preventDefault();
    const body = {
      input: props.gameFields,
      game: props.game.name,
      game_id: props.game.id,
    };

    props.handleSubmit(body);
  }

  function handleChangeValue(fieldName, event) {
    const newGameFields = props.gameFields.map((field) => {
      if (fieldName === field.name) {
        field.value = event.target.value;
      }
      return field;
    });

    props.setGameFields(newGameFields);
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {props.gameFields.map((field) => (
            <TextField
            margin="normal"
            required
            id={field.name}
            label={"Enter " + capitalizeFirstLetter(field.name)}
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(event) => handleChangeValue(field.name, event)}
          />
        ))}
        <br/>
        <Button
            type="submit"
            color="success"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
      </form>
    </div>
  );
};

export default GamePlayground;
