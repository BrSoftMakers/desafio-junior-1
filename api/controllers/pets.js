import { db } from "../db.js";

export const getPets = (_, res) => {
  const q = "SELECT * FROM pets";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};