import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Container,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import { useActions, useAppSelector } from "../../hooks/storeHook";

export const SearchPokemon = () => {
  const [pokemonName, setPokemonName] = useState<string>("");

  const { resultLoading, result } = useAppSelector(
    (state) => state.searchReducer
  );
  const { searchController } = useActions();

  const handleSearch = (e: any) => {
    e.preventDefault();
    searchController({ pokemonName });
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSearch}
      >
        <div>
          <h2>Search Pokemon: </h2>
          <h4>examples: ditto, unown, girafarig, dunsparce</h4>
          <TextField
            id="standard-basic"
            label="Pokemon Name"
            variant="standard"
            onChange={(e) => setPokemonName(e.target.value)}
          />
          <Button type="submit" variant="contained">
            Search
          </Button>
        </div>
        {!resultLoading && result && (
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                  Pokemon's Detail:
                </Typography>
                <List>
                  <ListItem>
                    Name: <ListItemText primary={result.name} />
                  </ListItem>
                  <ListItem>
                    Weight: <ListItemText primary={result.weight} />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            <Accordion>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Abilities</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {result.abilities.map((ability) => {
                  return (
                    <div key={ability.ability.name}>{ability.ability.name}</div>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          </div>
        )}
      </Box>
    </Container>
  );
};
