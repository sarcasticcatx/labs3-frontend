import { useParams } from "react-router-dom";
import accommodations from "../mock-data/accommodation";
import { Container, Typography, CardMedia } from "@mui/material";

export default function AccommodationList() {
  const { id } = useParams();
  const accommodation = accommodations.find((a) => a.id === parseInt(id));

  if (!accommodation) {
    return <Typography>Accommodation not found</Typography>;
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          backgroundColor: "lightpink",
          padding: "8px",
          borderRadius: "4px",
          display: "inline-block",
        }}
      >
        {accommodation.name}
      </Typography>
      <CardMedia
        component="img"
        height="300"
        image={accommodation.image}
        alt={accommodation.name}
      />
      <Typography
        variant="body1"
        sx={{
          mt: 2,
        }}
      >
        {accommodation.isAvailable}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          mt: 1,
          backgroundColor: "lightpink",
          padding: "8px",
          borderRadius: "4px",
          display: "inline-block",
        }}
      >
        Rooms: {accommodation.numRooms}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          mt: 1,
          backgroundColor: "lightpink",
          padding: "8px",
          borderRadius: "4px",
          width: "500px",
        }}
      >
        {accommodation.description}
      </Typography>
    </Container>
  );
}
