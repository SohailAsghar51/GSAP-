// ===== Main Heading Animation =====
gsap.from("#main-heading", {
  y: -50,         // Moves from top to bottom
  opacity: 0,     // Starts invisible
  duration: 1,    // Duration of 1 second
  ease: "power2.out",  // Smooth easing for the animation
  delay: 0.5      // 0.5 second delay before animation starts
});

// ===== Sub Heading Animation =====
gsap.from("#sub-heading", {
  y: 50,          // Moves from bottom to top
  opacity: 0,     // Starts invisible
  duration: 1,    // Duration of 1 second
  ease: "power2.out",  // Smooth easing for the animation
  delay: 0.6      // 0.6 second delay before animation starts
});

// ===== Chat Bubble Animations =====
gsap.from(".chat-bubble.left", {
  x: -50,         // Moves from left to right
  opacity: 0,     // Starts invisible
  duration: 1,    // Duration of 1 second
  ease: "power2.out",  // Smooth easing for the animation
  delay: 2,        // 1 second delay before animation starts
  stagger: 1       // Stagger each chat bubble animation by 1 second
});

gsap.from(".chat-bubble.right", {
  x: 50,          // Moves from right to left
  opacity: 0,     // Starts invisible
  duration: 1,    // Duration of 1 second
  ease: "power2.out",  // Smooth easing for the animation
  delay: 2.5,      // 1.7 second delay before animation starts
  stagger: 1
});

// ===== Additional Chat Bubble Animations (A and B) =====


// ===== Call-to-Action Button Animation =====
gsap.from("#cta-button", {
  y: 100,         // Moves from bottom to top
  opacity: 0,     // Starts invisible
  duration: 1,    // Duration of 1 second
  ease: "power.out", // Slightly less smooth easing
  delay: 4.8      // 4.8 second delay before animation starts
});
