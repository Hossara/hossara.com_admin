import {checkLoginSession, getUserData, login} from "~/auth"
import axios from "axios"
export default defineNuxtRouteMiddleware(() =>
{
    if (checkLoginSession())
    {
    }
    else
    {
        useCookie("hossara_user").value = null
        navigateTo("/?act=l_exp")
    }
})