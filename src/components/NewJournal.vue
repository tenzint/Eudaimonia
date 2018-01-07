<template>
  <div class="newJournal">
    <h3>Let's create a new journal!</h3>
    <p v-if="errorMessage">{{errorMessage}}</p>
    <input type="title" v-model="newBlog.title" v-bind:class="{error: errorMessage}" placeholder="TITLE OF THE BLOG"><br>
    <input type="theme" v-model="newBlog.theme" v-bind:class="{error: errorMessage}" placeholder="A sentence or two describing the theme of the blog"><br>
    <input type="content" v-model="newBlog.content" v-bind:class="{error: errorMessage}" placeholder="Content of the blog"><br>
    <button v-on:click="post">Post</button>

    <p>{{newBlog.title}}</p>
    <p>{{newBlog.theme}}</p>
    <p>{{newBlog.content}}</p>
    <p>{{newBlog.author}}</p>
    <p>{{newBlog.timestamp}}</p>
   
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'NewJournal',
  data: function() {
    return {
      newBlog: {
        title: '',
        theme: '',
        content: '',
        author: '',
        timestamp: ''
      }
    }
  },
  methods: {
    post: function() {
      let self = this;
      self.newBlog.author = firebase.auth().currentUser.displayName;
      self.newBlog.timestamp = Date.now();

      firebase.database().ref().child('journals').push(self.newBlog);
      self.$router.replace('home');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .signUp {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
  }
  .error {
    border: 1px solid #CF3A24;
  }
</style>
