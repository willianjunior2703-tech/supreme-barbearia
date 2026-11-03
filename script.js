
"use strict";

const toast = document.getElementById("toast");

let toastTimeout;

function mostrarAviso(mensagem) {
  if (!toast) return;

  toast.textContent = mensagem;
  toast.classList.add("show");

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

async function copiarPix(chave) {
  try {
    if (!navigator.clipboard || !window.isSecureContext) {
      throw new Error("Área de transferência indisponível");
    }

    await navigator.clipboard.writeText(chave);

    mostrarAviso("Chave PIX copiada com sucesso! ✓");

  } catch (erro) {
    mostrarAviso(
      "Não foi possível copiar. Verifique as permissões do navegador."
    );
  }
}

document.querySelectorAll("button[data-pix]").forEach((botao) => {
  botao.addEventListener("click", () => {
    const chave = botao.dataset.pix;

    if (chave) {
      copiarPix(chave);
    }
  });
});
