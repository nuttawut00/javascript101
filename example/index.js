let a = document.querySelector('');

const devices = ["iPhone", "iPad", "Watch", "Mac", "iPad"];
let mac = devices.findIndex((device) => {
    return device == "Mac"
});

console.log(mac)