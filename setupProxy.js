import  proxy from "http-proxy-middleware"

export default  function(app) {
  app.use(
    proxy(["/api", , "/otherApi"], { target: "http://localhost:4000" })
  );
};