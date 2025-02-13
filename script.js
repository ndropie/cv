    function toggleDiv(divId) {
    var div = document.getElementById(divId);
    div.classList.toggle("hidden");
    div.classList.toggle("show");
    }

    
function toggleAll() {
            var divs = document.querySelectorAll("#profile, #work, #contact, #edu , #padhai, #skills, #skills-container");
            divs.forEach(function(div) {
                div.classList.toggle("hidden");
                div.classList.toggle("show");
            });
}


function toggleDivs() {
    var div1 = document.getElementById("skills");
    var div2 = document.getElementById("skills-container ");

    // Toggle visibility
    div1.classList.toggle("hidden");
    div2.classList.toggle("hidden");
}
function toggleedu() {
    var div1 = document.getElementById("edu");
    var div2 = document.getElementById("padhai");

    // Toggle visibility
    div1.classList.toggle("hidden");
    div2.classList.toggle("hidden");
}


document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelectorAll(".skill");

    function animateSkills() {
        skills.forEach(skill => {
            let percent = skill.getAttribute("data-percent");
            let progressCircle = skill.querySelector(".progress");
            let circumference = 2 * Math.PI * 45; // 2πr
            
            // Reset the strokeDashoffset to full circle (reset animation)
            progressCircle.style.transition = "none";
            progressCircle.style.strokeDashoffset = circumference;
            
            // Use setTimeout to apply animation again after reset
            setTimeout(() => {
                let offset = circumference - (percent / 100) * circumference;
                progressCircle.style.transition = "stroke-dashoffset 2.5s ease-in-out"; // Smooth animation
                progressCircle.style.strokeDashoffset = offset;
            }, 50); // Small delay to ensure reset happens first
        });
    }

    // Listen for scroll events and trigger animation every time
    document.addEventListener("scroll", animateSkills);
});



/***************************************/

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("particleCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = Math.random() * 3 + 1;
            this.speedX = (Math.random() - 0.5) * 1.5;
            this.speedY = (Math.random() - 0.5) * 1.5;
            this.alpha = Math.random() * 0.5 + 0.3;
        }

        move() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Bounce effect on edges
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 0, ${this.alpha})`; // Yellow Glow
            ctx.shadowBlur = 8;
            ctx.shadowColor = "yellow";
            ctx.fill();
            ctx.closePath();
        }
    }

    function initParticles(count) {
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => {
            particle.move();
            particle.draw();
        });

        requestAnimationFrame(animateParticles);
    }

    // Adjust canvas size when resizing window
    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    initParticles(100); // Adjust number of particles here
    animateParticles();
});
