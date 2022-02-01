
// clock


const sec =document.querySelector('.s');
const min =document.querySelector('.m');
const hour =document.querySelector('.h');

setInterval(() =>{
    let date= new Date();
let cur_sec =date.getSeconds();
let cur_min =date.getMinutes();
let cur_hour =date.getHours();

sec.style.transform =`rotate(${times(60, cur_sec)}deg)`;
min.style.transform =`rotate(${times(60, cur_min)}deg)`;
hour.style.transform =`rotate(${times(12, cur_hour)}deg)`;

},1000);
function times(date, curr){
    return(360* curr)/date;
}

/**
 * Get Element 
 */

 const skills =document.querySelectorAll('.skill');
 const list_item =document.querySelector('.list-item');
 
 skills.forEach( skill =>{
     skill.addEventListener('change', function(){
 
         let all_data =document.querySelectorAll('.skill:checked');
         
         let skill_arr =[];
 
         all_data.forEach( data =>{
             skill_arr.push(data.value);
            
         });
         let list ='';
         skill_arr.map(data =>{
             list +=`
             <li class="list-group-item">${data}</li>
             `;
         });
         list_item.innerHTML=list;
 
         
         
         
 
     });
 });
 
//  cal

//================ calculator part ====================>

let cal_data = [];

function valGet(val){

  cal_data.push(val)
  document.querySelector('.top_monitor').innerHTML = cal_data.join('');
  document.querySelector('.main_monitor').innerHTML = 0;

};


function finalresult(){

    let cal_string = cal_data.join('');
    document.querySelector('.main_monitor').innerHTML = eval(cal_string);


};

function allclear(){

  cal_data ='';

  document.querySelector('.top_monitor').innerHTML = 0;
  document.querySelector('.main_monitor').innerHTML = '';

};

function  back(){
    cal_data.pop();
    document.querySelector('.top_monitor').innerHTML = cal_data.join('');

}

function musa(){
  document.querySelector('.top_monitor').innerHTML = '';
  document.querySelector('.main_monitor').innerHTML = '';

}