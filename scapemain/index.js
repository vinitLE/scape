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