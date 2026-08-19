<template>
        <div id="app">
                <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
                <div class="right-panel">
                <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml" :showGallery="galleryVisible" :galleryPhotos="loveStory.galleryPhotos"></ResumeEditor>

                <section v-if="heroVisible" class="hero" ref="hero">
                    <div class="hero-inner">
                        <img class="hero-photo" :src="loveStory.hero.photo" alt="hero" />
                        <div class="hero-text">
                            <h1>{{ loveStory.names.me }} × {{ loveStory.names.them }}</h1>
                            <p class="subtitle">{{ loveStory.hero.subtitle }}</p>
                            <p class="date">{{ loveStory.hero.dateLabel }}</p>
                            <button class="open-btn" @click="scrollToStory">Open Our Story ♡</button>
                            <p class="made">Made with love for you.</p>
                        </div>
                    </div>
                </section>

                <section v-show="galleryVisible" class="gallery-section">
                    <h2>Our Little Moments</h2>
                    <Gallery :photos="loveStory.galleryPhotos" />
                </section>
                </div>
        </div>
</template>
<script>
import StyleEditor from './components/StyleEditor'
import ResumeEditor from './components/ResumeEditor'
import loveStory from './data/loveStory'
import Gallery from './components/Gallery'
import './assets/reset.css'
let isPc = (function() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"
    ];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}());
let getDateDiff = function(startDate, endDate) {
    var startTime = new Date(Date.parse(startDate.replace(/-/g, "/"))).getTime();
    var endTime = new Date(Date.parse(endDate.replace(/-/g, "/"))).getTime();
    var dates = Math.abs((startTime - endTime)) / (1000 * 60 * 60 * 24);
    return dates;
}
// title is set in index.html
export default {
    name: 'app',
    components: {
        StyleEditor,
        ResumeEditor,
        Gallery
    },
    data() {
        return {
            interval: 27,
            currentStyle: '',
            enableHtml: false,
            heroVisible: false,
            galleryVisible: false,
            loveStory: loveStory,
            fullStyle: [
                `/*
* Hi，中午好，James晟益~
* 这么快就到七夕了，真成牛郎织女了55
* 这次没有办法和宝宝庆祝了，想写点什么或者准备小礼物，但是跨了半球
* 想到只有网页能跨越地球了，于是想到把手写信放在浏览器上嘻嘻
* 这个页面现在太ugly了，让我加一点图案哈哈哈
* 爱你宝宝，期待你来美国，见面之前我们都好好生活
* 那么我要开始写了
*/

/* 首先给所有元素加上过渡效果 */
* {
  -webkit-transition: all .3s;
  transition: all .3s;
}
/* 白色背景太单调了。来点背景 */
html {
  color: rgb(222,222,222);
  background: rgb(0,43,54); 
}
/* 文字太近了 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  ${ isPc ? 'width: 48%;height: 96%;' : 'width: 96%;height: 50%;' }
  font-size: 14px;
  line-height:1.5;
}
/* 这些代码颜色都一样。加点儿高亮区别来 */
.token.selector{ color: rgb(133,153,0) }
.token.property{ color: rgb(187,137,0) }
.token.punctuation{ color: yellow }
.token.function{ color: rgb(42,161,152) }
.token.comment{ color: rgb(177,177,177) }
/* 加个 3D 效果 */
html{
  -webkit-perspective: 1000px;
          perspective: 1000px;
}
.styleEditor {
  position: fixed; 
  ${ isPc ? 'left: 0;' : 'left:0;right:0;margin:auto;'}
  top: 0; 
  -webkit-transition: none; 
  transition: none;   
  ${ isPc ? '-webkit-transform: rotateY(10deg) translateZ(-100px) ;transform: rotateY(10deg) translateZ(-100px) ;' : '-webkit-transform: rotateX(-10deg) translateZ(-100px) ;transform: rotateX(-10deg) translateZ(-100px) ;' }
  ${ isPc ? '' : '-webkit-transform-origin: 50% 0% 0;transform-origin: 50% 0% 0;' }
}

/* 再来一张信纸 */
.resumeEditor{
  padding: .5em;
  border: 1px solid;
  color: #222;
  font-size: 14px;
  line-height:1.5;
  box-sizing: border-box;
  width: 100%;
  }
/* 我开始写了 */


`,
                `
/* 是不是看着很简陋粗糙？
                <!-- Gallery is embedded at the end of the markdown; visual grid removed to avoid duplication -->
`,
                `
/* 再加点样式 */
.resumeEditor{
  padding: 2em;
  line-height:1.8;
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
  font-size:18px;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;            
  content: counters(section, ".") " ";  
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: rgba(221,221,221,.5);
}

/* OK。完成！ */
        
`
            ],
            currentMarkdown: '',
            fullMarkdown: (function(){
                // Prefer a custom markdown block if provided in the central data file.
                const s = loveStory
                if (s.customMarkdown) return s.customMarkdown
                // Generate a simple markdown story from the central data file.
                const daysTogether = getDateDiff((new Date()).getFullYear()+'-'+((new Date()).getMonth()+1)+'-'+(new Date()).getDate(), s.relationshipStartDate.split('T')[0]) + 1
                let md = `${s.names.me} × ${s.names.them}\n----\n\n`
                md += `${s.howItStarted.date} — ${s.howItStarted.story}  \n`
                md += `已有 \`${daysTogether}\` 天\n\n`
                md += `## Timeline\n\n`
                s.timelineMemories.forEach(item => {
                    md += `### ${item.date} — ${item.title}\n${item.description}\n\n`
                })
                md += `## Gallery\n\n`
                s.galleryPhotos.forEach((p, i) => {
                    md += `- ![photo${i}](${p.src}) ${p.caption || ''}\n`
                })
                md += `\n## Things I Love About You\n\n`
                s.loveReasons.forEach(r => md += `- ${r}\n`)
                md += `\n## Letters\n\n`
                s.openWhenLetters.forEach(l => {
                    md += `### ${l.title}\n${l.message}\n\n`
                })
                md += `\n## Final Letter\n\n${s.finalLetter}\n\n----\n\n${s.endingText.title} \n${s.endingText.line1} ${s.endingText.year}`
                return md
            })(),
        }
    },
    created() {
        this.makeResume()
    },

    methods: {
        makeResume: async function() {
            await this.progressivelyShowStyle(0)
            await this.progressivelyShowResume()
            await this.progressivelyShowStyle(1)
            await this.showHtml()
            this.heroVisible = true
            setTimeout(()=>{ this.galleryVisible = true }, 300)
            await this.progressivelyShowStyle(2)
        },
        showHtml: function() {
            return new Promise((resolve, reject) => {
                this.enableHtml = true
                resolve()
            })
        },
        progressivelyShowStyle(n) {
            return new Promise((resolve, reject) => {
                let interval = this.interval
                let showStyle = (async function() {
                    let style = this.fullStyle[n]
                    if (!style) {
                        return
                    }
                    let length = this.fullStyle.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0)
                    let prefixLength = length - style.length
                    if (this.currentStyle.length < length) {
                        let l = this.currentStyle.length - prefixLength
                        let char = style.substring(l, l + 1) || ' '
                        this.currentStyle += char
                        if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
                            this.$nextTick(() => {
                                this.$refs.styleEditor.goBottom()
                            })
                        }
                        setTimeout(showStyle, interval)
                    } else {
                        resolve()
                    }
                }).bind(this)
                showStyle()
            })
        },
        progressivelyShowResume() {
            return new Promise((resolve, reject) => {
                let length = this.fullMarkdown.length
                let interval = this.interval
                let showResume = () => {
                    if (this.currentMarkdown.length < length) {
                        this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1)
                        let prevChar = this.currentMarkdown[this.currentMarkdown.length - 2]
                        if (prevChar === '\n' && this.$refs.resumeEditor) {
                            this.$nextTick(() => this.$refs.resumeEditor.goBottom())
                        }
                        setTimeout(showResume, interval)
                    } else {
                        resolve()
                    }
                }
                showResume()
            })
        },
        scrollToStory() {
            this.$nextTick(() => {
                const el = this.$refs.resumeEditor && this.$refs.resumeEditor.$el || document.querySelector('.resumeEditor')
                if (el && el.scrollIntoView) el.scrollIntoView({behavior: 'smooth'})
            })
        }
    }
}
</script>

<style scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

html {
    min-height: 100%;
}

.styleEditor {
    -webkit-backface-visibility: hidden;
}

/* Right panel: always fixed to the right 50% of the viewport.
   This ensures hero and gallery are NEVER drawn under the code editor. */
.right-panel {
    position: fixed;
    right: 0;
    top: 0;
    width: 50vw;
    height: 100vh;
    overflow-y: auto;
    background: #fff;
    z-index: 1;
    box-sizing: border-box;
}

.hero{background:linear-gradient(180deg,#FFF6F3, #FFEFF0);padding:28px 16px;display:flex;align-items:center;justify-content:center}
.hero-inner{max-width:100%;display:flex;gap:16px;align-items:center;flex-wrap:wrap}
.hero-photo{width:100%;max-width:260px;height:180px;object-fit:cover;border-radius:12px;box-shadow:0 12px 30px rgba(0,0,0,0.12)}
.hero-text h1{margin:0;font-family:serif;font-size:26px;color:#5a1d2b}
.hero-text .subtitle{color:#8a3744;margin-top:8px}
.hero-text .date{color:#b07080;margin-top:6px}
.open-btn{margin-top:12px;background:#ffd6dc;border:none;padding:8px 14px;border-radius:20px;cursor:pointer}
.gallery-section{padding:20px 16px;box-sizing:border-box;width:100%}
.gallery-section h2{margin-bottom:12px}

.story{max-width:100%;margin:20px 0;padding:16px;background:rgba(255,255,255,0.9);color:#333;border-radius:12px;box-shadow:0 8px 20px rgba(0,0,0,0.06)}
.story h2{color:#5a1d2b}
.story img{max-width:100%;border-radius:8px}
</style>
