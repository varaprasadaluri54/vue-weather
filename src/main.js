import { createApp } from "vue";
import App from "./App.vue";
import { colorChange } from "./directives/colorChange";
import { fontSize } from "./directives/fontSize";
import { fontStyle } from "./directives/fontStyle";
import { focus } from "./directives/keyFocus.js";
import { values } from "./directives/values";
import MyFirstPLugin from "./plugin/MyFirstPLugin";

const app = createApp(App);
app.directive("focus", focus);
app.directive("colorChange",colorChange);
app.directive("log",values);
app.directive("fontSize",fontSize);
app.directive("fontStyle",fontStyle);
app.mount("#app");

app.use(MyFirstPLugin,{
    fontSize: {
        micro:20,
        small:40,
        medium:48,
        large:102
    }
})