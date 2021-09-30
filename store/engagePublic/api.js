import axios from "axios"
const engagePublic = axios.create({
  baseURL: "http://stage.dev.h2.hydracommunity.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function engagepublic_post_apih2_login_create(payload) {
  return engagePublic.post(`/api:h2/login`)
}
export const apiService = { engagepublic_post_apih2_login_create }
