Component({
  props: { videoSrc: '' },
  data: { time: 0 },
  methods: {
    onShow() {
      this.videoContext = my.createVideoContext('video');
    },
    onPlay() {},
    onPause() {},
    onEnded() {},
    onError() {},
    onTimeUpdate(e) {
      this.setData({ time: e.detail.currentTime });
    },
    onResetTime(e) {
      this.setData({ time: 0 });
    },
  },
});
