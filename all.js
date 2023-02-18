

const vm = Vue.createApp({
    data(){
        return{
            check:true,
            open:false,
            imgs:['./image/asia.svg','./image/asia.svg','./image/asia.svg','./image/asia.svg'],
            cards:[{logo:"1",h3:"UX Design"},{logo:"2",h3:"UX Design"},{logo:"3",h3:"website development"},
                    {logo:"4",h3:"mobile app development"},{logo:"5",h3:"ecommerce"},{logo:"6",h3:"customer loyalty"},
                    {logo:"7",h3:"digital transformation"},{logo:"8",h3:"digital marketing"},{logo:"9",h3:"BRANDING"}],
        }
    },
    methods: {
        view(){
            let head = document.querySelector(".head");
            let hamber = document.querySelectorAll(".hamber .path");
            let logo = document.querySelector(".logoinner");
            window.addEventListener("scroll",()=>{
                if(window.scrollY > 0){
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
            let hamber = document.querySelectorAll(".hamber .path");
            if(this.check==true){
                hamber[2].style.width="0px";
                hamber[0].style.top="9px";
                setTimeout(()=>{
                    hamber[0].style.transform="rotate(45deg)";
                    hamber[1].style.transform="rotate(135deg)";
                },300);
                this.check=false;
            }else{
                hamber[0].style.transform="rotate(0deg)";
                hamber[1].style.transform="rotate(0deg)";
                setTimeout(()=>{
                    hamber[2].style.width="26px";
                    hamber[0].style.top="0px";
                },300);
                this.check=true;
            }
        },
    },
    mounted(){
        this.view();
    },
});
vm.mount("#App");