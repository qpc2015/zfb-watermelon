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
require('../../client/node_modules/vant-aliapp/dist/dist/info/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/node_modules/vant-aliapp/dist/dist/icon/index?hash=4de85a9e211a4f23b406a4d3b216ce80ac17c38c');
require('../../client/node_modules/vant-aliapp/dist/dist/cell/index?hash=495a3b63c808f013c82b45f3232752b8d9691d00');
require('../../client/node_modules/vant-aliapp/dist/dist/field/index?hash=b773cebd3e18548ef3300462a01d720ea6b7638a');
require('../../client/node_modules/mini-ali-ui/es/loading/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/node_modules/mini-ali-ui/es/button/index?hash=e1617a0257fb9de746f60d50b03404ad924976c9');
require('../../client/node_modules/mini-ali-ui/es/am-icon/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/node_modules/mini-ali-ui/es/message/index?hash=febd4c40992222524e0db12a74760a28f8f9b339');
require('../../client/node_modules/vant-aliapp/dist/dist/loading/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/node_modules/vant-aliapp/dist/dist/transition/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/node_modules/vant-aliapp/dist/dist/overlay/index?hash=260e6e1467040123ed8e7387d1f514be8f22ffe6');
require('../../client/node_modules/vant-aliapp/dist/dist/toast/index?hash=7fc93bb119833597e82c06b54bae99386a1e4b17');
require('../../client/node_modules/vant-aliapp/dist/dist/cell-group/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/pages/index/index?hash=a7ad595a6efc060ceea6bab5dd8f9fc15de0bd98');
require('../../client/pages/consult/consult?hash=48088085819733a729c35321329202bf1ebf8d2e');
require('../../client/pages/contact/contact?hash=af4a1131f6f9bec545538fea781173071ae482fa');
require('../../client/pages/case/case?hash=f3846ff96b82a88b495ecfdca26e988c0a6d3373');
require('../../client/pages/case/case?hash=f3846ff96b82a88b495ecfdca26e988c0a6d3373');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}