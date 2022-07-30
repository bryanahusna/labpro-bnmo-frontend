export default async function checkLoggedIn(){
    try{
        const res = await fetch(`http://localhost:3001/api/me`, { credentials: 'include' });
        if(res.status == 404){
            //alert('Your username was not found! Sign in again');
            window.open('/login', '_self');
            return {};
        }
        if(res.status != 200){
            window.open('/login', '_self');
            return {};
        }
        return res.json();
    } catch(err){
        console.log(err);
        return {};
    }
}
