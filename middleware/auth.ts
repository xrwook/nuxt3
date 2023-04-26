export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to)
  console.log(from)
  const nuxt = useNuxtApp();
  const userInfo: UserInfoInf = nuxt.$pinia?.state?.value?.userInfo as UserInfoInf;
  if(userInfo.isLogin === false){
    return navigateTo('/login')
  }
})
