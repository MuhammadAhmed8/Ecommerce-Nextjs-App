import Router from 'next/router';


class AuthService {
   constructor(){}

   saveToken(token) {
    localStorage.setItem("rht",token);
   }

   getToken() {
    const token = localStorage.getItem("rht")
    return token;
  }

   checkAuthToken(token){
    return FetchService.isofetchAuthed(`/auth/validate`, { token }, "POST")
  }

   async authenticateTokenSsr(ctx) {
    const cookies = new Cookies(ctx.req ? ctx.req.headers.cookie : null)
    const token = cookies.get("rht")

    const response = await this.checkAuthToken(token)
    if (!response.success) {
        Router.replace('/login')
    }
  }
}

export default new AuthService()