<template>
  <v-layout column>
    <v-flex  xs6>
    <panel title = "Browse Songs">
    <div
     v-for="song in songs"
     :key="song.id">
    {{song.title}} -
    {{song.artist}} -
    {{song.album}}
    </div>
    <div class="SongForm">
    </div>
    </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    async songButton () {
      console.log('button pressed')
      let response = await SongsService.index().response
      console.log(response)
      // (await SongsService.index()).response.data
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>
</style>
