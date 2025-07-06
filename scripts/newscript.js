document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.faq-question').forEach(function(question) {
    question.addEventListener('click', function() {
      const item = this.parentElement;
      const isActive = item.classList.contains('faq-item-active');
      const accordion = item.parentElement;

      // Close all items first
      accordion.querySelectorAll('.faq-item').forEach(function(i) {
        i.classList.add('faq-collapsed');
        i.classList.remove('faq-item-active');
        i.querySelector('.faq-icon').textContent = '+';
      });

      // If the clicked item was not active, open it
      if (!isActive) {
        item.classList.remove('faq-collapsed');
        item.classList.add('faq-item-active');
        item.querySelector('.faq-icon').textContent = '−';
      }
      // If it was active, it stays closed (all items closed)
    });
  });
});


// Add this to your script.js

const testimonials = [
  {
    img: "/imgs/girlsharestory.jpg" ,
    text: "All About Cargo transformed my career! The hands-on training and placement assistance helped me land a great job in logistics",
    name: "Rahul S."
  },
  {
    img: "/imgs/girlexplaining.jpg",
    text: "The expert trainers made complex logistics concepts easy to understand. I now feel confident in my new role!",
    name: "Priya M."
  },
  {
    img: "/imgs/guyonlp.jpg",
    text: "The placement support was fantastic. I got multiple job offers right after completing my certification.",
    name: "Amit K."
  }
];

let currentTestimonial = 0;

function showTestimonial(idx) {
  const t = testimonials[idx];
  document.getElementById('testimonial-img').src = t.img;
  document.getElementById('testimonial-text').textContent = t.text;
  document.getElementById('testimonial-name').textContent = t.name;
}

document.getElementById('testimonial-prev').addEventListener('click', function() {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
});

document.getElementById('testimonial-next').addEventListener('click', function() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
});

// Initialize on page load
showTestimonial(currentTestimonial);



let menuList = document.getElementById("menuList")
    menuList.style.maxHeight = "0px";

    function toggleMenu() {
        console.log("Clicked!");
        if (menuList.style.maxHeight === "0px") {
        menuList.style.maxHeight = "300px"; // adjust as per content height
        } else {
        menuList.style.maxHeight = "0px";
        }
    }   