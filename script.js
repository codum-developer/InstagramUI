const imageContainers = document.querySelectorAll('.postBody');
imageContainers.forEach(container => {
  const image = container.querySelector('img');
  container.classList.add("loading")

  image.onload = () => {
    container.classList.remove('.loading');
    image.style.visibility = 'visible';
  };
});