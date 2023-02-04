import jwt from "jsonwebtoken"

export const tokenGenerator = (user: "admin" | "user"): string =>
{
    // ToDo: Complete here later
    const payload = user === "admin" ?
        {
            role: "admin",
            username: process.env.ADMIN_USERNAME,
            password: process.env.ADMIN_PASSWORD
        }
        :
        {  }

    return jwt.sign(
        payload, process.env.JWT_ACCESS_TOKEN_PRIVATE_KEY as string,
        {expiresIn: "30m"}
    )
}