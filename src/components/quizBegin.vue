<template>
<div>
    <transition
     appear
     enter-active-class="animated slideInDown"
    >
        <navbar-s></navbar-s>
    </transition>
    <div class="container mt-5">
        <div class="row mx-4">
            <div class="col">
                <h1 class="text-center animated tada">
                    Welcome Developers.
                 </h1>
                <p class="text-center">
                    <!-- font increase -->
                    Here a few of your <strong>VUE.JS</strong> concepts will be tested, I assume you are well-versed with <strong>VUE.JS</strong>, But still let us discuss.
                </p>
            </div>
        </div>
        <h3 class="display-2 text-center" id="vue">What is Vue.js?</h3>
        <hr style="border : 1px solid #35495e; ">
        <div class="row mx-4">
            <div class="col-sm-6 m-auto d-none d-md-block">
               <img src="../assets/logo.png" alt="vue">
            </div>
            <div class="col">
                <div id="info">
                    <p>
                        Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic 
                        frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is 
                        focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.
                        On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in 
                        combination with modern tooling and supporting libraries.
                    </p>
                    <p>
                        If you’d like to learn more about Vue before diving in, we created a video walking through the core principles 
                        and a sample project.
                    </p>
                </div>
            </div>
        </div>
    <br>
    </div>
</div>
</template>

<script>
  import navbarS from '../components/navigationBar/navbarSM.vue'
  export default {
  
   components : {
      navbarS : navbarS
   }
    }
</script>

<style scoped>
#vue {
    color :#41b883; 
}
</style>
