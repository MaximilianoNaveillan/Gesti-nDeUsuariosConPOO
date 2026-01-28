# 👥 Guía Paso a Paso: Gestión de Usuarios con POO en JavaScript

Esta guía te ayudará a **modelar usuarios de una aplicación web** usando Programación Orientada a Objetos (POO) en JavaScript. Está pensada para trabajar **paso a paso**, entendiendo tanto la lógica como la ejecución del código.

---

## 🎯 Objetivo del Ejercicio

Al finalizar esta actividad, podrás:

- Crear clases usando `class`
- Utilizar constructores para inicializar datos
- Aplicar **herencia** con `extends`
- Sobreescribir métodos (polimorfismo)
- Instanciar objetos y ejecutar métodos
- Visualizar resultados en la consola del navegador

---

## 🧠 Contexto

Una aplicación web necesita **gestionar usuarios** con información básica:

- Nombre
- Correo electrónico

Además, el sistema debe manejar **usuarios administradores**, los cuales:

- Heredan los datos de un usuario normal
- Tienen un permiso especial (true / false)

---

## ✍️ Consigna

Debes:

1. Crear una clase `Usuario`
2. Crear una subclase `Administrador`
3. Sobreescribir un método
4. Probar el funcionamiento usando la consola

⏱️ **Tiempo estimado:** 30 minutos

---

## 📂 Estructura del Proyecto

```text
.
├── index.html        # Carga de scripts
├── usuarios.js       # Lógica POO del ejercicio
└── README.md         # Esta guía
```

---

## 🧩 Paso 1: Configurar el archivo `index.html`

Este archivo solo se usará para ejecutar JavaScript y ver resultados en consola.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Gestión de Usuarios POO</title>
  </head>
  <body>
    <h1>Gestión de Usuarios</h1>

    <script src="usuarios.js"></script>
  </body>
</html>
```

📌 **Recuerda:** Todo lo que muestre el ejercicio se verá usando `console.log()`.

---

## 🧱 Paso 2: Crear la clase `Usuario`

Trabajaremos ahora en el archivo `usuarios.js`.

### 👉 ¿Qué es un Usuario?

Un usuario tiene:

- Un **nombre**
- Un **correo electrónico**
- Un método para mostrar su información

---

### ✏️ Definición de la clase

```javascript
class Usuario {
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
  }

  mostrarInfo() {
    console.log(`Nombre: ${this.nombre}, Correo: ${this.correo}`);
  }
}
```

### 🧠 Explicación clave

- `constructor()` se ejecuta automáticamente al crear un objeto
- `this` representa la instancia actual
- `mostrarInfo()` es un método público

---

## 🧬 Paso 3: Crear la subclase `Administrador`

Un administrador **es un usuario**, pero con más responsabilidades.

👉 Aquí aplicamos **herencia**.

---

### ✏️ Definición de la subclase

```javascript
class Administrador extends Usuario {
  constructor(nombre, correo, permiso) {
    super(nombre, correo); // Llama al constructor de Usuario
    this.permiso = permiso;
  }

  mostrarInfo() {
    console.log(
      `Nombre: ${this.nombre}, Correo: ${this.correo}, Permiso: ${this.permiso ? 'Sí' : 'No'}`
    );
  }
}
```

---

### 🧠 Conceptos importantes

- `extends` permite heredar atributos y métodos
- `super()` ejecuta el constructor de la clase padre
- `mostrarInfo()` se **sobreescribe** (polimorfismo)

---

## ▶️ Paso 4: Crear instancias y probar el código

Ahora vamos a crear objetos reales usando las clases.

---

### ✏️ Instanciación

```javascript
const usuario1 = new Usuario('Sofía', 'sofia@email.com');
const admin1 = new Administrador('Lucas', 'lucas@email.com', true);
```

---

### ▶️ Ejecutar métodos

```javascript
usuario1.mostrarInfo();
admin1.mostrarInfo();
```

---

### 🖥️ Resultado esperado en consola

```text
Nombre: Sofía, Correo: sofia@email.com
Nombre: Lucas, Correo: lucas@email.com, Permiso: Sí
```

---

## 🚫 Errores Comunes

❌ Olvidar usar `new`

```javascript
Usuario('Ana', 'ana@mail.com'); // Incorrecto
```

❌ No llamar a `super()` en la subclase

❌ Intentar acceder a propiedades sin `this`

---

## 🧪 Desafío Opcional

👉 Extiende el ejercicio:

- Agrega un método `esAdministrador()`
- Crea un usuario con permiso `false`
- Muestra un mensaje distinto según el tipo de usuario

💡 Ejemplo:

```javascript
esAdministrador() {
  return this.permiso;
}
```

---

## ✅ Conclusión

Este ejercicio demuestra cómo JavaScript permite modelar **roles y permisos reales** usando POO. Este patrón es común en:

- Sistemas de autenticación
- Paneles de administración
- Backend con Node.js
- Frontend con React

📘 Dominar esto te permitirá entender mejor arquitecturas reales de aplicaciones web 🚀
