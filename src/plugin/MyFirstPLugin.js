import Weather from '../components/Weather.vue';
export default {
    install: (app,options) =>{
        app.component('Weather',Weather)
        app.directive('font-size',(el,binding)=>{
       let size=10;
       let weight=500;
    
       switch(binding.arg){
        case "micro":
            size=options.fontSize.micro;
            weight=300
         break
        case "small":
         size=options.fontSize.small;
         weight=500
         break
        case "medium":
            size=options.fontSize.medium;
            weight=700
            break
        case "large":
            size=options.fontSize.large;
            weight=900
            break
        default:
        size=16
        weight=500
        break
    }
    el.style.fontSize=size+"px";
    el.style.fontWeight=weight;
}
);
    }
}