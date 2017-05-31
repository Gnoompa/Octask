<template>
  <div id="app">
  test
    </router-view name='login'>
    <router-link to="/login">test</router-link>
  </div>
</template>

<style>
  input {
    border:  0;
    outline: none;
    font-size: 1.25rem; 
    box-shadow: 0 2px 5px #d5d5d5;    
    font-weight: 100;
    margin-bottom: .5rem;
    padding: 1rem 1.75rem;
  }

  button {
    width: 100%;
    background: #fff;
    border:  0;
    font-weight: 100;
    text-transform: uppercase;
    outline: none;
    padding: 1rem 1.75rem;
    font-size: 1.25rem; 
    box-shadow: 0 2px 5px #d5d5d5;    
  }

  input, button {
    transition: .3s;
  }

  input:focus, input:hover, button:focus, button:hover {
    box-shadow: 0 5px 10px #d1d1d1;    
  }

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

  fieldset {
    border: none;
  }
</style>
