<template>
  <div v-if="visible" class="lightbox" @click.self="close">
    <button class="close" @click="close">✕</button>
    <button class="prev" @click.stop="prev">‹</button>
    <div class="viewport" @touchstart="onTouchStart" @touchmove.prevent="onTouchMove" @touchend="onTouchEnd">
      <img :src="photos[current]" :alt="''" />
    </div>
    <button class="next" @click.stop="next">›</button>
  </div>
</template>

<script>
export default {
  name: 'Lightbox',
  props: ['photos','value','startIndex'],
  data() {
    return {
      visible: !!this.value,
      current: this.startIndex || 0,
      touchStartX: 0,
      touchDeltaX: 0
    }
  },
  watch: {
    value(v) { this.visible = v },
    visible(v) { this.$emit('input', v) }
  },
  methods: {
    close() { this.visible = false },
    next() { this.current = (this.current+1) % this.photos.length },
    prev() { this.current = (this.current-1+this.photos.length) % this.photos.length },
    onTouchStart(e) { this.touchStartX = e.touches[0].clientX },
    onTouchMove(e) { this.touchDeltaX = e.touches[0].clientX - this.touchStartX },
    onTouchEnd() {
      if (this.touchDeltaX > 50) this.prev()
      else if (this.touchDeltaX < -50) this.next()
      this.touchDeltaX = 0
    }
  },
  mounted() {
    window.addEventListener('keydown', this.onKey)
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.onKey)
  },
  methods: {
    close() { this.visible = false },
    next() { this.current = (this.current+1) % this.photos.length },
    prev() { this.current = (this.current-1+this.photos.length) % this.photos.length },
    onKey(e) {
      if (!this.visible) return
      if (e.key === 'ArrowRight') this.next()
      if (e.key === 'ArrowLeft') this.prev()
      if (e.key === 'Escape') this.close()
    },
    onTouchStart(e) { this.touchStartX = e.touches[0].clientX },
    onTouchMove(e) { this.touchDeltaX = e.touches[0].clientX - this.touchStartX },
    onTouchEnd() {
      if (this.touchDeltaX > 50) this.prev()
      else if (this.touchDeltaX < -50) this.next()
      this.touchDeltaX = 0
    }
  }
}
</script>

<style scoped>
.lightbox{
  position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:9999
}
.lightbox .viewport{max-width:90%;max-height:90%;display:flex;align-items:center;justify-content:center}
.lightbox img{max-width:100%;max-height:100%;border-radius:8px;box-shadow:0 10px 30px rgba(0,0,0,0.6)}
.lightbox .close{position:fixed;top:20px;right:20px;background:none;border:none;color:#fff;font-size:24px}
.lightbox .prev,.lightbox .next{position:fixed;top:50%;transform:translateY(-50%);background:transparent;border:none;color:#fff;font-size:48px;padding:8px}
.lightbox .prev{left:10px}.lightbox .next{right:10px}
</style>
