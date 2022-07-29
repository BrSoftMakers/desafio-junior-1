import { app } from "./shared/infra/http/app";

app.listen(3302, () =>
  console.log('Server is running, on PORT:3302')
);
