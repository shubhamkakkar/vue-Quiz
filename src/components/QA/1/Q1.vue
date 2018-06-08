<template>
    <div>
        <navbar-s></navbar-s>
        <div class="container px-0">
            <div class="row bg-dark text-white p-5">
                <div class="col-md-6 border" style="white-space:pre-line">
                    <footer class="text-muted float-right pr-0">html-file</footer>
                    <transition
                      appear 
                      enter-active-class="animated slideInLeft"
                    >
                        <div>
                        {{ question.html }}
                        </div> 
                    </transition> 
                   
                </div>
                <div class="col-md-6 border pl-5">
                    <footer class="text-muted float-right">js-file</footer>
                    <transition
                      appear 
                      enter-active-class="animated slideInRight"
                    >
                    <div style="white-space:pre-line;">
                        {{ question.js }}
                    </div>
                  </transition>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-6 mx-auto" v-for="(option,index) in options" :key="option[index]">
                  <a href="#explanation" :id="option.id" class="my-1 btn btn-outline-primary w-75 h-75 text-left" @click="evaluate(index)" :index="option[index]" v-html="option">
                  </a>  
                    <!-- <button :id="option.id" class="my-1 btn btn-outline-primary w-75 h-75 text-left" @click="evaluate(index);" :index="option[index]" v-html="option">
                    </button> -->
                </div>
            </div>
        </div>
        <h4 id="explanation" v-html="explanation" style="white-space:pre-line;display : none" class="animated flash"></h4>
    </div>
</template>

<script>
import navbarS from '../../navigationBar/navbarSM.vue';
import { funMixin } from "../../function";

export default {
  data: function() {
    return {
      question: {
        html: `
  
                                   <div id="app">
  
                                    <div onload="loadBool()">Loaded  ? 
  
                                       <span id="onloadCheck">
  
                                       </span>
  
                                    </div>
  
                                    <div>Loaded  ? 
  
                                       <span id="loadCheckVue">
  
                                       </span>
  
                                    </div>
  
                                   </div>
  
                                `,

        js: `
  
                                 let counter = 0;
  
                                 new Vue({
  
                                 el : "#app",
  
                                    mounted :  function(){
  
                                      document.getElementById("loadCheckVue").innerText = 'Yes, 
                                      through mounted';
  
                                      counter++;
  
                                      console.log(counter)
  
                                    }
  
                                  }) 
  
  
  
                                    function loadBool(){
  
                                     document.getElementById('onloadCheck').innerText = 'Yes, 
                                     through onload function';
  
                                     counter++;
  
                                     console.log(counter)
  
                                  }
  
                                `
      },

      options: {
        answer: `
  
                                <div>
  
                                  <p>Loaded ?</p> 
  
                                  <p>Loaded ? Yes, through mounted</p> 
  
                                </div>
  
                              `,

        B: `
  
                              <div>
  
                                  <p>Loaded ? Yes, through onlaod function</p> 
  
                                  <p>Loaded ? Yes, through mounted</p>
  
                                </div>
  
                              `,

        C: `
  
                                <div>
  
                                  <p>Loaded ? Yes, through onlaod function</p>
  
                                  <p>Loaded ? </p>
  
                                </div>
  
                              `,

        D: `
  
                              <div class="text-danger text-center">
  
                               *ERROR*
  
                              </div>
  
                              `
      }, //option

      explanation: `
  
                            <div class="text-center">
  
                              Vue.js doen't support onload function, the alternative is mounted life cycle hook 
  
                            </div>
  
                          `
    };
  },
  components: {
    navbarS: navbarS 
  },
  mixins: [funMixin]
};
</script>
<style scoped> 

</style>
