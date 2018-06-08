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
                </div>
            </div>
        </div>
        <div id="explanation" v-html="explanation" style="white-space:pre-line;display : none" class="animated flash"></div>
    </div>
</template>
<script>
import navbarS from '../../navigationBar/navbarSM.vue';
import { funMixin } from '../../function';
  export default {
  
    data: function() {
  
      return {
  
        question: {
  
          html: `
  
                                   <div id="app"></div>
  
                                `,
  
          js: `
  
                                 new Vue({
  
                                 el : "#app",
  
                                    created: function() {
  
                                     this.$once('hook:mounted', function(){
  
                                       console.log('mounted inside created')
  
                                     });
  
                                    console.log('created')
  
                                    },
  
                                    mounted : function(){
  
                                            this.$once('hook:created', function(){
  
                                            console.log('created inside mounted');
  
                                        })
  
                                    console.log('mounted');
  
                                    }
  
                                  }) 
  
                                `
  
        },
  
        options: {
  
          B: `
  
                              <div style="height : 200px">
  
                                <p>mounted inside created</p>
  
                                <p>created</p>
  
                                <p>created inside mounted</p>
  
                                <p>mounted</p>
  
                              </div>
  
                              `,
  
          D: `
  
                              <div style="height : 200px">
  
                                <p>created</p>
  
                                <p>mounted inside created</p>
  
                                created</p>
  
                              </div>
  
                              `,
  
          C: `
  
                                <div style="height : 200px">
  
                                <p>created</p>
  
                                <p>mounted inside created</p>
  
                                <p>mounted</p>  
  
                                <p>created inside mounted</p>  
  
                                </div>
  
                              `,
  
          answer: `
  
                              <div style="height : 200px">
  
                                <p>created</p>
  
                                <p>mounted</p>
  
                                <p>mounted inside created</p>
  
                              </div>
  
                              `
  
        }, //option
  
        explanation: `
  
                            <div class="text-justify">
  
                             Created and mounted are two life-hook(s) provided by the vue.
  
                             As the name says: created life hook gets invoked when the template is created or to be specific 'el' is created.
  
                             Similarly, mounted is invoked when the template is mounted on the DOM, to be specific, when 'el' is mounted on the DOM.
  
                             <hr>
  
                             This is very obvious that a particular element(el here -> app) can be created in DOM only once,and hence the <strong>created</strong> can hence be invoked only once, but i can be mounted on DOM several a times.
  
                             Though inside the <strong>created</strong>'s function console command of <strong>hook:mounted</strong> is written but this is <u>explicit</u> calling of the <strong>mounted</strong> life hook, but the preceence
  
                             is given to the implicit calling or one may say to the <i><u>mounted:function(){ /* body */ }</i></u>, hence mounted is called then,followed by invoking the <strong>hook:mounted</strong> and hence the 
  
                             <i>mounted inside created</i> is printed. <b><u>But</u></b> an element can't be mounted before being created, thus <strong>created</strong>'s console command get called before anything else.
  
                             <strong>*NOTE*</strong> : Even if mounted's function is wriiten before created's, created  will be invoked first. 
  
                             <strong>*NOTE*</strong> : <u>created inside mounted</u> will not be printed as the element can't be created again.
  
                            </div>
  
                          `
  
      }
  
    },
        components : {
      navbarS : navbarS
    },
    mixins:[funMixin]
  }
</script>
