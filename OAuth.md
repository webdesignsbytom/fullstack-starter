# OAuth

## Google OAuth

1. Set up a Google Developer Console.
2. Create a project. - You only need to enter a name.
3. If you already have a project just click the action button and go to settings.
4. Go to API settings
5. Go to OAuth consent screen.
6. Create a new consent screen
   1. Add a name
   2. recovery email
   3. You dont need a app domain
   4. For authorized domains use localhost.com for development
   5. Use your domain for production
   6. Add contact information
7. Add scope for the consent screen
8. Select the first 3 options for auth consent
   
```
.../auth/userinfo.email	See your primary Google Account email address
.../auth/userinfo.profile	See your personal info, including any personal info you've made publicly available
openid	Associate you with your personal info on Google
```

9. When you first set up it will be in test mode or open mode
10. You must add test users if its test mode
11. Next you need to set up credentials

### Credentials

1. We want a oauth client ID tpye
2. Select a web application
3. The name doesnt matter.
4. The authorized javascript origins are where the requests are coming from and where is allowed to.
5. Add http://localhost:3000 
6. add http://127.0.0.1:4000/oauth to Authorized redirect URIs
7. 