 const testimonials = [
    {
      img:  "/imgs/girlsharestory.jpg",
      quote: "All About Cargo transformed my career! The hands-on training and placement assistance helped me land a great job in logistics",
      name: "Rahul S."
    },
    {
      img:  "/imgs/girlsharestory.jpg",
      quote: "This program gave me the confidence and skills to switch careers entirely. Best decision ever!",
      name: "Aman T."
    },
    {
      img:  "/imgs/girlsharestory.jpg",
      quote: "I loved the mentors! Their support helped me through every step of my learning journey.",
      name: "Neha R."
    },
    {
      img:  "/imgs/girlsharestory.jpg",
      quote: "From zero experience to a full-time role in less than 6 months. I can't thank them enough!",
      name: "Jay K."
    }
  ];
 
  let currentIndex = 0;

  function showTestimonial(index) {
    const testimonial = testimonials[index];
    document.getElementById("testimonial-img").src = testimonial.img;
    document.getElementById("testimonial-quote").textContent = testimonial.quote;
    document.getElementById("testimonial-name").textContent = testimonial.name;
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }

  function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  }