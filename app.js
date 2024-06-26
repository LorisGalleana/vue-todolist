const { createApp } = Vue;

createApp({
    data() {
        return {
            message: "Hello Vue! Hello World!",
            image: "https://picsum.photos/id/1074/5000/3333"
        }
    }
}).mount("#container");