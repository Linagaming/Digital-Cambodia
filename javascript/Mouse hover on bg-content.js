// Get all divs with the 'bg-content' class
const bgContents = document.querySelectorAll('.bg-content');

// Loop through each div and add the mousemove event listener
bgContents.forEach((bgContent) => {
  bgContent.addEventListener('mousemove', (e) => {
    const { offsetWidth: width, offsetHeight: height } = bgContent;
    const { offsetX, offsetY } = e;

    // Calculate percentage values for mouse position
    const xPercent = (offsetX / width) * 100;
    const yPercent = (offsetY / height) * 100;

    // Apply radial gradient with mouse-driven position
    bgContent.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%,rgb(112, 0, 249) 0%, rgb(31, 19, 48) 100%)`;
    bgContent.style.transition = "background all 0.3s";
  });

  // Optional: Reset the background when mouse leaves the div
  bgContent.addEventListener('mouseleave', () => {
    bgContent.style.background = "";
  });
});