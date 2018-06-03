<template>
    <div>
        <navbar-s></navbar-s>
        <div class="container px-0">
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
        <div id="explanation" v-html="explanation" style="white-space:pre-line;display : none"></div>
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
  
                                   <div id="app">
  
                                  <div  v-for="( key, marks) in studentData">
  
                                  {{ marks }} - {{ key.name }} - {{key.marks }}%
  
                                  </div>
  
                                </div>
  
                                `,
  
          js: `
  
                                  new Vue({
  
                                     el : "#app",
  
                                     data : {
  
                                         studentData : {
  
                                              student1: {
  
                                                 name : 'Shuhbam Kakkar',
  
                                                 marks : 75
  
                                             },
  
                                             student2:{
  
                                                 name : "Diksha kakkar",
  
                                                 marks : 80
  
                                             }
  
                                         }
  
                                     }
  
                                 })
  
                                `
  
        },
  
        options: {
  
          B: `
  
                              <div>
  
                              <p>name- Shuhbam Kakkar - 75%</p>
  
                              <p>name- Diksha kakkar - 80%</p>
  
                              </div>
  
                              `,
  
          answer: `
  
                              <div>
  
                              <p>student1 - Shuhbam Kakkar - 75%</p>
  
                              <p>student2 - Diksha kakkar - 80%</p>
  
                              </div>
  
                              `,
  
          D: `
  
                              <div>
  
                              <p>{{ key }} - Shuhbam Kakkar - 75%</p>
  
                              <p>{{ key }} - Diksha kakkar - 80%</p>
  
                              </div>
  
                              `,
  
          C: `
  
                                <div class="text-center text-danger" >
  
                                  Error
  
                                </div>
  
                              `
  
        }, //option
  
        explanation: `
  
                            <div>
  
                             key is a unique value say for an object, whereas student here is an allias or a reference to name memory location.
  
                             student is hence used for referencing the respective elements the object, and key(<b>marks</b>) is assigned autoamatically by the vue.js
  
                             thus while itterating, at zeroth object, student1's data is getting printed in the asked order followed by the data of student2 being printed
  
                             Here key is treated as alias and marks is treated as key value  
  
                             <b>* NOTE *</b> key should be treated as a keyword though is an identifier, as it will prevent the basic confusion like one such in this question.
  
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
