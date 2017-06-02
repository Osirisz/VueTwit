<template>
  <div class="ui text container">
    <div class="ui segment con">
      <img src="../assets/logo.png">
      <p id="name">Osirisz</p>
      <p id="time">5 minute ago</p>
      <p id="text">Hello Vue</p>
    </div>
    
  </div>
</template>

<style scoped>
  .con{
    height: 100px;
  }
  img{
    height: 70px;
    width: 70px;
    float: left;
    margin-right: 10px;
  }
  #name{
    font-size: 18px;
    float: left;
    margin-right: 20px;
  }
  #time{
    font-size: 14px;
    color: grey;
  }
  #text{
    font-size: 16px;
  }
</style>
