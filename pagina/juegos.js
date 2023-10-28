document.addEventListener("keyup", e=>{

    if (e.target.matches("#busqueda")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".juego").forEach(fruta =>{
  
            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?fruta.classList.remove("filtro")
              :fruta.classList.add("filtro")
        })
  
    }
  
  
  })