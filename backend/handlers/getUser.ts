import { search } from "../repository/user.ts";
export async function getUser({ response, params }: any) {
  const result = await search(params);
  
  if (result.rows === []) {
    response.body = "No existe";
  } else {
    response.body = result.rows;
    console.log(result.rows);
  }
}
