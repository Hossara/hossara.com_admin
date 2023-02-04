import {LoginSession} from "~/interface"

export const checkLoginSession = (): boolean =>
{
    if (useCookie("hossara_user").value)
    {
        const session = (useCookie("hossara_user").value as any) as LoginSession

        return !(session["access"] === null || typeof session["access"] === "undefined")
    }
    else return false
}

export const logout = () =>
{
    useCookie("hossara_user").value = null
    location.href = "/"
}

export const login = (access: string) =>
{
    useCookie("hossara_user").value = JSON.stringify({ access: access })
}

export const getUserData = () =>
{
    if (useCookie("hossara_user").value)
        return (useCookie("hossara_user").value as any) as LoginSession
    else
    {
        useCookie("hossara_user").value = null
        location.href = "/?act=l_exp"
    }
}