/* Iterates over an array and loops back to first elemnt after last element. */
circularIterator = (arr) => {
  let nextIndex = 0;
  return {
    next: function () {
      if (nextIndex < arr.length) {
        return { value: arr[nextIndex++], done: false };
      } else {
        nextIndex = 0;
        return { value: arr[nextIndex++], done: false };
      }
    },
  };
};

const images = [
  "img/abyan-athif-FYN5S2aXG2I-unsplash.jpg",
  "img/city-of-gold-coast-DXj9NTl_LGE-unsplash.jpg",
  "img/mihai-moisa-VKkMXGp_bq0-unsplash.jpg"
];

const imgArr = circularIterator(images);

imageSlider = () => {
  const img = document.querySelector("#slider");
  img.src = imgArr.next().value;
};

main = () => {
  document.addEventListener("DOMContentLoaded", imageSlider);
  document.querySelector("#nextBtn").addEventListener("click", imageSlider);
};

main();