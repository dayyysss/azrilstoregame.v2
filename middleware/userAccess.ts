export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie("access_token").value;
  if (!token) {
  if (to.path !== "/login") {
  return navigateTo("/login")
  }
  } else {
  if (to.path !== "/product" && to.path !== "/cart") {
  return navigateTo(to.path);
  }
  }
  })