import routes from "@routes";

export const redirectToLogin = () => {
  const actualHref = window.location.href;
  if (!(actualHref.includes(routes.login) || actualHref.includes(routes.register))) {
    window.location.href = `#${routes.login}`;
  }
};
