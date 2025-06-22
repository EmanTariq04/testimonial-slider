const testimonials = [
    {
        name: "Emily Johnson",
        photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        text: "I recently purchased a laptop from apple and I am beyond impressed with the sleek design and powerful performance. The laptop is perfect for both work and entertainment, making my life so much easier. I highly recommend apple to anyone in need of quality tech products."
    },
      {
        name: "Emily Johnson",
        photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        text: "I recently purchased a laptop from apple and I am beyond impressed with the sleek design and powerful performance. The laptop is perfect for both work and entertainment, making my life so much easier. I highly recommend apple to anyone in need of quality tech products."
    },
]

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username"); 

let idx = 0;

function updateTestimonial() {
    const {name, photoUrl, text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++
    if (idx === testimonials.length) {
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonial();
    }, 10000);
}