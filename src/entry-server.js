import { createApp } from "./app";

export default (context) => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp(context);
    console.log("首屏的地址", context.url);
    router.push(context.url);

    router.onReady(() => {
      resolve(app);
    }, reject);
  });
};
