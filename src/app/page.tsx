"use client";

import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import Link from "next/link";

const HomePage = () => {
  // Function to generate a random number between min and max
  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // Function to generate a random image URL
  const getRandomImageUrl = () => {
    const imageId = getRandomNumber(1, 1000);
    return `https://picsum.photos/400/300?random=${imageId}`;
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <Link href="https://kanban-board-navy-theta.vercel.app/">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={getRandomImageUrl()}
                alt="Kanban Board V1"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Kanban Board Version 1
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>

        <Card sx={{ maxWidth: 345, marginLeft: "20px" }}>
          <Link href="/kanban">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={getRandomImageUrl()}
                alt="Kanban Board V2"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Kanban Board Version 2
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </Card>
      </Box>
    </Container>
  );
};

export default HomePage;
