import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import api from "../../../services/api";
import GameList from "../components/GameList";
import GamePlayground from "../components/GamePlayground";
import GameHistory from "../components/GameHistory";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import GameDescription from "../components/GameDescription";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Playground = () => {
  const [games, setGames] = useState([]);

  const [selectedGame, setSelectedGame] = useState(null);
  const [gameFields, setGameFields] = useState([]);
  const [userScores, setUserScores] = useState([]);
  const [showPlayground, setShowPlayground] = useState(true);
  const [newScore, setNewScore] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const getGames = async () => {
      setIsLoading(true);
      try {
        const response = await api(history)(`/game`);
        if (response && response.data) {
          setGames(response.data.data);
        }
      } catch (error) {
        alert(error.response.data.message);
      }
      setIsLoading(false);
    };

    getGames();
  }, [history]);

  useEffect(() => {
    if (selectedGame) {
      const listFields = async () => {
        try {
          setIsLoading(true);
          const response = await api(history)(
            `/game/fields?game=${selectedGame.name}`
          );
          if (response && response.data) {
            setGameFields(response.data.data);
          }
        } catch (error) {
          // Handle Error Here
          console.log(error);
        }
        setIsLoading(false);
      };

      const userHistory = async () => {
        try {
          setIsLoading(true);
          const response = await api(history)(
            `/user/history?gameId=${selectedGame.id}`
          );
          if (response && response.data) {
            setUserScores(response.data.data);
          }
        } catch (error) {
          // Handle Error Here
          console.log(error);
        }
        setIsLoading(false);
      };

      listFields();
      userHistory();
    }
  }, [history, selectedGame]);

  useEffect(() => {
    if (selectedGame) {
      const listFields = async () => {
        try {
          setIsLoading(true);
          const response = await api(history)(
            `/game/fields?game=${selectedGame.name}`
          );
          if (response && response.data) {
            setGameFields(response.data.data);
          }
        } catch (error) {
          // Handle Error Here
          console.log(error);
        }
        setIsLoading(false);
      };

      const userHistory = async () => {
        try {
          setIsLoading(true);
          const response = await api(history)(
            `/user/history?gameId=${selectedGame.id}`
          );
          if (response && response.data) {
            setUserScores(response.data.data);
          }
        } catch (error) {
          // Handle Error Here
          console.log(error);
        }
        setIsLoading(false);
      };

      listFields();
      userHistory();
    }
  }, [history, selectedGame]);

  const handlePlaygroundSubmit = (data) => {
    console.log(data);
    const postForm = async (data) => {
      try {
        const response = await api(history)("/game/play", {
          method: "post",
          data: data,
        });
        console.log(response);
        if (response && response.data && response.data.data) {
          setUserScores([response.data.data, ...userScores]);
          setNewScore(response.data.data.points);
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    };

    postForm(data);
  };

  return (
    <div>
      <Typography variant="h6" sx={{ mb: 5 }}>
        Choose a game to play:
      </Typography>
      <GameList
        games={games}
        onGameChangeHandler={setSelectedGame}
        selectedGame={selectedGame}
        setShowPlayground={setShowPlayground}
        showPlayground={showPlayground}
      />
      {isLoading && <p>Loading...</p>}
      {showPlayground && selectedGame && (
        <Container maxWidth="md" component="main" sx={{ mt: 5 }}>
          <GamePlayground
            game={selectedGame}
            gameFields={gameFields}
            setGameFields={setGameFields}
            handleSubmit={handlePlaygroundSubmit}
          />
          {newScore && <Typography sx={{mb:2}}>Congrats, you won: {newScore} points</Typography>}

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#3f51b5" }} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography variant="subtitle1" color="text.secondary">
                Game Description
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Box mt={8}>
                <GameDescription game={selectedGame} />
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#3f51b5" }} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography variant="subtitle1" color="text.secondary">
                History of results
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Box mt={8}>
                <GameHistory scores={userScores} />
              </Box>
            </AccordionDetails>
          </Accordion>
        </Container>
      )}
    </div>
  );
};

export default Playground;
