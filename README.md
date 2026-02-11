# 🧑‍💻 Gestionando Usuarios con POO

## 🙌 Contexto

Una aplicación web necesita gestionar usuarios con atributos básicos
como nombre y correo.\
Además, debe permitir registrar administradores con permisos especiales.

El objetivo es aplicar los conceptos de:

- Clases (ES6)
- Herencia (extends)
- Sobreescritura de métodos (polimorfismo)
- Uso de constructor()

⏱ **Tiempo estimado:** 30 minutos

---

## ✍️ Consigna

1.  Crear una clase `Usuario` con:
    - Atributos: `nombre` y `correo`
    - Método `mostrarInfo()` que muestre la información del usuario.

2.  Crear una subclase `Administrador` que:
    - Herede de `Usuario`
    - Agregue un atributo `permiso` (booleano)

3.  Sobreescribir el método `mostrarInfo()` en `Administrador` para
    incluir el estado del permiso.

4.  Instanciar:
    - Un usuario normal
    - Un administrador

    Luego mostrar su información en consola.

---

## ⚙️ Paso a Paso (Guía con Pistas)

### 🔹 Paso 1: Crear la clase Usuario

- Usa la palabra clave `class`.
- Define un `constructor(nombre, correo)`.
- Dentro del constructor usa `this` para asignar propiedades.
- Crea un método `mostrarInfo()` que retorne un texto con los datos.

💡 Pista: Recuerda que el `constructor()` se ejecuta automáticamente
cuando usas `new`.

---

### 🔹 Paso 2: Crear la clase Administrador

- Usa `extends` para heredar de `Usuario`.
- Define su propio `constructor`.
- Llama a `super()` para inicializar las propiedades heredadas.
- Agrega el atributo adicional `permiso`.

💡 Pista: Si no usas `super()` antes de `this`, el código generará
error.

---

### 🔹 Paso 3: Sobreescribir mostrarInfo()

- Crea nuevamente el método `mostrarInfo()` dentro de `Administrador`.
- Incluye la información del permiso.
- Puedes reutilizar información del padre si lo deseas.

💡 Pista: El polimorfismo permite mantener el mismo nombre del método
pero cambiar su comportamiento.

---

### 🔹 Paso 4: Crear instancias

- Usa `new` para crear:
  - Un objeto `Usuario`
  - Un objeto `Administrador`
- Llama a `mostrarInfo()` en ambos.
- Muestra los resultados con `console.log()`.

💡 Pista: Verifica que el administrador muestre información adicional
respecto al usuario normal.

---

## 🎯 Objetivo de Aprendizaje

Al finalizar deberías comprender:

✔ Cómo crear clases en ES6\
✔ Cómo aplicar herencia con `extends`\
✔ Cómo usar `super()`\
✔ Cómo sobrescribir métodos (polimorfismo)\
✔ Cómo instanciar objetos correctamente

---

🚀 Desafío extra (Opcional):

- Agrega un método adicional solo para administradores.
- Valida que el permiso sea estrictamente booleano.
- Implementa encapsulamiento usando campos privados (#).
