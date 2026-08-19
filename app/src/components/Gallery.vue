<template>
  <div class="gallery">
    <div class="grid">
        <div v-for="(p, i) in photos" :key="i" class="card" @click="open(i)">
          <img :src="p.src" alt="" />
          <div class="caption">{{ p.caption }}</div>
        </div>
      </div>
    <Lightbox :photos="photos.map(p=>p.src)" v-model="lightboxVisible" :startIndex="startIndex" />
  </div>
</template>

<script>
import Lightbox from './Lightbox'
export default {
  name: 'Gallery',
  components: { Lightbox },
  props: ['photos'],
  data() { return { lightboxVisible: false, startIndex: 0 } },
  methods: {
    open(i){ this.startIndex = i; this.lightboxVisible = true }
  }
}
</script>

<style scoped>
.gallery .grid{display:block}
.gallery .card{width:100%;background:#fff;border-radius:8px;padding:8px;margin-bottom:18px;box-shadow:0 6px 18px rgba(0,0,0,0.08);cursor:pointer}
.gallery .card img{width:100%;height:auto;object-fit:contain;border-radius:6px}
.gallery .card .caption{margin-top:8px;color:#555;font-size:14px;text-align:center}
@media(max-width:600px){.gallery .card{padding:6px;margin-bottom:14px}.gallery .card .caption{font-size:13px}}
</style>
