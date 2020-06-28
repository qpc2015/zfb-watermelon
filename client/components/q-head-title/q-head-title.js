Component({
  mixins: [],
  data: {},
  props: {
    title: "默认",
    showMore: false
  },
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  methods: {
    gotoMore: function () {
      my.navigateTo({
        url: '/pages/case/case',
      })
    }
  },
});
