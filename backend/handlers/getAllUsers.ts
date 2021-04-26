import { search } from '../repository/user.ts'
export async function getAllUser ( ctx:any){
    try{
    const results = await search();
    ctx.response.body = results.rows;
} catch(error) {
    console.log(error);
}
}

