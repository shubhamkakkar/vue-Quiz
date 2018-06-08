import quizBegin from './components/quizBegin.vue';

import q1 from './components/QA/1/Q1.vue';
import q2 from './components/QA/2/Q2.vue';
import q3 from './components/QA/3/Q3.vue';
import q4 from './components/QA/4/Q4.vue';

export const routes = [
    {
        path : '', name : 'quizBegin', components : {default : quizBegin}
    },
    {
        path : '/q1',  name : 'q1', components: {default : q1}
    },
    {
        path : '/q2',  name : 'q2', components: {default : q2}
    },
    {
        path : '/q3',  name : 'q3', components: {default : q3}
    },
    {
        path : '/q4',  name : 'q4', components: {default : q4}
    },
    {
        path : '*',  redirect : '/'
    }
];

