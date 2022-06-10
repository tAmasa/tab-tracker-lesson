<template>
  <v-layout column>
    <v-flex  xs6>
    <panel title = "Create Song V2">
      <form
      name = "create-song-form"
      autocomplete="off">
      <h1>[V2]Create a Song</h1>

      <v-text-field
      type="text"
      name="title"
      v-model="title"
      placeholder ="Title">
      </v-text-field>

      <v-text-field
      type="text"
      name="artist"
      v-model="artist"
      placeholder ="Artist">
      </v-text-field>

      <v-text-field
      type="text"
      name="genre"
      v-model="genre"
      placeholder ="Genre">
      </v-text-field>

      <v-text-field
      type="text"
      name="album"
      v-model="album"
      placeholder ="Album">
      </v-text-field>

      <v-text-field
      type="text"
      name="albumImageUrl"
      v-model="albumImageUrl"
      placeholder ="Album Image URL">
      </v-text-field>

      <v-text-field
      type="text"
      name="youtubeId"
      v-model="youtubeId"
      placeholder ="Youtube ID">
      </v-text-field>

      <v-text-area
      type="text"
      name="lyrics"
      v-model="lyrics"
      placeholder ="Lyrics">
      </v-text-area>

      <v-text-field
      type="text"
      name="tab"
      v-model="tab"
      placeholder ="Guitar Tab">
      </v-text-field>
      </form>
      <br />
      <v-alert v-html="stateMessage"/>
      <v-btn class="light-blue" @click="createSong">Create Song</v-btn>

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
      title: null,
      artist: null,
      genre: null,
      album: null,
      albumImageUrl: null,
      youtubeId: null,
      lyrics: null,
      tab: null,
      stateMessage: null
    }
  },
  methods: {
    async createSong () {
      console.log('pressed create song')
      try {
        const response = await SongsService.createSong({
          title: this.title,
          artist: this.artist,
          genre: this.genre,
          album: this.album,
          albumImageUrl: this.albumImageUrl,
          youtubeId: this.youtubeId,
          lyrics: this.lyrics,
          tab: this.tab
        })
        console.log(response)
        this.stateMessage = 'Song successfully created!'
      } catch (error) {
        this.stateMessage = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>

</style>
