

const toDoList = () => {
  /** Alterando placeholder conforme tamanho da tela */

  const inputTask = document.querySelector(".input_task");

  addEventListener("resize", (e) => {
    const windowViewport = window.visualViewport.width;
    if (windowViewport <= 425) {
      inputTask.placeholder = "Adicionar uma tarefa";
      return
    }
    inputTask.placeholder = "Adicionar uma tarefa (para adicionar pressione [Enter])";
  });

  /** adicionando tarefas */

  const appendTaskContainer = (task) => {
    if (task) {
      const contentStart = document.querySelector(".content-start");
      contentStart.innerText = `Ótimo lista iniciada!🎉`;
      const containerBodyContent = document.querySelector(".container__body-content");
      containerBodyContent.innerHTML += ` 
            <div class="single-task">
              <div class="single-task__task">
                <input id="checkbox1" type="checkbox" class="checkbox"/>
                <label for="checkbox1">${task}</label>
              </div>
              <div class="single-task__icons">
                <button title="Editar tarefa">
                  <span class="fa-solid fa-pen-to-square"></span>
                </button>
                <button title="Excluir tarefa">
                  <span class="fa-solid fa-trash-can"></span>
                </button>
              </div>
            </div>`
    }

  }

  // capturando tarefa

  const captureTask = () => {
    const task = inputTask.value;
    appendTaskContainer(task);
    inputTask.value = '';
  }

  addEventListener("click", (e) => {
    if (e.target.classList.contains("btnAdd")) {
      captureTask();
    }
  })

  addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
      captureTask();
    }
  })

}

toDoList();


