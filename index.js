let imageFirst = document.getElementById("image01");


let imag = document.createElement("img");
imag.classList.add("img01");
imag.src = "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676833102/07.image_x5tijn.webp";
imageFirst.appendChild(imag);



let productlist = [{
       a:  "https://res.cloudinary.com/dqrttxm5s/image/upload/v1676833102/07.image_x5tijn.webp",
       b: 1
    },
    {
        a: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1678971422/01st_njplpn.webp",
        b: 2
    },
    {
        a: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1678971406/02nd_ypllnn.webp", 
        b: 3
    },

    

    
   
   
];



let textElement = document.getElementById("text01")



let headingElement = document.createElement("h1");
headingElement.classList.add("heading01");
headingElement.textContent = "Unisex Black & Green Reflex 2.0 Smart Band";
textElement.appendChild(headingElement);


let headingElemnt01 = document.createElement("h4");
headingElemnt01.classList.add("heading02");
headingElemnt01.textContent = "Fastrack";
textElement.appendChild(headingElemnt01);


let headingElement02 = document.createElement("h3");
headingElement02.classList.add("heading03");
headingElement02.textContent = "Price: Rs";
textElement.appendChild(headingElement02);


let spanElement = document.createElement("span");
spanElement.classList.add("span01");
spanElement.textContent = "1999";
headingElement02.appendChild(spanElement);


let headingElement04 = document.createElement("h3");
headingElement04.classList.add("heading03");
headingElement04.textContent = "Description";
textElement.appendChild(headingElement04);


let paraElement = document.createElement("p");
paraElement.classList.add("para01")
paraElement.textContent = "The new Fastrack Reflex 2.0 Activity Tracker comes with all the features one could ask for! It comes in three colours that you can use to accentuate your athleisure, casual or party attire. Not only does it look uber cool in this cool grey & electric blue accent, further the TPU (Thermoplastic Polyurethane) strap ensures it gives you a snugfit while staying light on your wrist! It is a fitness band with smartwatch features. The band has Steps, Distance and Calorie Tracker, Sleep Tracker, Call & SMS Alerts, OLED Display, 10 Days Power Reserve, Vibration Alarm, Sedentary Reminder and is IPX6 Water Resistant. This band is compatible with both IOS and Android OS. It has a secure 'Pin' based pairing with your phone, for better protection. And, all of this at a price that is hard match anywhere else with quality and promise of the brand Fastrack. Move on and get one for yourself!";
textElement.appendChild(paraElement);


let headingElement05 = document.createElement("h3");
headingElement05.classList.add("heading03");
headingElement05.textContent = "Product Preview";
textElement.appendChild(headingElement05);


let Element001 = document.getElementById("java01");




function sachin(kohli){
let smallimg = document.createElement("img");
smallimg.classList.add("small01");
smallimg.src = kohli.a;
smallimg.id = kohli.b;
textElement.appendChild(smallimg)


smallimg.onclick = function(){
    imag.src = smallimg.src;
    smallimg.style.border = "3px solid #009688"
}
smallimg.onmouseout = function(){
    imag.src = smallimg.src;
    smallimg.style.border = "";
}

}



for(let kohli of productlist){
    sachin(kohli)
}



let btnElement = document.createElement("button");
btnElement.classList.add("button01");
btnElement.textContent = "Add to Cart";
textElement.appendChild(btnElement);