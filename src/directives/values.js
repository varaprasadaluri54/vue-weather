import { onUpdated } from "vue";
// continously update required
export const values=(el,binding)=>{
    console.log(binding.value);
}