import { Op } from 'sequelize';

export function search(request, response, next) {
  const { name } = request.query;

  const where = {};

  if (name) {
    where.name = {
      [Op.like]: `%${name}%`
    };
  }

  request.where = where;
  return next();
}
