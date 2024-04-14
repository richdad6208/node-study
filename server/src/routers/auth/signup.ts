import { IncomingMessage, ServerResponse } from "http";

export const signupRoute = (req: IncomingMessage, res: ServerResponse) => {
  let data = "";

  const { url, method } = req;

  if (url === "/signup" && method === "POST") {
    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      console.log(data);
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(JSON.stringify({ data: "Data recieved" }));
    });
  }
};
