export const fontStyle ={
    // only once required
    mounted: (el,binding)=>{
        if(binding.modifiers.italic){
            el.style.fontStyle='italic';
        }
        else{
            el.style.fontStyle="oblique";
        }
    }
}