import accommodations from "../mock-data/accommodation";
import AccommodationCard from "../components/cards/AccommodationCard";
import { Box, Container, Typography } from "@mui/material";
import Navbar from "../components/navbar/navbar";

export default function Homepage() {
  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Navbar />
      </Box>

      {accommodations.map((acc) => (
        <AccommodationCard key={acc.id} accommodation={acc} />
      ))}
    </Container>
  );
}
