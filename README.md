# NextJS Protected Routes Example

This is an example project demonstrating protected routes in NextJS

## Description

Here are 4 methods of protectng routes without the use tof NextAuth. 
- Client side uses a `useLayoutEffect` react hook to check session status before page is rendered. 
- Client side with HOC uses a High Order Component (HOC) that wraps the page. This is just a cleaner way of achieving the same thing. 
- Server side only needs an if statement because the page is rendered on server and will make the decision to redirect before you can visit the page.
- Middleware is the best choice, this has all your protected routes in an array and will not let you visit these pages.

### Installing

```
npm install
```
