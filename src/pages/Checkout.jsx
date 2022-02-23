import React from "react";
import {
  Typography,
  Button,
  ButtonGroup,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";

import CenterPage from "../components/Center-page";

export default () => {
  const [counter, setCounter] = React.useState(1);

  return (
    <CenterPage bgColor="#f0f0fa">
      <Card raised sx={{ maxWidth: 345, borderRadius: "12px" }}>
        <CardMedia
          component="img"
          height="140"
          image="/image.jpg"
          alt="Cleansing set image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            The only Learning Loop Cleansing Set
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            repellendus culpa praesentium quae a earum? Nihil libero suscipit
            provident, excepturi iure magni quos sed maiores ullam illo
            accusamus dolorem amet quae ipsam dignissimos sunt perspiciatis?
            Dignissimos magni obcaecati est nihil excepturi quis impedit, minus
            debitis enim dolore, modi reiciendis ea.
          </Typography>
        </CardContent>
        <CardActions sx={{display: "flex", justifyContent: "space-between"}}>
          <ButtonGroup
            aria-label="small outlined button group"
            sx={{ padding: "8px" }}
          >
            {
              <Button
                disabled={counter <= 1}
                onClick={() => {
                  setCounter(counter - 1);
                }}
              >
                -
              </Button>
            }

            {<Button disabled>{counter}</Button>}

            <Button
              disabled={counter >= 10}
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              +
            </Button>
          </ButtonGroup>

          <Button
            onClick={() => {
            }}
          >
            Buy now
          </Button>
        </CardActions>
      </Card>
    </CenterPage>
  );
};
