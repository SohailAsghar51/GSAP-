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
    delay: 1        // 1 second delay before animation starts
});

gsap.from(".chat-bubble.right", {
    x: 50,          // Moves from right to left
    opacity: 0,     // Starts invisible
    duration: 1,    // Duration of 1 second
    ease: "power2.out",  // Smooth easing for the animation
    delay: 1.7      // 1.7 second delay before animation starts
});

// ===== Additional Chat Bubble Animations (A and B) =====
gsap.from(".chat-bubble.leftA", {
    x: -50,         // Moves from left to right
    opacity: 0,     // Starts invisible
    duration: 1,    // Duration of 1 second
    ease: "power2.out",  // Smooth easing for the animation
    delay: 2.2      // 2.2 second delay before animation starts
});

gsap.from(".chat-bubble.rightA", {
    x: 50,          // Moves from right to left
    opacity: 0,     // Starts invisible
    duration: 1,    // Duration of 1 second
    ease: "power2.out",  // Smooth easing for the animation
    delay: 2.9      // 2.9 second delay before animation starts
});

gsap.from(".chat-bubble.leftB", {
    x: -50,         // Moves from left to right
    opacity: 0,     // Starts invisible
    duration: 1,    // Duration of 1 second
    ease: "power2.out",  // Smooth easing for the animation
    delay: 3.5      // 3.5 second delay before animation starts
});

gsap.from(".chat-bubble.rightB", {
    x: 50,          // Moves from right to left
    opacity: 0,     // Starts invisible
    duration: 1,    // Duration of 1 second
    ease: "power2.out",  // Smooth easing for the animation
    delay: 4        // 4 second delay before animation starts
});

// ===== Call-to-Action Button Animation =====
gsap.from("#cta-button", {
    y: 100,         // Moves from bottom to top
    opacity: 0,     // Starts invisible
    duration: 1,    // Duration of 1 second
    ease: "power.out", // Slightly less smooth easing
    delay: 4.8      // 4.8 second delay before animation starts
});
