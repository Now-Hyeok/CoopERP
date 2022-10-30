<template>
  <div class="comment-detail">
    <div class="post-content">
      <h5>
        {{post.author}}
      </h5>
      <p>
        {{post.post_date.substr(0,10)}}
      </p>
      <p>{{post.text}}</p>
    </div>
    <div class="comment" v-for="item in commentList" :key="item">
      <h5 class="detail-author">{{item.author}}</h5>
      <p class="detail-comment">{{item.comment}}</p>
      <p class="detail-date">{{item.post_date.substr(0,10)}}</p>
    </div>
    <div>
      <form @submit.prevent>
        <input v-model="text">
        <button @click="postComment(post.post_id)">comment</button>
      </form>

    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapState } from 'vuex'

export default {
  computed:{...mapState(['postList','commentList','todayDate'])},
  created(){
    this.post = this.postList.find(this.findPost);
    this.getCommentList(this.post.post_id)

  },
  
  methods:{
    ...mapActions(['getCommentList']),
    findPost(element){
      if(element.post_id == this.$route.params.id){
        return true;
      }
    },
    postComment(id){
      axios.post(`/api/community/comment/${id}`,{
        text:this.text,
        postDate:this.todayDate
      })
      .then(()=>{

        this.text='';
        this.getCommentList(id);
      })
      .catch((err)=>{
        console.error(err);
      })
    },
  },
  data(){
    return{
      post:null,
      text:null,
    }
  }
}
</script>

<style>
.post-content{
  border: 1px solid #e3e3e3;
  padding: 10px ;
}

.detail-comment{
  font-size: 7px;
}
.detail-author{
  font-size: 13px;
}
.detail-date{
  font-size: 10px;
}
.comment{
  border:1px solid #e3e3e3;
  margin-bottom: -1px;
  box-sizing: border-box;
  dispaly:block;
  padding: 10px ;
}

.comment-detail{
  width: 1000px ;
  margin: auto;
}
</style>