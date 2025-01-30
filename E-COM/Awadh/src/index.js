
let link = document.querySelectorAll(".mainLink");
link.forEach((el, index) => {
  el.firstElementChild.addEventListener("mouseover", () => {
    el.childNodes[3].style.visibility = "visible";
  })
  el.firstElementChild.addEventListener("mouseout", () => {
    el.childNodes[3].style.visibility = "hidden";
  })
});
if(localStorage.getItem("signup")==undefined){

  localStorage.setItem("signup",JSON.stringify([{
    name:"devn",
    email:"devn5900@gmail.com",
    stat:false,
    password:"5900"
  }]));
}

let slider = [
  {
    "link": "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/50/original-1031-STDCRE-43056-DS-WC-November-Batching-Shot-09-HomePage_1920x700-021350.jpg",
    "title": "All Wrapped Up. ",
    "desc": "The best beauty gifts come in limited-edition packages.",
    "button": "Shop now"

  },
  {
    "link": "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/34/1007-STDCRE-41315-WC-DS-Dermstore-Advent-Calendar-2022-Trading-Gif-1920x700-034034.gif",
    "title": "25 Days of Beauty",
    "desc": "Countdown to the ultimate holiday routine with our Beauty Advent Calendar, featuring 25 days of delightful full & deluxe-size favorites from our most-wanted brands. SHOP NOW",
    "button": "Shop now"

  },
  {
    "link": "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/15/original-1031-STDCRE-43056-DS-WC-November-Batching-Shot-02A-HomePage_1920x700-020215.jpg",
    "title": "‘Tis the Season to Change Things Up",
    "desc": " Whether it’s a stronger retinol or a more nourishing moisturizer, get your skin out of a rut by rebooting your routine for next-level results.",
    "button": "Shop now"
  },
  {
    "link": "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/09/original-1027-STDCRE-42686-DS-EF-Cyber-Waitlist-V1-1920x700-082409.jpg",
    "title": "Get on the List",
    "desc": " Our biggest sale of the year is coming. Join the Black Friday Sale waitlist now & be the first to shop.",
    "button": "Sign in"

  },
  {
    "link": "https://static.thcdn.com/images/xlarge/webp/widgets/208-us/12/original-1031-STDCRE-43056-DS-WC-November-Batching-Shot-02-HomePage_1920x700-094812.jpg",
    "title": "For Your Very Nice List",
    "desc": " Go ahead & splurge: Treat them to everything on their list with more time to pay. Checkout with Klarna & Afterpay to take advantage of four, interest-free payments.",
    "button": "Shop now"

  }];
let index = slider.length - 1;
let ss;

show(index);
function show(index) {
  let slidebanner = document.querySelector("#slideBanner");
  ss = setInterval(() => {
    if (index < 0) {
      index = slider.length - 1;
    }
    slidebanner.classList.remove("fade");
    slidebanner.innerHTML = '';
    slidebanner.setAttribute("class", "slideBanner")
    slidebanner.setAttribute("id", "slideBanner")
    let img = document.createElement("img");
    img.src = slider[index].link;

    let sliderInfo = document.createElement("div");
    sliderInfo.setAttribute("class", "sliderInfo");

    if (index % 2 == 1) {
      sliderInfo.style.color = "black";
    }
    let h1 = document.createElement("h1");
    h1.innerText = slider[index].title;
    sliderInfo.append(h1);

    let p = document.createElement("p");
    p.innerText = slider[index].desc;
    sliderInfo.append(p);

    let button = document.createElement("button");
    button.innerText = slider[index].button;

    sliderInfo.append(button);
    slidebanner.append(img, sliderInfo);
    slidebanner.classList.add("fade");

    index--;
  }, 2500);
}

let flag = false;

document.querySelector("#prev").addEventListener("click", () => {
  clearInterval(ss);
  if (index == 0) {
    document.getElementById("prev").setAttribute("disabled", "true");
    // index=0;
  } else {

    index--;
    show(index);
  }
});
document.querySelector("#next").addEventListener("click", () => {
  clearInterval(ss);
  if (index == slider.length - 1) {
    document.getElementById("next").setAttribute("disabled", "true");
  } else {

    index++;
    show(index);

  }
});



//////////////////////////////////////////////////////////


//////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
let mainData;
fetch('https://636a539ec07d8f936d9a5d5e.mockapi.io/awadhStore/awadhStore')
  .then((response) => response.json())
  .then((data) => {
    // console.log('Success:', data);
    mainData=data;
    showData(mainData);
    display(mainData);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  
  function display(data){
    let item=document.querySelector("#item");
    item.innerHTML='';
    // console.log(data);
    data.forEach((el)=>{
        let div= document.createElement("div");
        div.setAttribute("class","item");
        div.classList.add("swiper-slide");

        let img= document.createElement("img");
        img.src=el.link;

        let p= document.createElement("p");
        p.innerText=el.title;
  
        let p1= document.createElement("p");
        p1.innerHTML=`<i class="fa-sharp fa-solid fa-star"></i>
        <i class="fa-sharp fa-solid fa-star"></i>
        <i class="fa-sharp fa-solid fa-star"></i>
        <i class="fa-sharp fa-solid fa-star"></i>
        <i class="fa-sharp fa-solid fa-star"></i>`;
        
        let span= document.createElement("span");
        span.innerText=el.rating;
        p1.appendChild(span);

        let p2= document.createElement("p");
        p2.innerText='$'+el.price;

        let button= document.createElement("button");
        button.innerText="QUICK BUY";
      button.addEventListener("click",()=>{
        addtoCart(el);

      })


        div.append(img,p,p1,p2,button);
        item.append(div);
    
        // console.log(div);
    })
  }

  function showData(elment){
    let item=document.querySelector("#eltaCart");
    item.innerHTML='';
    elment.forEach((el)=>{
        let div= document.createElement("div");
        div.setAttribute("class","transform");
        div.style.transition="transform 0.5s ease-in-out";
        let img= document.createElement("img");
        img.src=el.link;

        let p= document.createElement("p");
        p.innerText=el.title;
      

        let p1= document.createElement("p");
        p1.innerHTML=`<i class="fa-sharp fa-solid fa-star"></i>
        <i class="fa-sharp fa-solid fa-star"></i>
        <i class="fa-sharp fa-solid fa-star"></i>
        <i class="fa-sharp fa-solid fa-star"></i>
        <i class="fa-sharp fa-solid fa-star"></i>`;
        
        let span= document.createElement("span");
        span.innerText=el.rating;
        p1.appendChild(span);

        let p2= document.createElement("p");
        p2.innerText='$'+el.price;

        let bbtt= document.createElement("button");
        bbtt.innerText="QUICK BUY";
        bbtt.addEventListener("click",()=>{
          addtoCart(el);
        });

        div.append(img,p,p1,p2,bbtt);
        item.append(div);
        
        // console.log(div);
    })
    let btndiv= document.createElement("div");
    btndiv.setAttribute("class","buttt");

    let trans= document.querySelectorAll(".transform");
    let prevb= document.createElement("div");
    prevb.setAttribute("id","prevb");
    prevb.innerHTML=`<i class="fa-solid fa-caret-left"></i>`;
    prevb.addEventListener("click",()=>{
      trans.forEach((el)=>{
        if(el.style.transform=="translateX(-100%)"){
          el.style.transform="translateX(100%)";
        }else{
          
          el.style.transform="translateX(-100%)";
          }
        // el.style.transition="transform 2s ease-in-out";
       
      })
    })

    
    let nextb= document.createElement("div");
    nextb.setAttribute("id","nextb");
    nextb.innerHTML=`<i class="fa-solid fa-caret-right"></i>`;
    nextb.addEventListener("click",()=>{
      trans.forEach((el)=>{
        // el.style.transition="transform 2s ease-in-out";
        // el.style.transform="translateX(100%)";
        if(el.style.transform=="translateX(100%)"){
          el.style.transform="translateX(-100%)";
        }else{
          
          el.style.transform="translateX(100%)";
          }
      })
    })

    btndiv.append(prevb,nextb);
    item.appendChild(btndiv)

  }
////////////////////////////////////////////////
changeCartValue();
function changeCartValue(){

  let  cartC = JSON.parse(localStorage.getItem("AwadhStoreCart"))||[];
  document.querySelector("#cartCount").innerText=cartC.length;
}

function addtoCart(el){
  let cart = JSON.parse(localStorage.getItem("AwadhStoreCart"))||[];
let flag=false;
  cart.forEach((ele)=>{
    if(el.id==ele.id){
     flag=true;
     return;
    }
  });
  if(flag==true){
    alertBox("Product is already in cart","#F45D37")
  }else{
    el["subtotal"]=el.price;
    cart.push(el);
    localStorage.setItem("AwadhStoreCart",JSON.stringify(cart));
    changeCartValue();
    alertBox("Product Added To the Card","#36946F")
  }
}

function alertBox(msg,color){
  let alert= document.querySelector("#alert");
  alert.style.visibility="visible";
  innerHTML='';
  alert.style.backgroundColor=color;
  let span=document.createElement("span");
  span.innerText=msg;
  let span2=document.createElement("span");
  span2.innerHTML=`<i class="fa-sharp fa-solid fa-xmark"></i>`;

  alert.append(span,span2);
  alert.style.transform="translateX(-50%)";
  setTimeout(() => {
    alert.style.transform="translateX(150%)";
    setTimeout(() => {
      
      alert.innerHTML='';
  alert.style.visibility="hidden";

    }, 1050);
}, 1000);
}
document.querySelector(".close").addEventListener("click",()=>{
    document.querySelector(".webInfo").style.visibility="hidden";
})


let logo=  JSON.parse(localStorage.getItem("signup"));
console.log(logo);

let lg=false;
let userName='';
logo.forEach((el)=>{
    if(el.stat==true){
        lg=true;   
        userName=el.name;
        return;
     }
});
if(lg==true){
  document.querySelector("#userName").innerText=userName;
  let authDrop=document.querySelector("#authDrop");
authDrop.innerHTML='';
  let li= document.createElement("li");
let a=document.createElement("a");
a.setAttribute("id","logout");
a.setAttribute("href","#");
a.innerHTML=`<i class="fa-solid fa-user-secret"></i> &nbsp; Log Out`;

li.append(a);
  authDrop.append(li);
  
}else{
  document.querySelector("#userName").innerText="Account";
  let authDrop=document.querySelector("#authDrop");
  innerHTML='';
  let li= document.createElement("li");
  let a=document.createElement("a");
  a.setAttribute("id","logout");
  a.setAttribute("href","./sections/loginSign.html");
  a.innerText="Sign Up/Log In";
  li.append(a);
  authDrop.append(li);
}
document.querySelector("#logout").addEventListener("click",()=>{
let lg= JSON.parse(localStorage.getItem("signup"));
  lg.forEach((el)=>{
    if(el.stat==true){
      el.stat=false;   
      return;
   }
    });
    localStorage.setItem("signup",JSON.stringify(lg));
    console.log("logout")
});

document.querySelector("#srbtn").addEventListener("click",()=>{
  console.log(window.location);
  window.location=`../sections/search.html?search=${document.querySelector("#search").value}`;
})


