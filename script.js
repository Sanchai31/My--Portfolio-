// ======================================
// SANCHAI M — PORTFOLIO JAVASCRIPT
// Mobile menu and automatic copyright year
// ======================================

document.addEventListener("DOMContentLoaded", function() {
  
  // Mobile navigation
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  
  if (menuToggle && navLinks) {
    
    menuToggle.addEventListener("click", function() {
      
      const isOpen = navLinks.classList.toggle("active");
      
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
      );
      
      menuToggle.textContent = isOpen ? "✕" : "☰";
    });
    
    // Close the mobile menu when a navigation link is selected
    navLinks.querySelectorAll("a").forEach(function(link) {
      
      link.addEventListener("click", function() {
        
        navLinks.classList.remove("active");
        
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute(
          "aria-label",
          "Open navigation menu"
        );
        
        menuToggle.textContent = "☰";
      });
      
    });
    
    // Close the menu when the user presses Escape
    document.addEventListener("keydown", function(event) {
      
      if (event.key === "Escape") {
        
        navLinks.classList.remove("active");
        
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
        
      }
      
    });
    
  }
  
  
  // Automatically update the copyright year
  const currentYear = document.getElementById("currentYear");
  
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }
  
  
  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    
    link.addEventListener("click", function(event) {
      
      const targetId = link.getAttribute("href");
      
      if (!targetId || targetId === "#") {
        return;
      }
      
      const target = document.querySelector(targetId);
      
      if (target) {
        
        event.preventDefault();
        
        target.scrollIntoView({
          behavior: window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches ? "auto" : "smooth",
          block: "start"
        });
        
        // Update the URL hash without jumping
        history.replaceState(null, "", targetId);
        
      }
      
    });
    
  });
  
});