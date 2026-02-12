/**
 * 🧑‍💻 poo.js - Clases POO Gestión Usuarios
 * Versión corregida: sin #privados, con _convención
 */

// ====================================================================
// 🔹 CLASE BASE: Usuario
// ====================================================================
class Usuario {
  /**
   * @param {string} nombre //@ decorador propiedad nombre y correo se ocupara como string
   * @param {string} correo
   */
  constructor(nombre, correo) {
    // Validación estricta
    if (typeof nombre !== 'string' || nombre.trim().length === 0) {
      throw new Error('❌ Nombre inválido');
    }
    if (typeof correo !== 'string' || !correo.includes('@')) {
      throw new Error('❌ Correo inválido');
    }

    this.nombre = nombre.trim();
    this.correo = correo.trim().toLowerCase();
  }

  /**
   * Polimorfismo: sobrescrito en Admin
   */
  mostrarInfo() {
    return `👤 ${this.nombre} | 📧 ${this.correo}`;
  }
}

// ====================================================================
// 🔹 CLASE HIJA: Administrador (herencia + encapsulamiento)
// ====================================================================
class Administrador extends Usuario {
  /**
   * @param {string} nombre
   * @param {string} correo
   * @param {boolean} permiso
   */
  constructor(nombre, correo, permiso = true) {
    // ⚠️ super() SIEMPRE primero
    super(nombre, correo);

    // Validación booleano estricto
    if (typeof permiso !== 'boolean') {
      throw new Error('❌ Permiso debe ser booleano');
    }

    // ✅ _convención privada (compatible todos navegadores)
    this._permiso = permiso;
  }

  // 🔒 Getter controlado
  get permiso() {
    return this._permiso;
  }

  // 🔒 Setter con validación
  set permiso(nuevoValor) {
    if (typeof nuevoValor !== 'boolean') {
      throw new Error('❌ Solo true/false');
    }
    this._permiso = nuevoValor;
  }

  // 🔄 Polimorfismo: comportamiento diferente
  mostrarInfo() {
    const estado = this._permiso ? '✅ Activo' : '⚠️ Inactivo';
    return `👑 ${this.nombre} | 📧 ${this.correo} | ${estado}`;
  }

  // 🔐 Método exclusivo Admin
  gestionarSistema() {
    return this._permiso ? '🔓 Acceso OK' : '🚫 Denegado';
  }

  // 🗑️ Acción admin
  eliminarUsuario(usuario) {
    if (!this._permiso) return '🚫 Sin permisos';
    return `🗑️ "${usuario.nombre}" eliminado`;
  }
}

// ====================================================================
// 🔹 EXPORT (para app.js)
// ====================================================================
// Hacer clases globales (disponibles en window)
window.Usuario = Usuario;
window.Administrador = Administrador;

console.log('✅ poo.js cargado - Clases: Usuario, Administrador');
