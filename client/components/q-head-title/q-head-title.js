Component({
  mixins: [],
  data: {},
  props: {
    title: {
      type: String,
      value: "默认"
    },
    showMore: {
      type: Boolean,
      value: false
    }
  },
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  methods: {
    gotoMore: function () {
      wx.navigateTo({
        url: '/pages/case/case',
      })
    }
  },
});
