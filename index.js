
function addnewWefiled(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('wefiled')
    newNode.classList.add('mt-3');
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder', 'Enter Here');

    let we = document.getElementById('we');
    let weAddbutton = document.getElementById("weAddbutton");
    we.insertBefore(newNode,weAddbutton);
}
function myAddAc(){
 let newNode = document.createElement('textarea');
 newNode.classList.add('form-control');
 newNode.classList.add('Acfiled');
 newNode.classList.add('mt-3');
 newNode.setAttribute('rows', 3);
 newNode.setAttribute('placeholder', 'Enter Here');

 let Ac = document.getElementById('Ac');
 let aqAddbutton = document.getElementById('aqAddbutton');
 Ac.insertBefore(newNode, aqAddbutton)
}
//for genretcv();
function genretcv(){
   let namefild = document.getElementById("namefild").value;
   let namet = document.getElementById('namet');
   namet.innerHTML = namefild;
   
   let name2 = document.getElementById('name2').innerHTML = namefild;
   document.getElementById("contectt").innerHTML =
   document.getElementById('contactfild').value;

   document.getElementById("adresst").innerHTML =
   document.getElementById('adreshfilde').value;

   document.getElementById("fbt").innerHTML =
   document.getElementById('ffild').value;  

   document.getElementById("int").innerHTML =
   document.getElementById('instafild').value;

   document.getElementById("linkt").innerHTML =
   document.getElementById('linkfild').value;

   document.getElementById("gitt").innerHTML =
   document.getElementById('gitfild').value;

   document.getElementById('objectivt').innerHTML =
   document.getElementById('objfilde').value;
// for work
   let workfilde = document.getElementsByClassName('wefiled');
   let str = "";
 
   for(let x of workfilde){
    str += `<li> ${x.value} </li>`;

   }
   document.getElementById('workt').innerHTML = str;
   //for Academic qualification
   let Acfiled = document.getElementsByClassName('Acfiled');
   let text = '';
   for(let e of Acfiled){
    text += `<li> ${e.value} </li>`;
   }
   document.getElementById('Act').innerHTML = text;

   //for Img
   let file = document.getElementById('imgfiled').files[0];
 
     let reader = new FileReader();
     reader.readAsDataURL(file);
    //  set img
    reader.onloadend = ()=>{
        document.getElementById('img').src = reader.result;
    };




    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-templete').style.display = 'block';   
}

//print cv
function printcv(){
    window.print();
};