import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function AccommodationCard({ accommodation }) {
  return (
    <Card
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={accommodation.image}
        alt={accommodation.name}
      />
      <CardContent>
        <Typography variant="h6">{accommodation.name}</Typography>
        <Typography
          variant="body2"
          color={accommodation.isAvailable ? "green" : "red"}
        >
          {accommodation.isAvailable ? "Available" : "Not Available"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {accommodation.category}
        </Typography>
        <Button
          variant="outlined"
          component={Link}
          to={`/accommodation/${accommodation.id}`}
          sx={{ mt: 2 }}
        >
          More details
        </Button>
      </CardContent>
    </Card>
  );
}
