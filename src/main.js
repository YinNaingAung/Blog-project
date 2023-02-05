const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 5000,
      },
      effect: 'fade',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:"true"
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  // Scroll Reveal

  ScrollReveal().reveal(".reveal",{
    delay:500,
    distance:"50px",
    scale:0.86,
    origin:"bottom",
    duration:500,
    interval:200,
    reset:"true"
  })

     // dark mode
                // const dkmode = document.getElementById("toggle")
                
                // const todark = ()=>{
                //     document.documentElement.classList.add("dark")
                //     localStorage.setItem("data","dark")
                // }

                // const tolight = ()=>{
                //     document.documentElement.classList.remove("dark")
                //     localStorage.setItem("data","light")
                // }

                // dkmode.addEventListener("click",()=>{
                //     let theme = localStorage.getItem("data");
                //     if(theme === "dark"){
                //         tolight()
                //     }else{
                //         todark()
                //     }
                // })
                // let theme = localStorage.getItem("data");
                //     if(theme === "dark"){
                //         todark()
                //         dkmode.setAttribute("checked","checked")
                //     }else{
                //         tolight()
                //     } 

// dark mode
  const toggle = document.getElementById("toggle");

  const todark = ()=>{
    document.documentElement.classList.add("dark");
    localStorage.setItem("data-theme","dark")
  }
  const tolight = ()=>{
    document.documentElement.classList.remove("dark");
    localStorage.setItem("data-theme","light")
  }
 
  
  toggle.addEventListener("click",()=>{
    const theme = localStorage.getItem("data-theme")
    if(theme === "dark"){
      tolight()
    }else{
      todark()
    }

  })
  const theme = localStorage.getItem("data-theme")
  if(theme === "dark"){
    todark()
    toggle.setAttribute("checked","checked")
  }else{
    tolight()
  }