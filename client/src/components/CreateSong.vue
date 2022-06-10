<template>
  <v-layout>
    <v-flex xs4>
    <panel title="Song Metadata">
      <form name="metadata-form">
        <v-text-field
        type="text"
        v-model="song.title"
        label ="Title"
        :rules="rules.required"
        required
        >
        </v-text-field>

        <v-text-field
        type="text"
        v-model="song.artist"
        required
        label ="Artist">
        </v-text-field>

        <v-text-field
        type="text"
        v-model="song.genre"
        required
        label ="Genre">
        </v-text-field>

        <v-text-field
        type="text"
        v-model="song.album"
        required
        label ="Album">
        </v-text-field>

        <v-text-field
        type="text"
        v-model="song.albumImageUrl"
        required
        label ="Album Image Url">
        </v-text-field>

        <v-text-field
        type="text"
        v-model="song.youtubeId"
        required
        label ="Youtube ID">
        </v-text-field>

      </form>
    </panel>
    </v-flex>

    <v-flex xs8>
      <panel title="Song Info" class="ml-2">
      <form name="song-info-form">
       <v-textarea
        v-model="song.lyrics"
        label="Lyrics">

      </v-textarea>
      <v-textarea
        v-model="song.tab"
        label="Tab">
      </v-textarea>
      </form>

      </panel>
      <br/>
      <v-btn class="light-blue" @click="createSong">Create Song</v-btn>
      <v-alert v-html="stateMessage"/>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      stateMessage: null,
      rules: {
        required: (value) => !!value || 'Bot',
        min: v => v.length >= 8 || 'Min 8 characters'
      }
    }
  },
  components: {
    Panel
  },

  methods: {
    async createSong () {
      try {
        console.log('clicked create song')
        await SongsService.createSong(this.song)
        this.stateMessage = 'Successfully created song!'
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
</style>
