<template>
  <div id="app">
    <div class="ui text container">
      <div class="ui center aligned grid">
        <p id="header">
          Twitty
        </p>
      </div>  
    </div> 
    <br>
    <Navbar></Navbar>
    <br>
    <p id="topic">Twitty</p>
    <br>
    <Content v-for="x in list" :key="x" id="cont"></Content>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Content from '@/components/Content'
export default {
  name: 'app',
  components: {
    Navbar,
    Content
  },
  data () {
    return {
      list: [1, 2, 3]
    }
  }
}
</script>

<style>
  body{
    margin-top: 20px;
    font-family: cursive;
  }
  #header{
    font-size: 60px;
    text-align: right;
    font-family: cursive;
  }
  #topic{
    font-size: 25px;
    text-align: center;
  }
  #cont{
    margin-bottom: 10px;
  }
  @import '../node_modules/semantic-ui-css/semantic.min.css';
  
</style>
