document.addEventListener("DOMContentLoaded", () => {
  const minSlider = document.getElementById("min-slider");
  const maxSlider = document.getElementById("max-slider");

  let minValue = document.getElementById("min-value");
  let maxValue = document.getElementById("max-value");

  const sliderRange = document.getElementById("slider-range");

  function updateSlider(e) {
    let min = parseInt(minSlider.value);
    let max = parseInt(maxSlider.value);

    minValue.value = min;
    maxValue.value = max;

    const gap = 1;
    if (min >= max - gap) {
      if (e.target === minSlider) {
        min = max - gap;
        minSlider.value = min;
      } else {
        max = min + gap;
        maxSlider.value = max;
      }
    }
    minValue.value = min;
    maxValue.value = max;
    sliderRange.style.left = (min / 1000) * 100 + "%";
    sliderRange.style.width = ((max - min) / 1000) * 100 + "%";
  }

  minSlider.addEventListener("input", updateSlider);
  maxSlider.addEventListener("input", updateSlider);

  updateSlider({ target: minSlider });

  let isShowDropDown = false;
  function showDropDown(button, dropdown) {
    let dropdownEl = document.getElementById(dropdown);
    let buttonEl = document.getElementById(button);
    if (!isShowDropDown) {
      dropdownEl.style.opacity = 1;
      dropdownEl.style.top = "52px";
      isShowDropDown = true;
      buttonEl.style.transform = "rotate(180deg)";
    } else {
      dropdownEl.style.opacity = 0;
      dropdownEl.style.top = "22px";
      isShowDropDown = false;
      buttonEl.style.transform = "rotate(0deg)";
    }
  }
  window.showDropDown = showDropDown;
});
