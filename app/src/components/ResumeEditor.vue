<template>
  <div class="resumeEditor" :class="{htmlMode:enableHtml}" ref="container">
    <div v-if="enableHtml" v-html="result"></div>
    <pre v-else>{{result}}</pre>
  </div>
</template>

<script>
  import marked from 'marked'
  export default {
    props: ['markdown', 'enableHtml', 'showGallery', 'galleryPhotos'],
    name: 'ResumeEditor',
    computed: {
      result: function () {
        if (!this.enableHtml) return this.markdown
        // convert markdown to HTML
        let html = marked(this.markdown)
        // replace gallery placeholder with gallery HTML only when showGallery is true
        const placeholder = '[GALLERY_PLACEHOLDER]'
        if (html.indexOf(placeholder) !== -1) {
          if (this.showGallery && Array.isArray(this.galleryPhotos)) {
            // build gallery HTML: stacked figures with constrained image sizes
            const galleryHtml = ['<div class="inline-gallery visible">']
            this.galleryPhotos.forEach(p => {
              const src = (p && p.src) ? p.src : ''
              const caption = (p && p.caption) ? p.caption : ''
              galleryHtml.push(`<figure><img src="${src}" alt="${caption}"/><figcaption>${caption}</figcaption></figure>`)
            })
            galleryHtml.push('</div>')
            html = html.replace(placeholder, galleryHtml.join('\n'))
          } else {
            // remove placeholder until galleryVisible
            html = html.replace(placeholder, '')
          }
        }
        return html
      }
    },
    methods: {
      goBottom: function () {
        // Scroll the parent right-panel container so auto-scroll works
        // even though resumeEditor itself no longer has a fixed height/overflow.
        const el = this.$refs.container
        const scrollTarget = (el && el.parentElement) ? el.parentElement : el
        scrollTarget.scrollTop = 100000
      }
    }
  }

</script>

<style scoped>
  .htmlMode {
    animation: flip 2s;
  }
  
  @keyframes flip {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Inline gallery styles inserted into the rendered markdown */
  .inline-gallery{opacity:0;transform:translateY(8px);transition:all .6s;}
  .inline-gallery.visible{opacity:1;transform:none}
  .inline-gallery figure{margin:14px 0;text-align:center}
  .inline-gallery img{max-width:100%;max-height:220px;object-fit:cover;border-radius:8px}
  .inline-gallery figcaption{margin-top:6px;color:#666;font-size:14px}
</style>