## 馃摉 Curso Udemy : Express Tailwind

---

## Temas:

    * Conceptos fundamentales para crear sitios web con Tailwind CSS
    * Mejores pr谩cticas al usar componentes y estilos
    * Uso del compilador JIT
    * Creaci贸n de estilos arbitrarios
    * Creaci贸n de componentes reusables

---

## 驴 Qu茅 instalar ?

Para instalar 4 m贸dulos:

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

Y as铆 solo va a compilar los archivos que estoy ejecutando.

---

## Proyecto

**node_modules**

**public**: con el _index.html_, y las carpetas: _videos_, _img_ y _css_ ( con el css final).

**src**: el c贸digo a compilar con tailwind

**package-lock.json**

**package.json**

**postcss.config.js**: configuraci贸n de pluggins.

**tailwind.config.js**: configuro la forma en que se trabajara con Tailwind a nivel de compilaci贸n.

---

:computer: Lo pod茅s ver ac谩 -> [https://eugenia1984.github.io/tailwind-css/public/index.html](https://eugenia1984.github.io/tailwind-css/public/index.html)

---

## Por favor: 馃巵

* Comparte este proyecto con otros 馃摙
* Invita con una cerveza 馃嵑 o un caf茅 鈽? a alguien del equipo. 
* Muchas gracias 馃.

---

## Notas:
Aprecio tu inter茅s por este ropositorio 鈱笍 con 鉂わ笍 de [Mar铆a Eugenia Costa](https://github.com/eugenia1984) 馃槉 y seguime en [LinkedIn](http://www.linkedin.com/in/mar铆aeugeniacosta) 

---
