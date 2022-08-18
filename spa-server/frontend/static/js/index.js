import Home from "./pages/Home.js";
import Posts from "./pages/Posts.js";
import Settings from "./pages/Settings.js";

const router = async () => {
  const routes = [
    { path: "/", view: Home },
    { path: "/posts", view: Posts },
    { path: "/settings", view: Settings },
  ];

  const pageMatches = routes.map((route) => {
    return {
      route,
      isMatch: route.path === location.pathname,
    };
  });

  let match = pageMatches.find((pageMatch) => pageMatch.isMatch);
  const page = new match.route.view();
  document.querySelector("#root").innerHTML = await page.getHtml();
};

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      history.pushState(null, null, e.target.href); // 링크 이동
      router();
    }
  });
  router();
});

// 뒤로가기 history 남기기
window.addEventListener("popsate", () => {
  router();
});
