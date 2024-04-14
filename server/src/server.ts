import { createServer } from "node:http";
import { signupRoute } from "./routers/auth/signup";

const port = 3000;

export const server = createServer((req, res) => {
  signupRoute(req, res);
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
