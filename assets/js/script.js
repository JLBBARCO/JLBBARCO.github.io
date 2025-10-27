// Compatibilidade: usar sintaxe ES5 para suportar navegadores mais antigos
(function () {
  function onReady() {
    // Seleciona o elemento com a classe 'copyright'
    var copyrightElement = document.querySelector(".copyright");
    if (copyrightElement) {
      // Obtém o ano atual
      var currentYear = new Date().getFullYear();
      // Atualiza o conteúdo do elemento com o ano atual (usando entidade Unicode para ©)
      copyrightElement.textContent =
        "\u00A9 " + currentYear + " JLBBARCO. All rights reserved.";
    }

    var titleFile = document.title;
    var titleNav = document.querySelector('nav[aria-label="NavBar Title"]');
    if (titleNav) {
      var title = document.createElement("h1");
      title.textContent = titleFile;
      // usa className para compatibilidade
      title.className = "nav-title";
      titleNav.appendChild(title);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onReady);
  } else {
    onReady();
  }
})();
