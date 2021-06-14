import http from "../http.js"
class httpClass{
    test(){
        return http.post("/")
    }
}
export default new httpClass()
