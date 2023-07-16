"use client";

import React, { useState } from "react";
import Column from "./components/column";
import Button from "@mui/material/Button";
import {
  Card as MuiCard,
  CardContent,
  Typography,
  styled,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import "./page.css";

const HomePage: React.FC = () => {
  const [columns, setColumns] = useState<string[]>([]);
  const [activeColumn, setActiveColumn] = useState<string | null>(null);
  const [showAddCard, setShowAddCard] = useState<boolean>(false);
  const [newColumnName, setNewColumnName] = useState<string>("");

  const addColumn = () => {
    if (columns.length >= 5) {
      return alert("You can't add more than 5 columns");
    }

    setShowAddCard(!showAddCard);
    setActiveColumn(`column-${columns.length + 1}`);
    console.log(activeColumn);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addNewColumn();
    }
  };

  const addNewColumn = () => {
    if (newColumnName.trim() !== "") {
      const updatedColumns = [...columns, newColumnName];
      setColumns(updatedColumns);
      setShowAddCard(false);
      setNewColumnName("");
    }
  };

  return (
    <div>
      <h1 className="title">KanBan Board</h1>
      <div className="cards">
        {columns &&
          columns.map((column, index) => {
            const columnId = `column-${index + 1}`;
            return (
              <Column
                key={columnId}
                title={columns[index]}
                description="test task"
                onMouseEnter={() => setActiveColumn(columnId)}
              />
            );
          })}

        {!showAddCard && columns.length < 5 && (
          <Button variant="outlined" onClick={addColumn}>
            Add Column
          </Button>
        )}

        <div>
          {showAddCard && (
            <div className="addCard">
              <TextField
                id="outlined-basic"
                label="Column Title"
                variant="outlined"
                onChange={(e) => setNewColumnName(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <br />
              <Button variant="outlined" onClick={addNewColumn}>
                Add
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
