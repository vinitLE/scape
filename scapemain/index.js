// const flightpath ={
//     curviness:2,
//     autoRotate:false,
//     values:[
//         {x:700,y:100}
//     ]
// }

// const tween = new TimelineLite();
// tween.add(
//     TweenLite.to('.signup', 3, {
//         bezier:flightpath,
//         ease:Power1.easeInOut
//     })
// );

// const controller = new ScrollMagic.Controller();

// const scene = new ScrollMagic.Scene({
//       triggerElement:".signup",
//       duration:700,
//       triggerHook:0.5
      
// })
// .setTween(tween)
// .addIndicators()
// .setPin('.signup')
// .addTo(controller);

function trans(){
    document.getElementById('hello').style.visibility='visible';
}
const tween = new TimelineLite();
tween.add(
    TweenLite.to('.but', 3, {
        alpha:1,
        ease:Power1.easeInOut
    })
);
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
      triggerElement:".page2",
      duration:500,
      triggerHook:0.5
      
})
.setTween(tween)
// .addIndicators()
.addTo(controller); 

var tlfirstscroll = new TimelineLite();

tlfirstscroll
.set('.trigger1',{scale: 2.5,transformOrigin:"center top"})
.to('.trigger1',3,{scale:1.5,y:"-9%"})
.to('.trigger1',3,{scale:1,y:"0%"})

var controller2=new ScrollMagic.Controller();

//scene1
var scene1=new ScrollMagic.Scene({
    triggerElement:'.page1',
    duration:"90%",
    triggerHook:0
})
.setTween(tlfirstscroll)
.addIndicators()
.addTo(controller2);

var tlsecoundscroll = new TimelineLite();

tlsecoundscroll
.to('.image1',3,{x:"-50%"})
.to('.image2',3,{x:"50%"},"-=3")
.from('.block1',1,{autoAlpha:0},"-=3")
.from('.block2',1,{autoAlpha:0},"-=3")
.to('.block1',3,{x:"-300px"},"-=3")
.to('.block2',3,{x:"200px"},"-=3")


var scene2=new ScrollMagic.Scene({
    triggerElement:'.trigger1',
    triggerHook:0,
    duration:"100%"
})
.setTween(tlsecoundscroll)
.setPin(".trigger1")
.addIndicators()
.addTo(controller2);