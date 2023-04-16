export const fontSize ={
    // only once required
    mounted: (el,binding,vnode)=>{
        let size=10;
        let weight=500;
        // console.log(binding,vnode)
        switch(binding.arg){
            case 'micro':
                size=20;
                weight=300
             break
            case 'small':
             size=40;
             weight=500
             break
            case 'medium':
                size=48;
                weight=700
                break
            case 'large':
                size=102;
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
}