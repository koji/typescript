import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { ThreadsAPI } from "threads-api";

dotenv.config();
const PORT = 3000;
const app = express();
const port = process.env.PORT || PORT;

app.get("/", async (req: Request, res: Response) => {
  const data = await getThreadsData();
  const text = data?.map((d) => d.thread_items[0].post.caption?.text);
  res.send(text);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

const getThreadsData = async () => {
  const threadsAPI = new ThreadsAPI();

  const username = "zuck";

  // 👤 Details for a specific user
  const userID = await threadsAPI.getUserIDfromUsername(username);
  if (!userID) {
    return;
  }
  const user = await threadsAPI.getUserProfile(userID);
  console.log(JSON.stringify(user));
  const posts = await threadsAPI.getUserProfileThreads(userID);

  return posts;
};
