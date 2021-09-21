<template>
    <div :id="videoId" class="video-js-player-container" allowfullscreen>
        <video-player
                playsinline
                oncontextmenu="return false;"
                :options="playerOptions"
                class="vjs-big-play-centered"
                @canplay="canplay"
        />
    </div>
</template>

<script>
    import videojs from "video.js";
    import "video.js/dist/video-js.css";
    import { videoPlayer } from "vue-video-player";
    window.videojs = videojs;
    const zhCN = require("video.js/dist/lang/zh-CN.js");
    export default {
        name:"VideoPlayer",
        components: {
            videoPlayer
        },
        props: {
            // 视频地址
            src: {
                required: true,
                default: ""
            },
            // 是否自动播放
            autoplay: {
                type: Boolean,
                default: false
            },
            loop: {
                type: Boolean,
                default: true
            },
            // 视频海报
            poster: {
                type: String,
                default: ""
            },
            // 视频高度
            height: {
                type: Number,
                default: 9 * 50
            },
            // 视频宽度
            width: {
                type: Number,
                default: 16 * 50
            }
        },
        data() {
            return {
                video: "",
                videoId: "videojs-" + +new Date(),
                playerOptions: {
                    languages: zhCN,
                    preload: "auto",
                    fluid: true,
                    sources: [
                        {
                            src: ""
                        }
                    ],
                    loop: this.loop,
                    autoplay: this.autoplay,
                    poster: this.poster,
                    height: this.height,
                    width: this.width
                }
            };
        },
        watch: {
            src(val) {
                if (val) {
                    this.playerOptions.sources[0].src = val;
                }
            }
        },
        mounted() {
            // 分发时长
            this.video = document.querySelector(`#${this.videoId} .vjs-tech`);
            this.video.oncanplay = e => {
                this.$emit("subVideoDuration", e.target.duration);
            };
        },

        methods: {
            canplay(e) {
                const duration = e.el_.children[0].duration;
                console.log(duration);
                this.$emit("subVideoDuration", duration);
            }
        }
    };
</script>
<style lang='scss'>
    .video-js-player-container {
        border: 1px solid #ccc;
        .video-js .vjs-big-play-button {
            font-size: 2.5em;
            line-height: 2.3em;
            height: 2.5em;
            width: 2.5em;
            -webkit-border-radius: 2.5em;
            -moz-border-radius: 2.5em;
            border-radius: 2.5em;
            background-color: #73859f;
            background-color: rgba(115, 133, 159, 0.5);
            border-width: 0.15em;
            margin-top: -1.25em;
            margin-left: -1.75em;
        }
        /* 中间的播放箭头 */
        .vjs-big-play-button .vjs-icon-placeholder {
            font-size: 1.63em;
        }
        /* 加载圆圈 */
        .vjs-loading-spinner {
            font-size: 2.5em;
            width: 2em;
            height: 2em;
            border-radius: 1em;
            margin-top: -1em;
            margin-left: -1.5em;
        }
        .video-js.vjs-playing .vjs-tech {
            pointer-events: auto;
        }
        .video-js .vjs-time-control {
            display: block;
        }
        .video-js .vjs-remaining-time {
            display: none;
        }
        .vjs-button > .vjs-icon-placeholder:before {
            font-size: 1.8em;
            line-height: 2.12;
        }
        .vjs-paused .vjs-big-play-button,
        .vjs-paused.vjs-has-started .vjs-big-play-button {
            display: block;
        }
        // 禁止右键
        video::-webkit-media-controls-enclosure {
            overflow: hidden;
        }
        video::-webkit-media-controls-panel {
            width: calc(100% + 30px);
        }
        .vjs-poster {
            background-size: cover;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        }
        .video-js .vjs-play-progress {
            background-color: #d2bbad;
        }
    }
</style>

