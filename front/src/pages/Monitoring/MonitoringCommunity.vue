<template>

    <WritePost v-if="postModal==true" @postRegister="closePostModal();getPostList()"/>

  <div v-for="(item,i) in postList" :key="item">
    <div class="post-head">
        <p>{{i}}</p>
        <h5>{{item.author}}</h5>
        <p>{{item.post_date}}</p>
    </div>
    <div class="post-content">
        <p>{{item.text}}</p>
    </div>
  </div>
  <button @click="openPostModal()">new Post</button>
</template>

<script>

import { mapActions, mapMutations, mapState } from 'vuex'

export default {

    computed:{
        ...mapState(['postList','postModal'])
    },
    methods:{
        ...mapMutations(['openPostModal','closePostModal']),
        ...mapActions(['getPostList',])
    }
}

</script>

<style>

</style>