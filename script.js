const formulario = document.getElementById("formCadastro");

formulario.addEventListener("submit", async (evento) => {
evento.preventDefault();

const nome = document.getElementById("nome")
    .value.trim();
const email = document.getElementById("email")
    .value.trim();
const telefone = document.getElementById("telefone")
    .value.trim();

try {
const { data, error } = await supabase
    .from("cadastros")
    .insert([{ nome, email, telefone }])
    .select();

if (error) throw error;

mostrarMensagem("Cadastro realizado!", "sucesso");
formulario.reset();

} catch (erro) {
mostrarMensagem("Erro: " + erro.message, "erro");
}
});

function mostrarMensagem(texto, tipo) {

const div = document.getElementById("mensagem");

div.textContent = texto;
div.className = "mensagem " + tipo;

setTimeout(() => {
    div.textContent = "";
    div.className = "";
}, 5000);
}