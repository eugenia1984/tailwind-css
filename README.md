## 📖 Curso Udemy : Express Tailwind

---

## Temas:

    * Conceptos fundamentales para crear sitios web con Tailwind CSS
    * Mejores prácticas al usar componentes y estilos
    * Uso del compilador JIT
    * Creación de estilos arbitrarios
    * Creación de componentes reusables

---

## ¿ Qué instalar ?

Para instalar 4 módulos:

```
npm i tailwindcss postcss-cli autoprefixer @tailwindcss/jit
```

Y en **package.json** veo en dependencias:

```
"dependencies": {
    "@tailwindcss/jit": "^0.1.18",
    "autoprefixer": "^10.3.7",
    "postcss-cli": "^8.3.1",
    "prefixer": "0.0.3",
    "tailwindcss": "^2.2.16",
    "win-node-env": "^0.4.0"
  }
```

```
npm i win-node-env
```

---

## extensiones en VSC:

**Tailwind CSS intelliSense**

---

## Cada vez que agrego nuevas clases en tailwind.config.js

```
npm run build:css
```

Porque antes en el **package.json** configuro :

```
"scripts": {
    "build:css": "postcss ./src/tailwind.css -o ./public/css/main.css",
    "build": "NODE_ENV=production postcss ./src/tailwind.css -o ./public/css/main.css",
    "dev": "nodemon -x npm run build:css -w src/tailwind.css -w tailwind.config.js -w public/index.html"
  },
```

*En **postcss.config.js** en la parte de *plugins\*:

```
'@tailwindcss/jit': {},
```

Y en mi terminal, si no tengo Nodemon:

```
npm i -g nodemon
```

Y en **packege.json** agrego en _script_ :

```
"dev": "nodemon -x npm run build:css -w src/tailwind.css -w tailwind.config.js -w public/index.html"
```

Para que cada vez que detecte cambios en los archivos va a volver a configurar el main.css

Para poder ejecutarlo, en terminal:

```
npm run dev
```

Y así solo va a compilar los archivos que estoy ejecutando.

---

## Proyecto

**node_modules**

**public**: con el _index.html_, y las carpetas: _videos_, _img_ y _css_ ( con el css final).

**src**: el código a compilar con tailwind

**package-lock.json**

**package.json**

**postcss.config.js**: configuración de pluggins.

**tailwind.config.js**: configuro la forma en que se trabajara con Tailwind a nivel de compilación.

---

---

## Por favor: 🎁

* Comparte este proyecto con otros 📢
* Invita con una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Muchas gracias 🤓.

---

## Notas:
Aprecio tu interés por este ropositorio ⌨️ con ❤️ de [María Eugenia Costa](https://github.com/eugenia1984) 😊 y seguime en [LinkedIn](http://www.linkedin.com/in/maríaeugeniacosta) 

---
