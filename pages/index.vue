<script setup lang="ts">
definePageMeta({ layout: "account" })
useHead({ title: "Admin Login | Hossara.com" })
</script>

<template>
  <div id="login">
    <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
      <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
        <div class="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
          <div class="d-flex align-items-center justify-content-between mb-3">
            <a>
              <h3 class="text-primary"><i class="fa fa-user-edit me-2"></i>Hossara.com</h3>
            </a>
            <h3>Sign In</h3>
          </div>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-4">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
          </div>
          <button type="submit" class="btn btn-primary py-3 w-100 mb-4">Sign In</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>