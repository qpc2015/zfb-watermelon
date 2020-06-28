Page({
    data: {
    background: ['https://6368-charg-q0fve-1300598164.tcb.qcloud.la/mini/benner.png?sign=c2980be8f9c41104b71e75b998a8c867&t=1588638357'],
    // indicatorDots: true,
    // autoplay: true,
    interval: 2000,
    duration: 500,
    topList:[
      {
        icon:"../../images/intro.png",
        title:"公司简介"
      },
      {
        icon:"../../images/case.png",
        title:"成功案例"
      },
      {
        icon:"../../images/range.png",
        title:"服务范围"
      }
    ],
    caseList:[
      {
        image:"../../images/intro.png",
        title:"漫鱼按钮",
        content:"合法卡萨话费卡收到货合法卡萨话费卡收到货"
      },
      {
        image:"../../images/intro.png",
        title:"成功案例",
        content:"合法卡萨话费卡收到货合法卡萨话费卡收到货"
      }
    ],
    rangeList:[
      {
        icon:"../../images/miniapp.png",
        title:"小程序定制开发",
      },
      {
        icon:"../../images/app.png",
        title:"App开发制作"
      },
      {
        icon:"../../images/pc.png",
        title:"网站开发建设"
      }
    ]
  },
  onLoad(query) {

  },
    getSuccessCase: function(){
    db.collection('successCase').get({
      success: (res) => {
        console.log(res);
        if(res.data.length>=2){
          const arr = res.data;
          let newarr = [arr[0],arr[1]];
          this.setData({
            caseList:newarr
          })
        }
      }
    });
  },
  rangeDidClick: function(e){
    const indexId = e.currentTarget.dataset.index;
    const item = this.data.rangeList[indexId];
    my.navigateTo({
      url: '/pages/detail/detail?title='+item.title+'&detail='+item.detailUrl,
    })
  },
});
