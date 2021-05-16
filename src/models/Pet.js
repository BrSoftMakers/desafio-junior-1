import { v4 } from "uuid";

import db from "../db";

class Pet {
  create({ name, age, type, breed, owner }) {
    return db
      .get("pets")
      .push({
        id: v4(),
        name,
        age,
        type,
        breed,
        owner
      })
      .write();
  }

  count() {
    return db.get("pets").value().length;
  }

  read(page = 1) {
    return db
      .get("pets")
      .slice((page - 1) * 10, page * 10)
      .value();
  }

  readByID(id) {
    return db.get("pets").filter({ id }).first().value();
  }

  update(where, value) {
    return db.get("pets").find(where).assign(value).write();
  }

  delete(id) {
    return db.get("pets").remove({ id }).write();
  }
}

export default new Pet();
