const menuItems = [
  { id:101, name:'Combo Classic', description:'A escolha perfeita para matar a fome', price:39.90, originalPrice:49.70, category:'Combos', image:'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&h=360&fit=crop', includes:['X-Burger Clássico','Batata Frita Média','Refrigerante 500ml'], popular:true },
  { id:102, name:'Combo Bacon Supreme', description:'Para os amantes de bacon', price:44.90, originalPrice:55.70, category:'Combos', image:'./assets/img/combos/combo_bacon.jpeg', includes:['Bacon Burger','Batata Frita Grande','Refrigerante 500ml'] },
  { id:103, name:'Combo Duplo', description:'Dois hambúrgueres para compartilhar', price:59.90, originalPrice:74.70, category:'Combos', image:'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&h=360&fit=crop', includes:['2x X-Burger Clássico','Batata Frita Grande','2x Refrigerante 500ml'], popular:true },
  { id:104, name:'Combo Kids', description:'Perfeito para as crianças', price:29.90, originalPrice:37.70, category:'Combos', image:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&h=360&fit=crop', includes:['Mini Burger','Batata Pequena','Suco Natural','Brinde Surpresa'] },
  { id:105, name:'Combo Premium', description:'A melhor experiência Burger Nation', price:69.90, originalPrice:89.60, category:'Combos', image:'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&h=360&fit=crop', includes:['Double Smash Burger','Batata Frita Grande','Onion Rings','Milkshake'], popular:true },
  { id:106, name:'Combo Chicken', description:'Para quem prefere frango', price:42.90, originalPrice:53.70, category:'Combos', image:'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&h=360&fit=crop', includes:['Chicken Burger','Nuggets (6un)','Batata Frita Média','Refrigerante 500ml'] },
  { id:1, name:'X-Burger Clássico', description:'Hambúrguer artesanal, queijo, alface, tomate e molho especial', price:25.90, category:'Hambúrgueres', image:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=360&fit=crop' },
  { id:2, name:'Bacon Burger', description:'Hambúrguer, bacon crocante, queijo cheddar e cebola caramelizada', price:29.90, category:'Hambúrgueres', image:'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&h=360&fit=crop' },
  { id:3, name:'Chicken Burger', description:'Frango empanado, maionese temperada, alface e picles', price:24.90, category:'Hambúrgueres', image:'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500&h=360&fit=crop' },
  { id:10, name:'Double Smash Burger', description:'Dois hambúrgueres smash, queijo americano, picles e molho especial', price:35.90, category:'Hambúrgueres', image:'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&h=360&fit=crop', isNew:true },
  { id:11, name:'BBQ Burger', description:'Hambúrguer, bacon, onion rings, queijo e molho barbecue', price:32.90, category:'Hambúrgueres', image:'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&h=360&fit=crop' },
  { id:12, name:'Veggie Burger', description:'Hambúrguer vegetariano, queijo, alface, tomate e maionese de ervas', price:27.90, category:'Hambúrgueres', image:'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500&h=360&fit=crop', isNew:true },
  { id:13, name:'Cheddar Bacon Burger', description:'Hambúrguer, muito queijo cheddar derretido e bacon crocante', price:31.90, category:'Hambúrgueres', image:'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=500&h=360&fit=crop' },
  { id:14, name:'Spicy Burger', description:'Hambúrguer, jalapeños, queijo pepper jack e molho picante', price:28.90, category:'Hambúrgueres', image:'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&h=360&fit=crop', isNew:true },
  { id:4, name:'Batata Frita Grande', description:'Porção generosa de batatas crocantes', price:15.90, category:'Acompanhamentos', image:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&h=360&fit=crop' },
  { id:5, name:'Onion Rings', description:'Anéis de cebola empanados e crocantes', price:18.90, category:'Acompanhamentos', image:'https://images.unsplash.com/photo-1639024471283-03518883512d?w=500&h=360&fit=crop' },
  { id:6, name:'Nuggets (10un)', description:'Nuggets crocantes de frango com molho barbecue', price:22.90, category:'Acompanhamentos', image:'https://images.unsplash.com/photo-1562967914-608f82629710?w=500&h=360&fit=crop' },
  { id:15, name:'Batata Rústica', description:'Batatas rústicas com casca, temperadas com ervas', price:17.90, category:'Acompanhamentos', image:'./assets/img/combos/batata_rustica2.jpg', isNew:true },
  { id:16, name:'Batata Cheddar e Bacon', description:'Batatas fritas cobertas com queijo cheddar e bacon', price:24.90, category:'Acompanhamentos', image:'./assets/img/combos/batata_cheddar.jpg' },
  { id:17, name:'Chicken Tenders (6un)', description:'Tiras de frango empanadas com molho à escolha', price:26.90, category:'Acompanhamentos', image:'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500&h=360&fit=crop' },
  { id:18, name:'Salada Caesar', description:'Alface romana, croutons, parmesão e molho caesar', price:19.90, category:'Acompanhamentos', image:'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&h=360&fit=crop' },
  { id:7, name:'Refrigerante 500ml', description:'Coca-Cola, Guaraná ou Sprite', price:7.90, category:'Bebidas', image:'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&h=360&fit=crop' },
  { id:8, name:'Milkshake', description:'Chocolate, morango ou baunilha', price:16.90, category:'Bebidas', image:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&h=360&fit=crop' },
  { id:9, name:'Suco Natural', description:'Laranja, limão ou morango', price:12.90, category:'Bebidas', image:'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&h=360&fit=crop' },
  { id:19, name:'Refrigerante 1L', description:'Coca-Cola, Guaraná ou Sprite', price:12.90, category:'Bebidas', image:'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500&h=360&fit=crop' },
  { id:20, name:'Água Mineral', description:'Água mineral 500ml', price:4.90, category:'Bebidas', image:'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500&h=360&fit=crop' },
  { id:21, name:'Chá Gelado', description:'Limão ou pêssego', price:9.90, category:'Bebidas', image:'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&h=360&fit=crop', isNew:true },
  { id:22, name:'Café Expresso', description:'Café expresso tradicional', price:6.90, category:'Bebidas', image:'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&h=360&fit=crop' },
  { id:23, name:'Torta de Maçã', description:'Torta crocante de maçã com canela', price:12.90, category:'Sobremesas', image:'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=500&h=360&fit=crop' },
  { id:24, name:'Brownie com Sorvete', description:'Brownie de chocolate quente com sorvete de baunilha', price:18.90, category:'Sobremesas', image:'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&h=360&fit=crop', isNew:true },
  { id:25, name:'Casquinha de Sorvete', description:'Sorvete de chocolate, baunilha ou morango', price:8.90, category:'Sobremesas', image:'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&h=360&fit=crop' },
  { id:26, name:'Donuts (3un)', description:'Donuts variados com cobertura', price:15.90, category:'Sobremesas', image:'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=360&fit=crop' }
];

const locations = [
  ['Burger Nation Shopping Center','Av. Paulista, 1000 - Bela Vista, São Paulo - SP','Seg-Sáb: 10h às 22h | Dom: 12h às 20h','(11) 3000-1234',true],
  ['Burger Nation Jardins','Rua Augusta, 2500 - Jardins, São Paulo - SP','Seg-Dom: 11h às 23h','(11) 3000-5678',true],
  ['Burger Nation Vila Mariana','Av. Domingos de Morais, 1500 - Vila Mariana, São Paulo - SP','Seg-Dom: 11h às 22h','(11) 3000-9012',false],
  ['Burger Nation Pinheiros','Rua Teodoro Sampaio, 800 - Pinheiros, São Paulo - SP','Seg-Sex: 10h às 23h | Sáb-Dom: 11h às 00h','(11) 3000-3456',true],
  ['Burger Nation Moema','Av. Ibirapuera, 3000 - Moema, São Paulo - SP','Seg-Dom: 11h às 22h','(11) 3000-7890',true],
  ['Burger Nation Tatuapé','Rua Tuiuti, 2000 - Tatuapé, São Paulo - SP','Seg-Dom: 10h às 22h','(11) 3000-2345',true]
];

const rewards = [
  { name:'Batata Frita Grátis', points:100, image:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=200&fit=crop', description:'Resgate uma porção de batata frita média' },
  { name:'Refrigerante Grátis', points:150, image:'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300&h=200&fit=crop', description:'Resgate um refrigerante 500ml' },
  { name:'Desconto 20% no Combo', points:250, image:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop', description:'20% de desconto em qualquer combo' },
  { name:'Burger Grátis', points:400, image:'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=300&h=200&fit=crop', description:'Resgate um hambúrguer de sua escolha' },
  { name:'Combo Completo Grátis', points:800, image:'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=300&h=200&fit=crop', description:'Combo com burger, batata e bebida' }
];

const state = {
  route: 'menu',
  authMode: 'login',
  category: 'all',
  cart: JSON.parse(localStorage.getItem('bn_cart') || '[]'),
  isLoggedIn: localStorage.getItem('bn_logged') === 'true',
  userName: localStorage.getItem('bn_user') || '',
  points: Number(localStorage.getItem('bn_points') || 350)
};

const app = document.querySelector('#app');

function money(value){
  return value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
}

function save(){
  localStorage.setItem('bn_cart', JSON.stringify(state.cart));
  localStorage.setItem('bn_logged', String(state.isLoggedIn));
  localStorage.setItem('bn_user', state.userName);
  localStorage.setItem('bn_points', String(state.points));
}

function getUsers(){
  return JSON.parse(localStorage.getItem('bn_users') || '[]');
}

function saveUsers(users){
  localStorage.setItem('bn_users', JSON.stringify(users));
}

function toast(message){
  const el = document.querySelector('.toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}

function getRoute(){
  return (location.hash || '#menu').replace('#','') || 'menu';
}

function setActiveNav(){
  document.querySelectorAll('.main-nav a').forEach(link => {
    link.classList.toggle('active', link.dataset.route === state.route);
  });
}

function syncHeader(){
  document.querySelectorAll('[data-points]').forEach(el => el.textContent = state.points);
  document.querySelector('[data-user-name]').textContent = state.userName;
  document.querySelectorAll('.rewards-link,.points-pill,.user-pill,.logout-btn').forEach(el => el.classList.toggle('hidden', !state.isLoggedIn));
  document.querySelector('.login-link').classList.toggle('hidden', state.isLoggedIn);
  setActiveNav();
  renderCart();
}

function addToCart(id){
  const item = menuItems.find(product => product.id === Number(id));
  const existing = state.cart.find(cartItem => cartItem.id === item.id);
  if(existing) existing.quantity += 1;
  else state.cart.push({ id:item.id, name:item.name, price:item.price, image:item.image, quantity:1 });
  save();
  syncHeader();
  toast(`${item.name} adicionado ao carrinho!`);
}

function updateQuantity(id, quantity){
  if(quantity <= 0) state.cart = state.cart.filter(item => item.id !== Number(id));
  else state.cart = state.cart.map(item => item.id === Number(id) ? {...item, quantity} : item);
  save();
  syncHeader();
  if(state.route === 'checkout') renderCheckout();
}

function totals(){
  const quantity = state.cart.reduce((sum,item) => sum + item.quantity, 0);
  const subtotal = state.cart.reduce((sum,item) => sum + item.price * item.quantity, 0);
  return { quantity, subtotal };
}

function renderCart(){
  const { quantity, subtotal } = totals();
  const count = document.querySelector('.cart-count');
  count.textContent = quantity;
  count.classList.toggle('hidden', quantity === 0);
  document.querySelector('.cart-description').textContent = quantity === 0 ? 'Adicione itens do cardápio ao seu carrinho.' : 'Revise seus itens antes de finalizar o pedido.';
  document.querySelector('.cart-total').textContent = money(subtotal);
  document.querySelector('.cart-footer').classList.toggle('hidden', quantity === 0);
  document.querySelector('.cart-items').innerHTML = state.cart.length ? state.cart.map(item => `
    <div class="cart-row">
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-main">
        <h4>${item.name}</h4>
        <p>${money(item.price)}</p>
        <div class="qty">
          <button class="qty-btn" data-qty="${item.id}" data-value="${item.quantity - 1}" type="button">−</button>
          <span>${item.quantity}</span>
          <button class="qty-btn" data-qty="${item.id}" data-value="${item.quantity + 1}" type="button">+</button>
          <button class="danger-btn" data-remove="${item.id}" type="button">🗑</button>
        </div>
      </div>
      <strong>${money(item.price * item.quantity)}</strong>
    </div>
  `).join('') : `<div class="empty-wrap"><p class="muted">Seu carrinho está vazio.</p></div>`;
}

function productCard(item){
  if(item.category === 'Combos'){
    const discount = Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100);
    return `
      <article class="card">
        <div class="card-media">
          <img src="${item.image}" alt="${item.name}">
          ${item.popular ? '<span class="badge primary top-left">Mais Vendido</span>' : ''}
          <span class="badge hot top-right">${discount}% OFF</span>
        </div>
        <div class="card-body">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <div class="includes">
            <strong>Inclui:</strong>
            ${item.includes.map(include => `<span>✓ ${include}</span>`).join('')}
          </div>
          <div class="price-line"><span class="old-price">${money(item.originalPrice)}</span><span class="price">${money(item.price)}</span></div>
        </div>
        <div class="card-actions"><button class="primary-btn wide" data-add="${item.id}" type="button">+ Adicionar</button></div>
      </article>
    `;
  }
  return `
    <article class="card">
      <div class="card-media">
        <img src="${item.image}" alt="${item.name}">
        ${item.isNew ? '<span class="badge hot top-right">Novo</span>' : ''}
      </div>
      <div class="card-body">
        <span class="badge">${item.category}</span>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <span class="price">${money(item.price)}</span>
      </div>
      <div class="card-actions"><button class="primary-btn wide" data-add="${item.id}" type="button">+ Adicionar</button></div>
    </article>
  `;
}

function renderMenu(){
  const categories = ['all','Combos','Hambúrgueres','Acompanhamentos','Bebidas','Sobremesas'];
  const labels = ['Todos','Combos','Burgers','Acompanhamentos','Bebidas','Sobremesas'];
  const items = state.category === 'all' ? menuItems : menuItems.filter(item => item.category === state.category);
  app.innerHTML = `
    <section class="hero">
      <div>
        <span class="badge hot">Pedido online</span>
        <h1>Fast food artesanal com entrega rápida</h1>
        <p>Escolha seus produtos favoritos, acompanhe o carrinho e ganhe pontos a cada compra.</p>
        <a class="primary-btn" href="#menu-list">Ver Cardápio</a>
      </div>
      <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=900&h=650&fit=crop" alt="Hambúrguer artesanal">
    </section>
    <section id="menu-list">
      <div class="page-head">
        <h1>Nosso Cardápio</h1>
        <p>Escolha seus produtos favoritos e ganhe pontos a cada compra!</p>
      </div>
      <div class="tabs">
        ${categories.map((cat,index) => `<button class="tab-btn ${state.category === cat ? 'active' : ''}" data-category="${cat}" type="button">${labels[index]}</button>`).join('')}
      </div>
      <div class="grid">${items.map(productCard).join('')}</div>
    </section>
  `;
}

function renderLocations(){
  app.innerHTML = `
    <div class="page-head">
      <h1>Nossas Unidades</h1>
      <p>Encontre a loja mais próxima de você para retirar seu pedido.</p>
    </div>
    <div class="locations-grid">
      ${locations.map(location => `
        <article class="info-card">
          <span class="badge ${location[4] ? 'green' : 'red'}">${location[4] ? 'Aberto agora' : 'Fechado'}</span>
          <h3>${location[0]}</h3>
          <p>📍 ${location[1]}</p>
          <p>🕒 ${location[2]}</p>
          <p>📞 ${location[3]}</p>
        </article>
      `).join('')}
    </div>
  `;
}

function renderLogin(){
  const isRegister = state.authMode === 'register';
  app.innerHTML = `
    <div class="login-wrap">
      <form class="form-card" id="${isRegister ? 'register-form' : 'login-form'}">
        <div class="page-head">
          <h1>${isRegister ? 'Criar conta' : 'Entrar'}</h1>
          <p>${isRegister ? 'Cadastre-se para acompanhar pedidos, pontos e recompensas.' : 'Acesse sua conta para acompanhar pontos e recompensas.'}</p>
        </div>
        <div class="auth-switch" aria-label="Alternar acesso">
          <button class="${!isRegister ? 'active' : ''}" data-auth-mode="login" type="button">Entrar</button>
          <button class="${isRegister ? 'active' : ''}" data-auth-mode="register" type="button">Criar conta</button>
        </div>
        <div class="form-grid">
          ${isRegister ? '<div class="field"><label for="name">Nome</label><input id="name" required placeholder="Seu nome"></div>' : ''}
          <div class="field"><label for="email">E-mail</label><input id="email" type="email" required placeholder="voce@email.com"></div>
          <div class="field"><label for="password">Senha</label><input id="password" type="password" required minlength="6" placeholder="Minimo de 6 caracteres"></div>
          ${isRegister ? '<div class="field"><label for="confirm-password">Confirmar senha</label><input id="confirm-password" type="password" required minlength="6" placeholder="Repita sua senha"></div>' : ''}
          <button class="primary-btn wide" type="submit">${isRegister ? 'Cadastrar' : 'Entrar'}</button>
          <p class="auth-note">${isRegister ? 'Ja tem conta?' : 'Ainda nao tem conta?'} <button data-auth-mode="${isRegister ? 'login' : 'register'}" type="button">${isRegister ? 'Entrar' : 'Criar conta'}</button></p>
        </div>
      </form>
    </div>
  `;
}

function renderRewards(){
  if(!state.isLoggedIn){
    location.hash = '#login';
    toast('Entre para acessar o programa de pontos.');
    return;
  }
  const progress = Math.min(100, Math.round((state.points / 500) * 100));
  app.innerHTML = `
    <div class="page-head">
      <h1>Programa de Pontos</h1>
      <p>Acumule pontos e troque por recompensas incríveis!</p>
    </div>
    <div class="two-col">
      <section class="info-card">
        <h2>🏆 Seus Pontos</h2>
        <div class="price">${state.points} pontos</div>
        <div class="summary-row"><span class="muted">Próxima recompensa</span><span>500 pontos</span></div>
        <div class="progress"><span style="width:${progress}%"></span></div>
        <p>Faltam ${Math.max(0,500 - state.points)} pontos</p>
      </section>
      <section class="info-card">
        <h2>📈 Como ganhar pontos</h2>
        <p>⭐ Ganhe 10 pontos a cada R$ 10 em compras</p>
        <p>⭐ Bônus de 100 pontos no seu aniversário</p>
        <p>⭐ Indique amigos e ganhe 50 pontos</p>
      </section>
    </div>
    <h2>Recompensas Disponíveis</h2>
    <div class="grid rewards-grid">
      ${rewards.map(reward => `
        <article class="card reward-card">
          <img src="${reward.image}" alt="${reward.name}">
          <div class="card-body">
            <span class="badge">${reward.points} pts</span>
            <h3>${reward.name}</h3>
            <p>${reward.description}</p>
          </div>
          <div class="card-actions">
            <button class="primary-btn wide" data-redeem="${reward.points}" data-reward="${reward.name}" type="button">
              ${state.points >= reward.points ? '🎁 Resgatar' : 'Pontos Insuficientes'}
            </button>
          </div>
        </article>
      `).join('')}
    </div>
    <h2>Histórico de Pontos</h2>
    <section class="info-card">
      ${[
        ['Compra no Shopping Center','15/05/2026','+50 pts','green'],
        ['Compra em Pinheiros','10/05/2026','+75 pts','green'],
        ['Resgate: Batata Frita','08/05/2026','-100 pts','red'],
        ['Compra em Jardins','03/05/2026','+60 pts','green']
      ].map(row => `<div class="history-row"><div><strong>${row[0]}</strong><p>${row[1]}</p></div><strong class="${row[3] === 'green' ? 'badge green' : 'badge red'}">${row[2]}</strong></div>`).join('')}
    </section>
  `;
}

function renderCheckout(){
  const { subtotal } = totals();
  if(!state.cart.length){
    app.innerHTML = `
      <div class="empty-wrap">
        <section class="form-card">
          <h2>Carrinho vazio</h2>
          <p class="muted">Adicione itens ao seu carrinho para fazer um pedido.</p>
          <a class="primary-btn wide" href="#menu">Ver Cardápio</a>
        </section>
      </div>
    `;
    return;
  }
  const delivery = 8.90;
  const canUsePoints = state.points >= 100;
  app.innerHTML = `
    <div class="page-head"><h1>Finalizar Pedido</h1></div>
    <form id="checkout-form" class="checkout-grid">
      <div class="section-stack">
        <section class="info-card">
          <h2>📍 Endereço de Entrega</h2>
          <div class="form-grid">
            <div class="field"><label>CEP *</label><input required placeholder="00000-000"></div>
            <div class="field"><label>Endereço *</label><input required placeholder="Rua, Avenida..."></div>
            <div class="two-col">
              <div class="field"><label>Número *</label><input required placeholder="123"></div>
              <div class="field"><label>Complemento</label><input placeholder="Apto, Bloco..."></div>
            </div>
            <div class="two-col">
              <div class="field"><label>Bairro *</label><input required placeholder="Bairro"></div>
              <div class="field"><label>Cidade *</label><input required value="São Paulo"></div>
            </div>
            <p class="hours">🕒 Tempo estimado de entrega: 30-40 minutos</p>
          </div>
        </section>
        <section class="info-card">
          <h2>💳 Forma de Pagamento</h2>
          <div class="payment-list">
            ${['Cartão de Crédito','Cartão de Débito','PIX','Dinheiro'].map((label,index) => `
              <label class="payment-option"><input type="radio" name="payment" ${index === 0 ? 'checked' : ''}> ${label}</label>
            `).join('')}
          </div>
        </section>
      </div>
      <aside class="info-card sticky-card">
        <h2>Resumo do Pedido</h2>
        ${state.cart.map(item => `<div class="summary-row"><span>${item.quantity}x ${item.name}</span><span>${money(item.price * item.quantity)}</span></div>`).join('')}
        <div class="divider"></div>
        <div class="summary-row"><span>Subtotal</span><span>${money(subtotal)}</span></div>
        <div class="summary-row"><span>Taxa de entrega</span><span>${money(delivery)}</span></div>
        <div class="summary-row points-discount hidden"><span>Desconto (pontos)</span><span>- ${money(10)}</span></div>
        <div class="divider"></div>
        <div class="summary-row total"><span>Total</span><span data-checkout-total>${money(subtotal + delivery)}</span></div>
        ${canUsePoints ? `<label class="payment-option"><input type="checkbox" id="use-points"> 🏆 Usar 100 pontos para R$ 10,00 de desconto</label>` : ''}
        <p class="hours">🏆 Você vai ganhar <span data-earn>${Math.floor((subtotal + delivery) / 10) * 10}</span> pontos neste pedido!</p>
        <button class="primary-btn wide" type="submit">Confirmar Pedido</button>
      </aside>
    </form>
  `;
}

function render(){
  state.route = getRoute();
  if(state.route === 'locations') renderLocations();
  else if(state.route === 'login') renderLogin();
  else if(state.route === 'rewards') renderRewards();
  else if(state.route === 'checkout') renderCheckout();
  else renderMenu();
  syncHeader();
}

document.addEventListener('click', event => {
  const add = event.target.closest('[data-add]');
  if(add) addToCart(add.dataset.add);

  const tab = event.target.closest('[data-category]');
  if(tab){
    state.category = tab.dataset.category;
    renderMenu();
  }

  const authMode = event.target.closest('[data-auth-mode]');
  if(authMode){
    state.authMode = authMode.dataset.authMode;
    renderLogin();
  }

  const qty = event.target.closest('[data-qty]');
  if(qty) updateQuantity(qty.dataset.qty, Number(qty.dataset.value));

  const remove = event.target.closest('[data-remove]');
  if(remove) updateQuantity(remove.dataset.remove, 0);

  if(event.target.closest('.cart-toggle')) document.querySelector('.cart-panel').classList.add('open');
  if(event.target.closest('.cart-close')) document.querySelector('.cart-panel').classList.remove('open');

  const redeem = event.target.closest('[data-redeem]');
  if(redeem){
    const points = Number(redeem.dataset.redeem);
    if(state.points >= points){
      state.points -= points;
      save();
      toast(`${redeem.dataset.reward} resgatado com sucesso!`);
      renderRewards();
    } else {
      toast(`Você precisa de ${points - state.points} pontos a mais.`);
    }
  }

  if(event.target.closest('.logout-btn')){
    state.isLoggedIn = false;
    state.userName = '';
    save();
    toast('Você saiu da conta.');
    if(state.route === 'rewards') location.hash = '#menu';
    render();
  }
});

document.addEventListener('change', event => {
  if(event.target.id === 'use-points'){
    const { subtotal } = totals();
    const delivery = 8.90;
    const discount = event.target.checked ? 10 : 0;
    document.querySelector('.points-discount').classList.toggle('hidden', !event.target.checked);
    document.querySelector('[data-checkout-total]').textContent = money(subtotal + delivery - discount);
    document.querySelector('[data-earn]').textContent = Math.floor((subtotal + delivery - discount) / 10) * 10;
  }
});

document.addEventListener('submit', event => {
  if(event.target.id === 'login-form'){
    event.preventDefault();
    const email = document.querySelector('#email').value.trim().toLowerCase();
    const password = document.querySelector('#password').value;
    const user = getUsers().find(savedUser => savedUser.email === email && savedUser.password === password);

    if(!user){
      toast('E-mail ou senha incorretos. Crie uma conta se ainda nao tiver cadastro.');
      return;
    }

    state.userName = user.name;
    state.isLoggedIn = true;
    save();
    toast(`Bem-vindo, ${state.userName}!`);
    location.hash = '#menu';
  }

  if(event.target.id === 'register-form'){
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim().toLowerCase();
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirm-password').value;
    const users = getUsers();

    if(password !== confirmPassword){
      toast('As senhas nao conferem.');
      return;
    }

    if(users.some(user => user.email === email)){
      toast('Este e-mail ja esta cadastrado.');
      return;
    }

    users.push({ name, email, password });
    saveUsers(users);
    state.userName = name;
    state.isLoggedIn = true;
    save();
    toast(`Conta criada com sucesso, ${state.userName}!`);
    location.hash = '#menu';
  }

  if(event.target.id === 'checkout-form'){
    event.preventDefault();
    const { subtotal } = totals();
    const usePoints = document.querySelector('#use-points')?.checked;
    const total = subtotal + 8.90 - (usePoints ? 10 : 0);
    state.points += Math.floor(total / 10) * 10;
    if(usePoints) state.points -= 100;
    state.cart = [];
    save();
    toast('Pedido realizado com sucesso!');
    location.hash = '#menu';
  }
});

window.addEventListener('hashchange', render);
render();
