document.body.onload = initSlider;

function initSlider() {
  const sliderContainer = document.getElementById("slider");
  const paginationContainer = document.createElement("div");

  //Create pagination container
  paginationContainer.className = "pagination";
  sliderContainer.prepend(paginationContainer);

  //count slider
  const slideCount = document.querySelectorAll(".slide").length;

  for (let i = slideCount; i > 0; i--) {
    //Generate the radio buttons
    let radioBtn = document.createElement("input");

    radioBtn.type = "radio";
    radioBtn.name = "slide-radios";
    radioBtn.className = "slide-radio";
    radioBtn.id = `slide-radio-${i}`;

    if (i === 1) {
      radioBtn.checked = true;
    }

    // preppend radio buttons to the slider container
    sliderContainer.prepend(radioBtn);

    // Generate the labels
    let label = document.createElement("label");
    label.setAttribute("for", `slide-radio-${i}`);
    label.innerHTML = i;
    // Prepend label to the pagination container
    paginationContainer.prepend(label);
  }
}
