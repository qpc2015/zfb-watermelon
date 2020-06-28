
Page({
  data: {
    services: [{
      "title": "小程序制作",
      checked: true,
      "consultid": 0,
    },
    {
      "title": "APP开发",
      "consultid": 1,
    },
    {
      "title": "网站建设",
      "consultid": 2,
    },
    {
      "title": "商城建设",
      "consultid": 3,
    }, {
      "title": "H5页面制作",
      "consultid": 4,
    }],
    username: '',
    contactNum: '',
    seleteServece:'小程序制作',
    wxcode: '',
    tipShow: false,
    title: '请留下您的联系方式,手机或微信至少一项',
    subTitle: '',
    type: 'fail'
  },
  onLoad() { },
  onChange(e){
    console.log(e.detail.value);
    this.setData({
      seleteServece: e.detail.value
    });
  },
  submitDidClick: function (e) {
    console.log(this.data.contactNum);
    console.log(this.data.wxcode + this.data.username);
    if (this.data.contactNum.length == 11 || this.data.wxcode.length > 0) {
      const db = wx.cloud.database();
      db.collection('consultList').add({
        data: {
          name: this.data.username,
          phone: this.data.contactNum,
          wxcode: this.data.wxcode,
          demand: style
        },
        success: res => {
          Toast.success('需求已提交请耐心等待');
          console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
        },
        fail: err => {
          Toast.fail('您的需求提交失败,请稍后尝试');
          console.error('[数据库] [新增记录] 失败：', err)
        }
      });
    } else {//信息不全
      this.setData({
        tipShow:true
      });
      setTimeout(() => {
        this.setData({
          tipShow:false
        })
      }, 2000);
    }

  },
  nameOnChange: function (event) {
    this.setData({
      username: event.detail
    });
  },
  numOnChange: function (event) {
    this.setData({
      contactNum: event.detail
    });
  },
  wxOnChange: function (event) {
    this.setData({
      wxcode: event.detail
    });
  }
});
