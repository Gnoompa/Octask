<template>
	<section id="container">
		<img class="logo--main" src="./assets/octy.png">
		<section class="login">
		    <fieldset>
		        <input v-model="username" placeholder="Email">
		        <input v-model="password" placeholder="Password">        
		        <button type="button" @click='test'>Sign in</button>
		    </fieldset>        
		</section>
	</section>
</template>

<script>
	export default {
        name: 'login',
        data () {
            return {
                username: null,
                password: null
            }
        },
        methods: {
            test: function () {
                if (this.username === 'test' && this.password === 'test') {
                  this.$router.push('dashboard');
                }      
            }
        } 
    }
</script>

<style>
	#container {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;    
    text-align: center;
    color: #2c3e50;
    position: fixed;
    top:  50%;
    left:  50%;
    transform: translate(-50%, calc(-50% - 3rem));
  }

  .logo--main {
    max-width: 7rem;
  }

  .login {    
    display: flex;
    flex-direction: column;
     align-items: center;
     margin-top:  3rem !important; 
     justify-content: stretch;
  }

  .login > fieldset {
        display: flex;
     flex-direction: column;
     align-items: center;
  }	
</style>
