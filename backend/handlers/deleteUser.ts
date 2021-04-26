import { remove } from "../repository/user.ts";

export async function deleteUser({ params, response }: any) {
  await remove(params.id);
  response.body = "DELETED USER"
}
