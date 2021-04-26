import { Client } from "https://deno.land/x/mysql/mod.ts";

const client = await new Client().connect({
    hostname: '127.0.0.1',
    username: 'root',
    db: 'users',
    password: ''
})

export default client;