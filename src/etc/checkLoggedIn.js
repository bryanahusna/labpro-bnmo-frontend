import { backendHost } from "../config";

export default async function checkLoggedIn(){
    try{
        const res = await fetch(`${backendHost}/api/me`, { credentials: 'include' });
        if(res.status == 404){
            //alert('Your username was not found! Sign in again');
            window.open(`${process.env.PUBLIC_URL}/login`, '_self');
            return {};
        }
        if(res.status != 200){
            window.open(`${process.env.PUBLIC_URL}/login`, '_self');
            return {};
        }
        return res.json();
    } catch(err){
        console.log(err);
        return {};
    }
}
