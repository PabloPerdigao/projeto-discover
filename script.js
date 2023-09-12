function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  // substituit a img
  if (html.classList.contains("light")) {
    // se tiver light mode,adicionar a imagem Light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode,manter a img normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
