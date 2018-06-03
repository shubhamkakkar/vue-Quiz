export const funMixin= {
  methods : {
    evaluate(index){
    //   console.log(index);
     if( index ===  'answer'){
         alert('correct answer')
     }
     else{
         alert('wrong answer')
     }
   toggleShow(index);
  }
 }
} 

 function toggleShow(index){
    let show = document.getElementById('explanation');
    if(show.style.display === 'none'){
       show.style.display = 'block'; 
    }
}

export const dataBtn = {
    data(){
        return{
           questions : ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5'],
           nameRoute : ['q1', 'q2', 'q3', 'q4', 'q5']
        };
    }
}
