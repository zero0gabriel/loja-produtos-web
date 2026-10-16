// --- 1. MENU RESPONSIVO (Hambúrguer) ---
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

if (btnMenu && menu) {
    btnMenu.addEventListener('click', () => {
        menu.classList.toggle('ativo');
    });
}

// --- 2. INTERATIVIDADE NOS PRODUTOS (Simular Carrinho) ---
const produtos = document.querySelectorAll('.produto');

produtos.forEach((produto) => {
    produto.addEventListener('click', () => {
        const nomeProduto = produto.querySelector('h3').innerText;
        const precoProduto = produto.querySelector('.preco').innerText;
        
        // Mostra um aviso interativo ao clicar no produto
        alert(`Adicionaste "${nomeProduto}" (${precoProduto}) ao teu carrinho com sucesso!`);
    });
});

// --- 3. BOTÃO "VOLTAR AO TOPO" ---
const btnTopo = document.getElementById('voltar-topo');

// Mostra ou esconde o botão dependendo do scroll do utilizador
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnTopo.style.display = 'block';
    } else {
        btnTopo.style.display = 'none';
    }
});

// Faz scroll suave de volta para o topo ao clicar no botão
btnTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});