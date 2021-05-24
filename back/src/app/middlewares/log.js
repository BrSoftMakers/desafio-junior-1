export default (request, response, next) => {
  const { method, url, params, query, body, ip } = request;
  // eslint-disable-next-line no-console
  console.log(method, url, params, query, body, ip);

  next();
};
