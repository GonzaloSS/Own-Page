import client from "../db.ts";
import User from "../model/user.ts";
export async function search(params: User = {}) {
  const isSpecific = Object.keys(params).length !== 0;

  if (isSpecific) {
    return await client.execute("SELECT * FROM user WHERE id=?",[params.id])
  } else {
    return await client.execute("SELECT * FROM user");
  }
}

export async function insert({ nombre, password }: User) {
  await client.execute("INSERT INTO user(nombre, password) VALUES(?,?)", [
    nombre,
    password,
  ]);
}

export async function remove(id: number){
    return await client.execute("DELETE FROM user WHERE id=?", [id])
}

export async function update(nombre: string, password: string, id: number){
    console.log(password, id)
    const prueba= await client.execute(
        "UPDATE `user` SET `nombre`='Javier',`password`='puto' WHERE id = 1", 
    [
        nombre,
        password,
        id
    ])
    console.log(prueba)
}
