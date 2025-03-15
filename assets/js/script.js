/** Alterando placeholder conforme tamanho da tela */

const inputTask = document.querySelector(".input_task");

addEventListener("resize", (e) => {
  const windowViewport = window.visualViewport.width;
  if(windowViewport <= 425){
    inputTask.placeholder = "Adicionar uma tarefa";
    return
  }
  inputTask.placeholder = "Adicionar uma tarefa (para adicionar pressione [Enter])";
});


