let store = document.getElementById("store");
store.addEventListener("mouseenter", () => {
  let output = `<div  id="showstore">
   <ul>
            <div><li><a href="#">shop</a></li></div>
            <li><a href="#">Shop the Latest</a></li>
            <li><a href="#">Mac</a></li>
            <li><a href="#">iPad</a></li>
            <li><a href="#">iphone</a></li>
            <li><a href="#">Apple Watch</a></li>
            <li><a href="#">Accessories</a></li>
            </ul>
            <ul id="small">
            <div><li><a href="#">Quick Links</a><li></div>
            <li><a href="#">Find a store</a><li>
            <li><a href="#">Order Status</a><li>
            <li><a href="#">Apple Trade in</a><li>
            <li><a href="#">Financing</a><li>
            </ul>
            <ul id="small1">
            <div><li><a href="#">Shop Special Stores</a><li></div>
            <li><a href="#">Certified Refurbised</a><li>
            <li><a href="#">Education</a><li>
            <li><a href="#">Business</a><li>
            <li><a href="#">Veterans and Military</a><li>
            <li><a href="#">Government</a><li>
            </ul>
            </div>`;
  document.getElementById("shownavbar").innerHTML = output;
});

let hidenavbar = document.getElementById("shownavbar");
hidenavbar.addEventListener("mouseleave", () => {
  document.getElementById("shownavbar").innerHTML = "";
});

let tophide = document.getElementById("navbar");
tophide.addEventListener("mouseleave", () => {
  let hei = window.event.clientY;
  if (hei < 15) {
    console.log(hei);

    document.getElementById("shownavbar").innerHTML = "";
  }
});
let mac = document.getElementById("mac");
mac.addEventListener("mouseenter", () => {
  let output = `<div id="showmac">
    
        <ul id="bg">
            <div><li><a href="#">Explore Mac</a></li></div>
            <li><a href="#">Explore All Mac</a></li>
            <li><a href="#">MackBook Air</a></li>
            <li><a href="#">MackBookk Pro</a></li>
            <li><a href="#">iMac</a></li>
            <li><a href="#">Mac mini</a></li>
            <li><a href="#">Mac Studio</a></li>
            <li><a href="#">Mac Pro</a></li>
            <li><a href="#">Displays</a></li>
            <section><li><a href="#">Compare Mac</a></li>
            <li><a href="#">Mac Does That</a></li></section>
                
        </ul>
        <ul id="big">
        <div><li><a href="#">Shop</a></li></div>
        <li><a href="#">Shop Mac</a></li>
        <li><a href="#">Mac Acessories</a></li>
        <li><a href="#">Apple Trade</a></li>
        <li><a href="#">Financing</a></li></ul>
        <ul id="big2">
            <div><li><a href="#">More from Mac</a></li></div>
            <li><a href="#">Mac support</a></li>
            <li><a href="#">AppleCare+ for Mac</a></li>
            <li><a href="#">MacOS Sonoma</a></li>
            <li><a href="#">Apps by Apple</a></li>
            <li><a href="#">Continuity</a></li>
            <li><a href="#">iCloud+</a></li>
            <li><a href="#">Mac for Business</a></li>
            <li><a href="#">Education</a></li></ul>
        </div>`;
  document.getElementById("shownavbar").innerHTML = output;
});
let ipad = document.getElementById("ipad");
ipad.addEventListener("mouseenter", () => {
  let output = `<div id="showipad">
    
        <ul id="bg1">
            <div><li><a href="#">Explore iPad</a></li></div>
            <li><a href="#">Explore All iPad</a></li>
            <li><a href="#">iPad Pro</a></li>
            <li><a href="#">iPad Air</a></li>
            <li><a href="#">iPad</a></li>
            <li><a href="#">iPad mini</a></li>
            <li><a href="#">Apple Pencil</a></li>
            <li><a href="#">Keyboards</a></li>
            <section><li><a href="#">Compare iPad</a></li>
            <li><a href="#">Why iPad</a></li></section>
            
                
        </ul>
        <ul id="big1">
        <div><li><a href="#">Shop iPad</a></li></div>
        <li><a href="#">Shop iPad</a></li>
        <li><a href="#">iPad Acessories</a></li>
        <li><a href="#">Apple Trade in</a></li>
        <li><a href="#">Financing</a></li></ul>
        <ul id="big21">
            <div><li><a href="#">More from iPad</a></li></div>
            <li><a href="#">iPad support</a></li>
            <li><a href="#">AppleCare+ for iPad</a></li>
            <li><a href="#">iPadOS 17</a></li>
            <li><a href="#">Apps by Apple</a></li>
            <li><a href="#">iCloud+</a></li>
            <li><a href="#">Education</a></li></ul>
        </div>`;
  document.getElementById("shownavbar").innerHTML = output;
});
let watch = document.querySelector("#watch");
watch.addEventListener("mouseenter", () => {
  let output = `<div id="showwatch">
    
        <ul id="bg11">
            <div><li><a href="#">Explore watch</a></li></div>
            <li><a href="#">Explore All Apple Watch</a></li>
            <li><a href="#">Apple Watch Series 9</a></li>
            <li><a href="#">Apple Watch Ultra 2</a></li>
            <li><a href="#">Apple Watch SE</a></li>
            <li><a href="#">Apple Watch Nike</a></li>
            <li><a href="#">Apple Watch Hermès</a></li>
            
            <section><li><a href="#">Compare Watch</a></li>
            <li><a href="#">Why Apple Watch</a></li></section>
            
                
        </ul>
        <ul id="big11">
        <div><li><a href="#">Shop Watch</a></li></div>
        <li><a href="#">Shop Apple Watch</a></li>
        <li><a href="#"><Apple Watch Studio/a></li>
        <li><a href="#">Apple Watch Bands</a></li>
        <li><a href="#">Apple Watch Accessories</a></li>
        <li><a href="#">Apple Trade in</a></li>
        <li><a href="#">Financing</a></li></ul>
        <ul id="big211">
            <div><li><a href="#">More from Watch</a></li></div>
            <li><a href="#">Apple Watch support</a></li>
            <li><a href="#">AppleCare+</a></li>
            <li><a href="#">WatchOS 10</a></li>
            <li><a href="#">Apps by Apple</a></li>
            <li><a href="#">Apple Fitness+</a></li>
            
        </div>`;
  document.querySelector("#shownavbar").innerHTML = output;
});
let vision = document.querySelector("#vision");
vision.addEventListener("mouseenter", () => {
  let output = "";
  document.querySelector("#shownavbar").innerHTML = output;
});
const chalja = () => {
  setTimeout(khulja, 3000);
  setInterval(bhagja, 100);
  function khulja() {
    document.getElementById("website_section").style.display = "block";
    document.getElementById("openimg").style.display = "none";
    // document.getElementById("start").style.display = "none";
    // document.getElementById("start1").style.display = "none";
  }

  let value_store = 10;
  function bhagja() {
    if (140 > value_store) {
      let store = document.querySelector("#running-value");
      value_store++;
      store.innerHTML = value_store;
    } else {
      clearInterval();
    }
  }
};
