<template>
  <div class="updateName">
    <h3>Update Your Name</h3>
    <p v-if="errorMessage">{{errorMessage}}</p>
    <input type="name" v-model="name" v-bind:class="{error: errorMessage}" placeholder="Name"><br>
    <button v-on:click="updateProfile">Update</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'UpdateProfile',
  data () {
    return {
      name: '',
      errorMessage: ''
    }
  },
  methods: {
    updateProfile: function() {
      let self = this;
      let user = firebase.auth().currentUser;

      user.updateProfile({
        displayName: self.name
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        self.errorMessage = errorMessage;
        console.log(self.errorMessage);
      })
      .then(
        function(user) {
          self.$router.replace('home')
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .updateName {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p {
    margin-top: 20px;
    font-size: 11px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
  }
  .error {
    border: 1px solid #CF3A24;
  }
</style>
