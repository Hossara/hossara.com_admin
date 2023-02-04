import {defineEventHandler} from "h3"
import users from "~/server/model/user"
import {tokenGenerator} from "~/server/utils/tokenGenerator";

export default defineEventHandler(async (event) =>
{
    console.log("GET /api/auth/login")

    const query = getQuery(event)

    const username = query.username
    const password = query.password

    if(!(username && password))
    {
        throw createError({
            statusCode: 400,
            statusMessage: 'username and password is required!',
        })
    }

    const ADMIN_USERNAME = process.env.ADMIN_USERNAME as string
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD as string

    if (ADMIN_USERNAME === username && ADMIN_PASSWORD === password)
        return {
            statusCode: 200,
            statusMessage: tokenGenerator("admin"),
        }
    else return {
        statusCode: 404,
        statusMessage: 'Username or Password is incorrect!',
    }
})