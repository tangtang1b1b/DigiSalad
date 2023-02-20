const images = ['./image/1.png','./image/2.png','./image/3.png','./image/4.png'];

const vm = Vue.createApp({
    data(){
        return{
            ggs:4,
            do:0,
            count:1,
            check:true,
            open:false,
            imgs:['./image/asia.svg','./image/asia.svg','./image/asia.svg','./image/asia.svg'],
            cards:[{logo:"1",h3:"UX Design"},{logo:"2",h3:"UX Design"},{logo:"3",h3:"website development"},
                    {logo:"4",h3:"mobile app development"},{logo:"5",h3:"ecommerce"},{logo:"6",h3:"customer loyalty"},
                    {logo:"7",h3:"digital transformation"},{logo:"8",h3:"digital marketing"},{logo:"9",h3:"BRANDING"}],
        }
    },
    methods: {
        load() {
            for (let i = 0; i < images.length; i++) {
                let img = new Image();
                img.src = images[i];
                console.log(img.src);
            }
        },
        sidein(){
            let sidein = document.querySelectorAll(".sidein");
            window.addEventListener("scroll",()=>{
                sidein.forEach((v,i)=>{
                    let dtop = v.getBoundingClientRect().top;
                    if(dtop<window.innerHeight){
                        sidein[i].classList.add("sideinin");
                    }
                })
            });
        },
        bye(){
            let salad = document.querySelector(".salad");
            setTimeout(()=>{
                salad.style.display="none";
            },3000);
        },
        view(){
            let head = document.querySelector(".head");
            let hamber = document.querySelectorAll(".hamber .path");
            let logo = document.querySelector(".logoinner");
            window.addEventListener("scroll",()=>{
                if(window.scrollY > 0 && this.do%2==0){
                    head.style.backgroundColor="white";
                    hamber.forEach(v=>{
                        v.style.backgroundColor="#414042";
                    });
                    this.open=true;
                    logo.style.animation="logo 0.3s both";

                }else{
                    head.style.backgroundColor="transparent";
                    hamber.forEach(v=>{
                        v.style.backgroundColor="white";
                    });
                    setTimeout(()=>{
                        logo.style.animation="logoback 0.3s both";
                    },300);
                    this.open=false;
                }
            });
        },
        hamber(){
            let logo = document.querySelector(".logoinner");
            let head = document.querySelector(".head");
            let hamber = document.querySelectorAll(".hamber .path");
            let list = document.querySelector(".list");
            let aside = document.querySelectorAll(".aside");
            let startbtn = document.querySelector(".startbtn");
            if(this.check==true){
                this.do++;
                head.style.backgroundColor="transparent";
                this.open=false;
                hamber.forEach(v=>{
                    v.style.backgroundColor="white";
                })
                startbtn.classList.add("close");
                list.style.display="block";
                list.style.animation="opain 0.3s both";
                aside[0].style.animation="aside 0.3s both";
                aside[1].style.animation="aside 0.3s 0.05s both";
                aside[2].style.animation="aside 0.3s 0.13s both";
                aside[3].style.animation="aside 0.3s 0.16s both";
                aside[4].style.animation="aside 0.3s 0.19s both";
                aside[5].style.animation="aside 0.3s 0.22s both";
                hamber[2].style.width="0px";
                hamber[0].style.top="9px";
                setTimeout(()=>{
                    hamber[0].style.transform="rotate(45deg)";
                    hamber[1].style.transform="rotate(135deg)";
                },300);
                this.check=false;
            }else{
                this.do++;
                this.open=true;
                if(window.scrollY==0){
                    logo.style.opacity=0;
                    hamber.forEach(v=>{
                        v.style.backgroundColor="#fff";
                    })
                }
                else if(window.scrollY>0){
                    logo.style.animation="logo 0.3s both";
                    head.style.backgroundColor="white";
                    hamber.forEach(v=>{
                        v.style.backgroundColor="#414042";
                    })
                }
                startbtn.classList.remove("close");
                list.style.animation="opaout 0.5s both";
                aside[0].style.animation="asidego 0.3s both";
                aside[1].style.animation="asidego 0.3s 0.05s both";
                aside[2].style.animation="asidego 0.3s 0.13s both";
                aside[3].style.animation="asidego 0.3s 0.16s both";
                aside[4].style.animation="asidego 0.3s 0.19s both";
                aside[5].style.animation="asidego 0.3s 0.22s both";
                hamber[0].style.transform="rotate(0deg)";
                hamber[1].style.transform="rotate(0deg)";
                setTimeout(()=>{
                    list.style.display="none";
                    hamber[2].style.width="26px";
                    hamber[0].style.top="0px";
                },500);
                this.check=true;
            }
        },
        right(){
            let bannerimg = document.querySelector(".bannerimg");
            let numf = document.querySelector(".numf");
            let product = document.querySelector(".product");
            let protro = document.querySelector(".protro");
            if(this.count<=4){
                product.style.animation="right 0.3s 0.1s forwards";
                protro.style.animation="right 0.3s forwards";
                setTimeout(()=>{
                    this.count+=1;
                    numf.innerText = '0'+this.count;
                    product.style.animation="rightin 0.3s 0.1s both";
                    protro.style.animation="rightin 0.3s 0.2s both";
                    bannerimg.style.animation="backin 20s infinite";
                    if(this.count==5){
                        this.count=1;
                        numf.innerText = '0'+this.count;
                    }
                },300);
            }
        },
        left(){
            let bannerimg = document.querySelector(".bannerimg");
            let numf = document.querySelector(".numf");
            let product = document.querySelector(".product");
            let protro = document.querySelector(".protro");
            if(this.count>=1){
                product.style.animation="right 0.3s 0.1s forwards";
                protro.style.animation="right 0.3s forwards";
                setTimeout(()=>{
                    this.count-=1;
                    numf.innerText = '0'+this.count;
                    product.style.animation="rightin 0.3s 0.1s both";
                    protro.style.animation="rightin 0.3s 0.2s both";
                    bannerimg.style.animation="backin 20s infinite";
                    if(this.count==0){
                        this.count=4;
                        numf.innerText = '0'+this.count;
                    }
                },300);
            }
        },
        showImage(a){
            return a==this.count
        },
    },
    mounted(){
        this.load();
        this.showImage();
        this.sidein();
        this.bye();
        this.view();
    },
});
vm.mount("#App");