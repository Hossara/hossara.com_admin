<script setup lang="ts">
import {useNuxtApp, useRouter} from "#app"
import {pageLoader} from "~/global"
import {checkLoginSession, login} from "~/auth"

definePageMeta({ layout: "account" })
useHead({ title: "Admin Login | Hossara.com" })

const username = useState(() => "")
const password = useState(() => "")

onBeforeMount(() =>
{
    pageLoader.show()
    if (checkLoginSession()) useRouter().replace("/panel")
    else pageLoader.hide()
})

onMounted(() =>
{
    const route = useRoute()
    switch (route.query["act"])
    {
        case "l_exp":
            useNuxtApp().$toast.error("Login expired!")
            break

        case "inv_tk":
            useNuxtApp().$toast.error("Login information is not valid!")
            break
    }
})

const submit = async () =>
{
    pageLoader.show()

    const { data, error } = await useAsyncData('projects', () => $fetch('/api/auth/login', {
        method: "POST",
        query: {
            username: username.value,
            password: password.value
        }
    }))

    pageLoader.hide()

    if(error.value)
    {
        console.log(error.value)
        useNuxtApp().$toast.error("Something went wrong!")
    }
    else
    {
        switch (data.value!.statusCode)
        {
            case 200:
                useNuxtApp().$toast.success("You logged in successfully!")
                login(data.value!.statusMessage)
                await useRouter().replace("/panel")
                break
            case 404:
                useNuxtApp().$toast.error(data.value!.statusMessage)
                break
            default:
                console.log(data.value)
                useNuxtApp().$toast.error("Wrong replay from server!")
                break
        }
    }
}
</script>

<template>
  <form id="login" @submit.prevent="submit">
    <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
      <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
        <div class="bg-secondary rounded-4 p-4 p-sm-4 my-4 mx-3">
          <div class="d-flex align-items-center justify-content-between mb-5">
            <a>
              <h3 class="text-primary"><i class="fa fa-user-edit me-2"></i>Hossara.com</h3>
            </a>
            <h3>Sign In</h3>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="ABC" v-model="username" required>
            <label for="floatingInput">Username</label>
          </div>
          <div class="form-floating mb-4">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password" required>
            <label for="floatingPassword">Password</label>
          </div>
          <button type="submit" class="btn btn-primary py-3 w-100">Sign In</button>
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped>

</style>