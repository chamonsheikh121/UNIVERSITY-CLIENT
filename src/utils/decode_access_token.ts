import {jwtDecode} from "jwt-decode"

export const decode_access_token =(token: string)=>{
    return jwtDecode(token)
}