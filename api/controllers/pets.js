import { db } from "../db.js";

export const getPets = (_, res) => {
  const q = "SELECT * FROM pets";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addPets = (req, res) => {
  const q = "INSERT INTO pets(`nomePet`, `tipo`, `raca`, `idade`) VALUES(?)";

  const values = [
    req.body.nomePet,
    req.body.tipo,
    req.body.raca,
    req.body.idade,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Pet criado com sucesso.");
  });
};

export const updatePets = (req, res) => {
  const q = "UPDATE pets SET `nomePet` = ?, `tipo` = ?, `raca` = ?, `idade` = ? WHERE `id` = ?";

  const values = [
    req.body.nomePet,
    req.body.tipo,
    req.body.raca,
    req.body.idade,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Pet atualizado com sucesso.");
  });
};

export const deletePets = (req, res) => {
  const q = "DELETE FROM pets WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Pet deletado com sucesso.");
  });
};