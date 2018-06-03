<template>
<div>
    <div class="container">
        <div class="row">
            <div class="col">
                <!-- this is where I am placing my router -->
                <router-view></router-view>
            </div>
        </div>
    </div>
    <footer>
        <div class="bg-dark text-white fixed-bottom text-center" style="width: 100%; margin : 0; padding  : 0;">
            All rights reserved to <span>Shubham Kakkar</span>
        </div>
    </footer>
</div>
</template>
<script>
  export default{
  }
</script>
<style scoped>

</style>
