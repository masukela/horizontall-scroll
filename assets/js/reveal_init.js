/* Setting Scroll reveal as a global 
object in window */
window.sr = new ScrollReveal({
  reset:true // to repeat the effect
});

// First Section
sr.reveal("",{
  origin:"left", // Place to start
  distance:"100px", // Distance to be moved
  duration:400,
  delay:200
})

// Paragraph
sr.reveal("#reveal-paragraph",{
  delay:1200 // To see this after the container gets revealed
  // Other values are used as default
})

// Second section
sr.reveal("#reveal-container2",{
  origin:"top",
  duration:1200,
  distance:"500px"
})

// First info box
sr.reveal("#info1",{
  origin:"left",
  duration:1200,
  distance:"150px"
})

// Second info box
sr.reveal("#info2",{
  origin:"right",
  duration:1200,
  distance:"150px"
})