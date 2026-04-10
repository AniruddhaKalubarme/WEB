const http = new EasyHTTP;

http.get('https://codehelp-apis.vercel.app/api/get-blogs')
.then((data)=> console.log(data))