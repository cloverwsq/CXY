// Central editable configuration file for the Qixi love story.
// Replace the placeholder text, dates, image paths, and messages here.

export default {
  // Names shown in the hero and final scene
  names: {
    me: 'Clover',
    them: 'James'
  },

  // Short subtitle shown in the hero
  hero: {
    subtitle: '七夕小礼物',
    dateLabel: '08/19/2026 — 七夕',
    // image path relative to project root (use static/photos/...)
    photo: '/static/photos/JinChengLake.jpg'
  },

  // Relationship start date used by the counter (ISO format)
  relationshipStartDate: '2026-06-09T00:00:00',

  // How it started
  howItStarted: {
    title: 'How It Started',
    date: '[DATE]',
    story: '[WRITE OUR STORY HERE]',
    photos: ['/static/photos/memory01.svg', '/static/photos/memory02.svg']
  },

  // Timeline memories (array of objects). Add more entries to extend the timeline.
  timelineMemories: [
    { date: '2026-05-29', title: 'First Meeting', description: 'SMU Blockchain Event：Clover 临时主持，和刚考完试的 James 相遇，之后去了 sky bar、吃夜宵、拍照。', location: 'SMU / sky bar', photos: ['/static/photos/JinChengLake.jpg'] },
    { date: '2026-05-30', title: 'Dating Days', description: '短短几天就一起到处跑：CÉ LA VI、水族馆、东海岸、Marina Bay 等，第一次玩通宵。', location: 'Singapore', photos: ['/static/photos/memory01.svg'] },
    { date: '2026-06-09', title: 'Together', description: '打了五个小时电话后决定在一起——Auris and Sunshine 的开始。', location: 'Phone / Online', photos: ['/static/photos/memory02.svg'] },
    { date: '2026-07-04', title: '玉环相见', description: '网友回国奔现，终于可以见面贴贴，度过美好的一周。', location: '玉环', photos: ['/static/photos/Yuhuan 1st Road.jpg'] },
    { date: '2026-08-07', title: '成都再见', description: '小程小小程来成都，悄悄去了玉林、锦城湖，留下成都限定的回忆。', location: '成都', photos: ['/static/photos/PP O.jpg'] },
    { date: '2026-08-11', title: '中美网恋开始', description: 'Clover 飞美国，开始 15 小时时差的异国生活，收到 James 的手写信，非常想念。', location: 'California / Singapore', photos: ['/static/photos/Rabbit CD.jpg'] }
  ],

  // Gallery photos (8-12 placeholders)
  // Keep a compact, final gallery (no placeholders). Four images, one per row.
  galleryPhotos: [
    { src: '/static/photos/JinChengLake.jpg', caption: 'Caption 1' },
    { src: '/static/photos/PP O.jpg', caption: 'Caption 2' },
    { src: '/static/photos/Rabbit CD.jpg', caption: 'Caption 3' },
    { src: '/static/photos/Richard Cheng.jpg', caption: 'Caption 4' }
  ],

  // Things I love about you (simple array of short strings)
  loveReasons: [
    '很善良。是那种会让我觉得“嗯，这个人本质真的很好”的善良。不是刻意表现出来的，是相处久了会慢慢发现的那种。',
    '比 Richard 帅。',
    '很愿意沟通。有什麽事情可以讲，可以聊，也願意听我在想什麽。对我来说，这一点真的很珍贵。',
    '很有自己的想法。不是别人说什麽就是什麽，有自己的判断，也會认真想很多事情。',
    '很乐观。感觉 James 很多时候都能把事情往好的方向看。跟你讲话的时候，也经常会觉得事情好像没有那么严重了。',
    '很有思想。宝宝很有上进心，且行动力很强，有想法就付出行动，有点小幽默，认真聊起来的时候也有自己见解。',
    '还有很多暂时不知道怎麽形容的地方。毕竟才 68 天嘛。留一点以后慢慢发现 ♡'
  ],

  // Places section
  places: [
    { name: '[PLACE 01]', note: '[Short memory here]', photo: '/static/photos/place01.svg' },
    { name: '[PLACE 02]', note: '[Short memory here]', photo: '/static/photos/place02.svg' },
    { name: '[PLACE 03]', note: '[Short memory here]', photo: '/static/photos/place03.svg' },
    { name: '[PLACE 04]', note: '[Short memory here]', photo: '/static/photos/place04.svg' }
  ],

  // Open when letters
  openWhenLetters: [
    { title: 'Open when you miss me', message: '[WRITE LETTER HERE]' },
    { title: 'Open when you need encouragement', message: '[WRITE LETTER HERE]' },
    { title: 'Open when you are tired', message: '[WRITE LETTER HERE]' },
    { title: 'Open when you are happy', message: '[WRITE LETTER HERE]' },
    { title: 'Open when we argue', message: '[WRITE LETTER HERE]' }
  ],

  // Final letter
  finalLetter: '[FINAL LOVE LETTER]',

  // Optional: provide a full custom markdown that overrides the generated markdown.
  // If you paste your complete text here, it will be shown verbatim in the animated editor.
  customMarkdown: `# Clover × James

**08/19/2026 — 七夕小礼物**

距离认识到现在已经 **68 天**啦哈哈哈，这么快就到七夕了。
虽然时间还不算特别长，但已经有好多好多美好瞬间滴～ ♡

## Timeline

### 2026-05-29 — First Meeting

SMU Blockchain Event —— 很临时帮朋友主持活动的 Clover，和考完试刚好来逛一下的 James hahhaa。

活动结束后去 sky bar 喝了可乐？然后又一起吃夜宵，聊天、拍照，都很开心～～

现在回头看，谁能想到这会是故事的开头哈哈哈。

### 2026-05-30 — 06-06 — Guess can be called Dating?

列一下 before 宝宝去澳洲之前玩过的地方吧：

CÉ LA VI、水族馆、dashi gogo club、欢喜大排档、东方美食、天天湘上、东海岸、Marina Bay 海底捞、Sago House……

还有一些晚上完全不知道要走去哪里的 city walk。

第一次在新加坡玩通宵也贡献给 James 大师了哈哈哈。

现在想想还是很神奇，明明才认识几天，居然已经一起到处乱跑这么多地方了。

### 2026-06-09（好像是这天来着）— Together

嗯，澳洲和新加坡隔着三个小时时差。

某天打了五个小时电话，真的从来没有和谁打过这么久。

然后 Clover 突然开悟了哈哈哈。

好喜欢宝宝，situationship 太难受了。

于是，就有了 **Auris and Sunshine** ♡

### 2026-07-04 — 玉环相见

还记得刚见面的时候真的很紧张哈哈哈。

网友又回国奔现了。

终于可以和 James 宝宝贴贴，然后一起度过了很愉快的一周 ♡

之前一直隔着屏幕的人，突然就在旁边，还是有点神奇。

### 2026-08-07 — 成都再见

小程和小小程一起来成都了，小王和小小王来迎接哈哈哈。

晚上两个人悄悄不带妹，去了玉林、锦城湖。

嗯……

反正是很开心的成都限定 time ♡

### 2026-08-11 — 中美网恋开始

Clover 飞美国了55。

正式开始 15 小时时差的异国。

收到了 James 宝宝的手写信，结果刚到第一天，就已经开始想念祖国、家人，还有 James 了。

硅谷大农村！

Clover 要加油了哈哈哈哈。

### 2026-08-19 — 第一个七夕

这么快就到了第一个七夕。

James 宝宝好客气，Clover 又特别想给宝宝整一个有点仪式感的东西过一下节。

但是人隔着半个地球，只能线上啦。

网络全球一线牵哈哈哈。

好喜欢 James。

James 也不要有啥 pressure，顺其自然就好啦 ♡



## Things I Love About You

* **很善良。**
  是那种会让我觉得“嗯，这个人本质真的很好”的善良。不是刻意表现出来的，是相处久了会慢慢发现的那种。

* **比 Richard 帅。**
  这个很重要，必须单独占一条哈哈哈哈。


* **很愿意沟通。**
  有什么事情可以讲，可以聊，也愿意听我在想什么。
  对我来说，这一点真的很珍贵。

* **很有自己的想法。**
  不是别人说什么就是什么，有自己的判断，也会认真想很多事情。
  有时候听 James 讲自己的观点，会觉得：嗯，这个宝宝脑子里还是有很多东西的哈哈哈。

* **很乐观。**
  感觉 James 很多时候都能把事情往好的方向看。
  跟你讲话的时候，也经常会觉得事情好像没有那么严重了。

* **很有思想。**
  宝宝很有上进心，且行动力很强，有想法就付出行动，有点小幽默，认真聊起来的时候也有自己见解

* **还有很多暂时不知道怎么形容的地方。**
  毕竟才 68 天嘛。
  留一点以后慢慢发现 ♡

## Letters

### Open when you miss me

如果你点开这个，是因为想我了的话——

Hi 宝宝。

我大概率也在想你哈哈哈。

可能我正在上班、吃饭、睡觉，或者又在吐槽硅谷大农村。

15 个小时时差确实很讨厌，有时候醒来的时候你已经要睡了，你空下来的时候我可能又在忙。

但是好像也没有关系。

我们还是可以打电话、发照片、分享一些很没有营养的小事，还有每天突然想到对方的时候发一句消息。

所以不要太 emo。

你好好吃饭，好好睡觉，好好过自己的生活。

等有空了再来找我。

**I’m still here ♡**

### Open when you need encouragement

James 大师，加油。

如果你最近刚好遇到什么很烦的事情，或者突然有一点不知道下一步要怎么走，那也没事啦。

不用一下子把所有事情都想明白。

也不用逼自己每一步都走得特别正确。

**One step at a time.**

慢慢来就好。

我觉得宝宝其实比自己想象中厉害很多。

有开心的事情可以和我讲，烦的事情也可以讲，一些奇奇怪怪的 idea 也可以讲。

反正 Sunshine 可以听 Auris 碎碎念哈哈哈。

**Sunshine believes in Auris :)**

### Open when you are tired

如果你真的很累了，那先别卷了。

喝点水。

吃点东西。

洗个澡。

躺一下。

James 休息一会儿，世界不会塌哈哈哈。

也不用每天都很 productive。

有些天就是会累，会不想做任何事情，这也很正常。

今天先休息。

明天再继续。

**Good night 宝宝 ♡**

### Open when you are happy

YAYYYYYY。

如果你是因为发生了什么开心的事情点开这个，那我先替你开心一下。

然后快来告诉我！！！

我要听完整版。

发生了什么、怎么发生的、最后怎么样了，全都要讲哈哈哈。

希望宝宝以后还有超级超级多这种瞬间。

不管是很大的成就，还是一些很小但是很开心的事情。

都可以留一点点给我一起开心。

**Save a little happiness for me ♡**

### Open when we argue

如果我们真的在吵架，那我猜现在两个人应该都有一点不爽哈哈哈。

但是先提醒一下：

**We are on the same team.**

我们可以有不同想法。

也不用每次都马上解决问题。

如果真的情绪上来了，那就先冷静一下，然后再好好讲清楚自己到底在介意什么。

不要冷战。

不要让对方猜。

不要憋着。

也尽量不要翻旧账哈哈哈。

就算现在有点生气，也不代表不在意对方。

所以等两个人都冷静一点以后，再回来好好说。

**We talk properly.**

## Final Letter

Hi James，

Happy Qixi ♡

其实做这个网页的时候，我一直觉得还挺神奇的。

因为我们认识明明才 68 天。

但回头一看，居然已经发生了好多事情。

从 SMU Blockchain Event 第一次见面，到 sky bar、夜宵、到处乱走的 city walk、第一次玩通宵，再到你去澳洲，我们打了那个离谱的五小时电话。

然后是玉环、成都。

再然后，我突然就飞到了美国。

Everything happened so fast 哈哈哈。

好像一眨眼，我们就从两个刚认识的人，变成了现在这样。

我其实也不知道一年后的我们会在哪里。

也不知道以后这个故事到底会变成什么样。

但我觉得，也不用现在就知道。

我只是很开心，在 2026 年这个夏天认识了你。

喜欢和你聊天。

喜欢和你到处乱逛。

喜欢和你一起吃东西。

也喜欢那些本来很普通，但因为是和你一起，所以后来想起来会觉得有点特别的小事情。

异国当然不是我最喜欢的事情。

15 小时时差也确实很讨厌55。

有时候还是会很想你。

但是我也不希望距离变成谁的 pressure。

你有你的生活。

我也有我的生活。

我们都还有很多事情想做，很多地方想去，也都还在慢慢变成自己想成为的人。

所以就好好生活吧。

互相陪着一点。

互相鼓励一点。

想对方的时候就说。

开心的时候分享一下。

不开心的时候也可以讲。

然后顺其自然。

**No pressure, no big promises.**

真诚一点。

开心一点。

对彼此好一点。

我觉得这样就很好啦。

希望以后某一天，你再打开这个网页的时候，会记得 2026 年这个很特别的夏天。

记得新加坡。

记得澳洲那通五小时电话。

记得玉环。

记得成都。

也记得我刚刚来到 California 的时候，我们隔着半个地球过了第一个七夕。

你在亚洲。

我在美国。

结果居然还能靠一个小网页把这些东西送到你面前。

只能说——

**网络全球一线牵哈哈哈哈。**

第一个七夕快乐，James 宝宝。

爱你 ♡

**See you on the same side of the Earth again.**

Clover

---

**Happy Qixi ♡**

**Clover × James**
**2026**

[GALLERY_PLACEHOLDER]
`,

  // Ending text
  endingText: {
    title: 'Happy Qixi ♡',
    line1: '[MY NAME] & [HIS NAME]',
    year: '[YEAR]',
    note: 'To be continued...'
  },

  // Music (place your file in static/music/background.mp3)
  music: {
    src: '/static/music/background.mp3',
    // default false; will not autoplay
    enabled: false
  }
}
