<template>
    <div>
        <navbar-s></navbar-s>
        <!-- <div class="container px-0">
            <div class="row bg-dark text-white p-5">
                <div class="col-md-6 border" style="white-space:pre-line">
                    <footer class="text-muted float-right pr-0">html-file</footer>
                    <div style="">
                        {{ question.html }}
                    </div>
                </div>
                <div class="col-md-6 border pl-5">
                    <footer class="text-muted float-right">js-file</footer>
                    <div style="white-space:pre-line;">
                        {{ question.js }}
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-6 mx-auto" v-for="(option,index) in options" :key="option[index]">
                    <button :id="option.id" class="my-1 btn btn-outline-primary w-75 h-75 text-left" @click="evaluate(index)" :index="option[index]" v-html="option">
                    </button>
                </div>
            </div>
        </div>
        <div id="explanation" v-html="explanation" style="white-space:pre-line;display : none"></div> -->
        <div class="text-center text-danger">
          <h1>TO BE ADDDED</h1>
        </div>
    </div>

</template>


<script>

import navbarS from '../../navigationBar/navbarSM.vue';
import { funMixin } from '../../function';

export default {
    data : function(){
        return {
            question : ' What is the differnce between vue-components and vue-instance ', 
        }
    },
    components : {
      navbarS : navbarS
    },
    mixins:[funMixin]
  
}
</script>
