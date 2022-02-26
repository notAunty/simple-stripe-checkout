import React from "react";
import {
  Typography,
  Button,
  ButtonGroup,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Box,
  Stack,
} from "@mui/material";

import CenterPage from "../components/Center-page";

export default () => {
  const [quantity, setQuantity] = React.useState(1);

  async function redirectToCheckout(stripe) {
    await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1KVvD0EDl9hktgUM05vWknAh",
          quantity: quantity,
        },
      ],
      mode: "payment",
      successUrl: "/success/",
      cancelUrl: "/cancel/",
    });
  }

  return (
    <CenterPage bgColor="#f0f0fa">
      <Stack
        spacing={4}
        sx={{
        }}
      >
        <Card sx={{ maxWidth: 345, borderRadius: "12px" }}>
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
              RM 99.99 each
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              quis commodi vero excepturi maiores esse, incidunt quia. Eaque,
              minus accusamus?
            </Typography>
          </CardContent>
          <CardActions
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <ButtonGroup
              aria-label="small outlined button group"
              sx={{ padding: "8px" }}
            >
              {
                <Button
                  disabled={quantity <= 1}
                  onClick={() => {
                    setQuantity(quantity - 1);
                  }}
                >
                  -
                </Button>
              }

              {<Button disabled>{quantity}</Button>}

              <Button
                disabled={quantity >= 10}
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
              >
                +
              </Button>
            </ButtonGroup>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345, borderRadius: "12px" }}>
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              RM {Math.round(99.99 * quantity * 100, 2) / 100}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Grant total
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={() => {}} >Checkout now</Button>
          </CardActions>
        </Card>
      </Stack>
    </CenterPage>
  );
};
