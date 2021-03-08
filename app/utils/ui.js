import NProgress from "nprogress";

export const startLoading = () => NProgress.start();

export const finishLoading = () => NProgress.done();