<template>
  <v-layout>
    <Panel title="Version">
    <div
      v-for="user in displayJSON"
      :key="user.id">
      {{user.name}} : {{user.id}}
    </div>
    <v-btn
    @click="usersData">
    Look at json!
    </v-btn>

    <!-- <v-btn>
    Version 0
    </v-btn>

    <v-btn>
        Version 1

    </v-btn>

    <v-btn>
        Version 2
    </v-btn>
    <div/> -->
                  <!-- item-text="version" -->

    <v-select
      v-model="selectedVersion"
                  :items="items"
                  label="Select a version"
                  @click="checkVersion"
          dense
        ></v-select>

    </Panel>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import usersData from '@/assets/users'
import { diffApply } from 'just-diff-apply'

export default {
  components: {
    Panel
  },
  data () {
    return {
      users: usersData,
      versionNumber: 'patch0',
      items: ['patch0', 'patch1', 'patch2'],
      // {patch: 'patch0', version: 'Version 3'},
      // {patch: 'patch1', version: 'Version 2'},
      // {patch: 'patch2', version: 'Version 1'},
      selectedVersion: usersData.state.currentID
    }
  },
  methods: {
    usersData () {
      console.log(this.users)
    },
    checkVersion () {
      console.log(this.selectedVersion)
    },
    getDiffIndex (versionID, data) {
      // var index = data.findIndex(function (item, i) {
      //   return item.version.versionID === versionID
      // })
      // return index
      var index = -1
      data.versions.find(function (item, i) {
        if (item.version.versionID === versionID) {
          index = i
          return index
        }
      })
      return index
    },
    patchToVersion (versionID, data) {
      if (versionID === data.state.currentID) {
        return data.database
      }
      const patchIndex = this.getDiffIndex(versionID, data)
      if (patchIndex === -1) {
        return data.database
      }
      var patchJSON = data.database
      for (let i = 0; i <= patchIndex; i++) {
        // console.log(data.versions[i].patch)
        patchJSON = diffApply(patchJSON, data.versions[i].patch)
      }
      return patchJSON
    }
  },
  computed: {
    displayJSON: function () {
      return this.patchToVersion(this.selectedVersion, this.users).database
    }
  }

}

</script>

<style>
</style>
