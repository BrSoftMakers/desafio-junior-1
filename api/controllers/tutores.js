import { db } from "../db.js";

export const getTutores = (_, res) => {
  const q = "SELECT * FROM tutores";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
