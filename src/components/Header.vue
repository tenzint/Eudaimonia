<template>
	<!-- Header -->
	<div class="col-12 header">
	  <div class="col-2 left" >
	    <img id="dropdownButton" src='../assets/list.jpg' alt = 'Button' v-on:click="dropdown" >
	    <ul v-if="scrollSeen" id="menu">
	      <li>Fashion</li>
	      <li>Politics</li>
	      <li>Science</li>
	      <li>Philosophy</li>
	      <li>Humour</li>
	      <li>Culture</li>
	      <li>Video</li>
	    </ul>
	  </div>

	  <div class="col-7 mid">
	    <div class="col-12 euda">
	    	<div></div>
	      <div>E</div>
	      <div>U</div>
	      <div>D</div>
	      <div>A</div>
	      <div>I</div>
	      <div>M</div>
	      <div>O</div>
	      <div>N</div>
	      <div>I</div>
	      <div>A</div>
	    	<div></div>
	    </div>
	  </div>
	  <div class="col-2 right"><router-link to="/new-journal">Post new blog!</router-link></div>
	  <div class="col-1 right">
	    <button v-on:click="logout">Log out</button>
	  </div>
	</div>
</template>

<script>
import firebase from 'firebase'

	let dropDown = document.getElementById('dropdown');
	let menu = document.getElementById('menu');

export default {
  
  name: 'Header',
  data () {
    return {
      msg: '',
      scrollSeen: false
    }
  },
  methods: {
    dropdown: function() {
      let scroll = this.scrollSeen;
      if(scroll)
      	this.scrollSeen = false;
      else
      	this.scrollSeen = true;
    },
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>
<style scoped>
.col-1 { width: 8.333%; }
.col-2 { width: 16.666%; }
.col-3 { width: 25%; }
.col-4 { width: 33.333%; }
.col-5 { width: 41.666%; }
.col-6 { width: 50%; }
.col-7 { width: 58.333%; }
.col-8 { width: 66.666%; }
.col-9 { width: 75%; }
.col-10 { width: 83.333%; }
.col-11 { width: 91.666%; }
.col-12 { width: 100%; }

body {
	font-color: blue;
}
.header {
	text-align: center;
	border-radius: 10px;
	overflow: hidden;
	min-height: 20px;
}
.header div {
	float: left;
}
.left {
	background-color: none;
	text-align: left;
}
.left img {
	max-width: 40px;
	max-height: 40px;
	margin-left: 10%
}
.hide {
	display: none;
}
.show {
	display: block;
}
.mid {
	background-color: green;
	text-align: center;
	line-height: 40px;
}
.euda {
	display: inline-flex;
}
.euda div {
	flex-grow: 1;
}
.right {
	margin: auto;
	background-color: yellow;
	line-height: 40px;
}
.content {
	margin: auto;
	text-align: center;
	border: 2px solid black;
}
.footer {
	margin: auto;
	text-align: center;
}
.email {
	font-style: italic;
	text-decoration: underline;
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
#dropdownButton {
	cursor: pointer;
}
</style>