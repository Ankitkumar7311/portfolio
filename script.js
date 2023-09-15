let t1=gsap.timeline()
t1.from("#photo img",{
    opacity:0,
    scale:0,
    duration:1,
    yoyo:true,
    
})

t1.from("#nav h1,h4",{
    y:-100,
    stagger:0.1,
    duration:1,
    function(){
        $('h1').textillate({ in: { effect: 'fadeInup' }});
    }
})
t1.from("#page2,#photo2,#squre,#sq2 img,#about,#content2,#first,#sec,#third",{
        scrollTrigger:{
            trigger:"#page2",
            scroller:"body",
            start:"top 80%",
            end:"bottom 10%",
            scrub:true
        }
        ,
        opacity:1,
        duration:5
        
    })



    // t1.from("#page3",{
    //     scale:0,
    //     opacity:0,
    //     duration:1,
    //     stagger:0.3,
    //     scrollTrigger:{
            
    //     }})

        const scroll = new LocomotiveScroll({
            el: document.querySelector("#main"),
            smooth: true
        });