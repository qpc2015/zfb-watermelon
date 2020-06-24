if(!self.__appxInited) {
self.__appxInited = 1;
require('@alipay/appx-compiler/lib/sjsEnvInit');

require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}

if(AFAppX.compilerConfig){ AFAppX.compilerConfig.component2 = true; }

function success() {
require('../../client/app');
require('../../client/components/q-icon-item/q-icon-item?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/components/q-head-title/q-head-title?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/components/q-case-item/q-case-item?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/components/q-range-item/q-range-item?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/node_modules/mini-ali-ui/es/flex/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/node_modules/mini-ali-ui/es/flex/flex-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/pages/index/index?hash=a7ad595a6efc060ceea6bab5dd8f9fc15de0bd98');
require('../../client/pages/consult/consult?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../client/pages/contact/contact?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}