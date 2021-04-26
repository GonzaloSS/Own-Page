import { Router } from "https://deno.land/x/oak/mod.ts";
import { addUser } from "../handlers/insertUser.ts";
import { updateUser } from "../handlers/updateUser.ts";
import { deleteUser } from "../handlers/deleteUser.ts";
import { getUser } from "../handlers/getUser.ts";
import { getAllUser } from "../handlers/getAllUsers.ts";
const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Holas";
})
  .get("/user/:id", getUser)
  .get("/user/", getAllUser)
  .post("/insertUser", addUser)
  .put("/updateUser/:id", updateUser)
  .delete("/deleteUser/:id", deleteUser);

export default router;
