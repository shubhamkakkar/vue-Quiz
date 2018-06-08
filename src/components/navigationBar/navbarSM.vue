<template>
<div>
    <transition 
      appear
      enter-active-class="animated slideInDown"
    >
        <app-header v-if="$route.path !='/' " key="1" class="my-2"></app-header>
    </transition> 
    <nav id="navbar" class="navbar navbar-expand-md my-auto">
        <div class="container">
            <div class="row w-100">
                    <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                            <span class="navbar-toggler-icon">
                                <img class="img" src="../../assets/logo.png" alt="alt">
                            </span>
                    </button>
                <div class="col-md-3" v-for="(question, index) in questions" :key="question.index">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item mx-5">
                                <router-link :to="{ name : nameRoute[index]}" tag="button" 
                                class="btn btn-block font-weight-bold" id="btn">
                                    {{ question}}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</div>
</template>
<script>
import {dataBtn} from '../function.js';
import header from "../header.vue";
export default {
  mixins: [dataBtn],
  components : {
      appHeader : header
  }    
}
</script>

<style scoped>
@import '../buttonCSS.css'
</style>
