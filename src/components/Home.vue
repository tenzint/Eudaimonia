<template>
  <div class="home">
    <v-header></v-header>
    <div v-for="journal in journals">
      <h3>{{journal.theme}}</h3>
      <h1>{{journal.title}}</h1>
      <p>{{journal.content}}</p>
      -------
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import firebase from 'firebase'
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  
  name: 'Home',
  data () {
    return {
      journals: [

      ]
    }
  },
  created: function() {
    let self = this;
    firebase.database().ref('journals').once('value', function(snap) {
      self.journals = snap.val();
    });
  },
  methods: {
  },
  components: {
    'v-header' : Header,
    'v-footer' : Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  padding: 10px 20px;
  background: #42b983;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 22px;
  outline: 0;
  cursor: pointer;
}
</style>
