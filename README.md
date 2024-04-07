<p align="center"> 
<a href="https://github.com/BryantPPT"><img src="http://readme-typing-svg.herokuapp.com?font=mono&size=17&duration=4000&color=F7B11B&center=falso&vCenter=falso&lines=SharksBot-MD++%F0%9F%90%88;Gracias+por+visitar+este+repositorio.+%F0%9F%92%96" height="90px"></a> 
</p>
 
<p align="center">
<img src="https://telegra.ph/file/d8123357169afc1811d8e.mp4" alt="SharksBot" width="800"/>
  
> Antes de usar este repositorio, visita la **[Política de SharksBot](https://github.com/BryantPPT/SharksBot-MD/blob/master/terms.md)** 
</p>

<p align="center">
<a href="#"><img title="SharksBot-MD" src="https://img.shields.io/badge/SI TE GUSTA ESTE REPOSITORIO APOYAME CON UNA 🦈 ¡GRACIAS! -red?colorA=%255ff0000&colorB=%23017e40&style=for-the-badge"></a> 
<img src="https://i.pinimg.com/originals/5f/75/ce/5f75ce6b0260922a4480284b699deaad.gif" height="28px">
</p>  

<p align="center">
<a href="#"><img title="SharksBot-MD" src="https://img.shields.io/badge/LEA TODO EL README-red?colorA=%F77F48FF&colorB=%F77F48FF&style=for-the-badge"></a> 
<a href="#"><img title="SharksBot-MD" src="https://img.shields.io/badge/COMPATIBLE CON LA VERSIÓN MULTI DISPOSITIVOS DE WHATSAPP-red?colorA=%F77F48FF&colorB=%F77F48FF&style=for-the-badge"></a>
</p>

<p align="center">   
<a href="https://github.com/BryantPPT/SharksBot-MD/watchers"><img title="Visualización" src="https://img.shields.io/github/watchers/BryantPPT/SharksBot-MD?label=Visualización&col or=green&style=flat-square"></a>
<a href="https://github.com/BryantPPT/SharksBot-MD/stargazers"><img title="Estrellas" src="https://img.shields.io/github/stars/BryantPPT/SharksBot-MD?label=Estrellas&color=yellow&style=flat-square"></a>
</p>

<div align="center">
  
[![Gmail](https://img.shields.io/badge/GMAIL-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:xlbrayan30@gmail.com)
[![WhatsApp](https://img.shields.io/badge/CONSULTA-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/+18298838883)
[![YouTube](https://img.shields.io/badge/YOUTUBE-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@dxxrkgxntel)
[![Instagram](https://img.shields.io/badge/INSTAGRAM-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/soybryant_hdx)
[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/brayanbeltrex)
</div>

### 👇 `Todas las cuentas están aquí!!`
[![Enlaces](https://img.shields.io/badge/SHARKSBOT_Accounts-000000%7D?style=for-the-badge&logo=biolink&logoColor=white)](https://www.atom.bio/sharksbot/)

-----
# 📍 Atajos del README

| TEMA | DESCRIPCIÓN | ATAJO |
|------|-------------|-------|
| **TERMUX** | ***INSTALACIÓN AUTOMÁTICA*** |[ver](https://github.com/BryantPPT/SharksBot-MD/tree/master?tab=readme-ov-file#-opci%C3%B3n-1-instalaci%C3%B3n-autom%C3%A1tica-) |
| **TERMUX** | ***INSTALACIÓN MANUAL*** |[ver](https://github.com/BryantPPT/SharksBot-MD/#-opción-2-instalación-manual-por-termux---github) |
| **TERMUX UPDATE** | ***COMANDOS PARA ACTUALIZAR SHARKSBOT*** |[ver](https://github.com/BryantPPT/SharksBot-MD/#-actualizar-sharksbot) |
| **WINDOWS** | ***INSTALACIÓN POR WINDOWS*** |[ver](https://github.com/BryantPPT/SharksBot-MD/#-para-usuarios-de-windowsvpsrdp) |
| **SOBRE SHARKSBOT** | ***POLÍTICA DE USO*** |[ver](https://github.com/BryantPPT/SharksBot-MD/blob/master/terms.md) |
| **DESARROLLADORES** | ***PARTICIPATES DEL PROYECTO*** |[ver](https://github.com/BryantPPT/SharksBot-MD/#-creador) |
-----
### 🦈 (OPCIÓN 1) INSTALACIÓN AUTOMÁTICA 🫰
[![blog](https://img.shields.io/badge/Instalacion-Automatica-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/shorts/PESW8LXXlOI?feature=share)
> **Nota** Comandos para instalar de forma automática en Termux  
```bash
termux-setup-storage
```
```bash
apt update -y && yes | apt upgrade && pkg install -y bash wget mpv && wget -O - https://raw.githubusercontent.com/BryantPPT/SharksBot-MD/master/sharks.sh | bash
```
-----
### 🦈 (OPCIÓN 2) INSTALACIÓN MANUAL POR TERMUX - GITHUB 
```bash
termux-setup-storage
```
```bash
apt update && apt upgrade && pkg install -y git nodejs ffmpeg imagemagick yarn
```
```bash
git clone https://github.com/BryantPPT/SharksBot-MD && cd SharksBot-MD
```
```bash
yarn install && npm install
```
```bash
npm start
```
------------------
### `🦈 ACTIVAR EN CASO DE DETENERSE EN TERMUX`
> **Nota** Si despues que ya instalaste tu bot y termux te salta en blanco, se fue tu internet o reiniciaste tu celular, solo realizaras estos pasos :
```bash
cd
```
```bash
cd SharksBot-MD
```
```bash
npm start
```
----
### `🦈 OBTENER OTRO CODIGO QR EN TERMUX`
> **Alerta** deten el bot, haz click en el símbolo (ctrl) [default=z] usar la letra "z" + "ENTER" hasta que salga algo verdes similar a : SharksBot-MD $
> escribe los siguientes comando uno x uno :
```bash 
cd SharksBot-MD
```
```bash
rm -rf SharksBotSession
```
```bash
npm start
```
----
### 🦈 ACTUALIZAR SHARKSBOT
```bash
grep -q 'bash\|wget' <(dpkg -l) || apt install -y bash wget && wget -O - https://raw.githubusercontent.com/BryantPPT/SharksBot-MD/master/update.sh | bash 
```
> Para que no pierda su progreso en SharksBot, estos comandos realizarán un respaldo de su `database.json` y se agregará a la versión más reciente.                          
----
## 🦈 PARA USUARIOS DE WINDOWS/VPS/RDP

* Descargar e instala Git [`Aquí`](https://git-scm.com/downloads)
* Descargar e instala NodeJS [`Aquí`](https://nodejs.org/en/download)
* Descargar e instala FFmpeg [`Aquí`](https://ffmpeg.org/download.html) (**No olvide agregar FFmpeg a la variable de entorno PATH**)
* Descargar e instala ImageMagick [`Aquí`](https://imagemagick.org/script/download.php)
* Descargar e instala Yarn [`Aquí`](https://classic.yarnpkg.com/en/docs/install#windows-stable)
```bash
git clone https://github.com/BryantPPT/SharksBot-MD && cd SharksBot-MD && npm install && npm update && node .
```
----
### 💠 [`IDIOMAS DISPONIBLES PARA SHARKSBOT`](https://github.com/BryantPPT/SharksBot-MD/blob/master/config.js) 
#### 🌐 Español  
#### 🌐 Inglés (English) 
#### 🌐 Portugués (Português)
#### 🌐 Indonesio (Bahasa Indonesia) 
#### 🌐 Árabe (عرب)
#### 🌐 Hindi (Indian Language)
----

### 🦈 DESARROLLADORES
<a href="https://github.com/BryantPPT/SharksBot-MD/graphs/contributors">
<img src="https://contrib.rocks/image?repo=BryantPPT/SharksBot-MD" /> 
</a>

> Copyright (c) 2024 **[BryantPPT](https://github.com/BryantPPT/SharksBot-MD/blob/master/LICENSE)**.
