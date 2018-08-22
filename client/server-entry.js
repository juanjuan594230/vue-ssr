import createApp from './create-app';

export default (context) => {
  return new Promise((resolve, reject) => {
    const {app, router} = createApp();
    router.push(context.url);
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      // 匹配不到的路由，执行 reject 函数，并返回 404
      if (!matchedComponents.length) {
        return reject(new Error('no matched'));
      }
      resolve(app);
    }, reject);
  });
};
