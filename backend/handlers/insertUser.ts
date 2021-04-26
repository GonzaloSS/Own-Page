import { insert } from '../repository/user.ts'
export async function addUser({response, request}: any){
    
    const body = await request.body();
    const user = await body.value;
   
    await insert(user);

    response.body = 'adding user';

}


