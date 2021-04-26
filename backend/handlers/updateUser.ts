import { update } from '../repository/user.ts';

export async function updateUser({request, params, response}: any){
    const body = request.body();
    const user: any = await body.value;

    console.log(user, params)
    await update(user.nombre, user.password, params.id)
    body.response("UPDATED USER")
}