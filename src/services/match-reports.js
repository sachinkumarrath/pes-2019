import express from "express";

const matchReports = express.Router();

matchReports.get("/getMatchReports", (req, res) => {
  res.send("router established");
});

matchReports.get("/", (req, res) => {
  res.send("router established with default");
});

matchReports.get("/getReports", (req, res) => {
  res.send("router established1");
});

export {matchReports};