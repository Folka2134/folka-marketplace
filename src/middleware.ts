import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({

  publicRoutes: ["/", "/products", "/signin", "/signout"]

});


export const config = {

  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],

};