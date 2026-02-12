/**
 * app.js - Lógica de interfaz
 * Usa clases de poo.js
 */

document.addEventListener('DOMContentLoaded', function () {
  let usuarios = [];
  const lista = document.getElementById('listaUsuarios');
  const contador = document.getElementById('contador');
  const form = document.getElementById('formUsuarios');

  // Renderizar
  function render() {
    contador.textContent = usuarios.length;
    lista.innerHTML = '';

    usuarios.forEach((user, i) => {
      const item = document.createElement('div');
      item.className = 'list-group-item d-flex justify-content-between align-items-center p-3';
      item.innerHTML = `
        <div>
          <div class="fw-bold">${user.mostrarInfo()}</div>
          <small class="text-muted">
            ID: ${i + 1} | 
            ${user instanceof Administrador ? `🔐 ${user.gestionarSistema()}` : 'Usuario normal'}
          </small>
        </div>
        <button class="btn btn-sm btn-outline-danger" onclick="app.eliminar(${i})">
          <i class="fas fa-trash"></i>
        </button>
      `;
      lista.appendChild(item);
    });
  }

  // Form submit
  form.onsubmit = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const esAdmin = document.getElementById('esAdmin').checked;

    try {
      const nuevo = esAdmin ? new Administrador(nombre, correo) : new Usuario(nombre, correo);

      usuarios.push(nuevo);
      render();
      form.reset();
    } catch (error) {
      alert(error.message);
    }
  };

  // Botones
  document.getElementById('btnLimpiar').onclick = () => {
    if (confirm('¿Limpiar todos?')) {
      usuarios = [];
      render();
    }
  };

  document.getElementById('btnToggle').onclick = () => {
    usuarios.forEach((u) => {
      if (u instanceof Administrador) {
        u.permiso = !u.permiso;
      }
    });
    render();
  };

  // API pública
  window.app = {
    eliminar: (index) => {
      if (confirm(`¿Eliminar ${usuarios[index]?.nombre || ''}?`)) {
        usuarios.splice(index, 1);
        render();
      }
    },
  };

  render();
  console.log('🚀 App lista - Usa poo.js');
});
