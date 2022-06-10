import Api from '@/services/Api'

export default{
  index () {
    return Api().get('songs')
  },
  createSong (song) {
    return Api().post('songs', song)
  }
}
