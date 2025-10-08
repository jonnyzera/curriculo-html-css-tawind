# Currículo Profissional - Frontend Moderno

Este é um projeto de currículo profissional (CV) desenvolvido com foco em design responsivo, utilizando **HTML5** para estrutura e **Tailwind CSS** para estilização rápida e moderna. O layout é limpo, com uma paleta de cores personalizada para destacar seções importantes.

## 🚀 Tecnologias Utilizadas

* **HTML5:** Estrutura semântica do currículo.
* **Tailwind CSS:** Framework CSS utilitário (via CDN) para design responsivo e estilos rápidos.
* **CSS Puro (`style.css`):** Utilizado para definir variáveis de cor e classes específicas (como a linha do tempo e o cabeçalho fixo).
* **JavaScript:** Utilizado para a funcionalidade de alternar o menu de navegação em dispositivos móveis (`toggleMenu()`).

## ✨ Funcionalidades

* **Design Responsivo:** O layout se adapta perfeitamente a diferentes tamanhos de tela (desktop, tablet e mobile).
* **Header Fixo (Sticky Header):** O cabeçalho de navegação permanece visível no topo da tela durante a rolagem para facilitar a navegação entre as seções.
* **Paleta de Cores Customizada:** Uso de um esquema de cores moderno com um azul escuro (`--color-primary`) e um verde destaque (`--color-highlight`).
* **Estrutura Modular:** O conteúdo é dividido em seções claras e navegáveis, como:
    * Sobre e Contato
    * Experiência Profissional (formato de linha do tempo)
    * Habilidades Técnicas e Profissionais
    * Formação e Capacitação
    * Informações Chave e Portfólio (com links para GitHub e LinkedIn).

## ⚙️ Estrutura do Projeto

O projeto é composto por dois arquivos principais:

1.  **`index.html`**:
    * Contém toda a marcação HTML e o conteúdo do currículo.
    * Importa o CDN do Tailwind e o arquivo `style.css`.
    * Define uma configuração customizada do Tailwind para as fontes.

2.  **`style.css`**:
    * Define as **Variáveis CSS** para a paleta de cores customizada: `primary` (Azul Escuro), `secondary` (Cinza Maduro) e `highlight` (Verde Destaque).
    * Cria classes utilitárias baseadas nessas variáveis (ex: `.text-primary`, `.bg-primary`).

## 🖌️ Personalização de Cores

As cores principais do currículo podem ser facilmente alteradas no arquivo `style.css` modificando as variáveis CSS:

```css
/* style.css */
:root {
    --color-primary: #1D4ED8;    /* Altere este valor para a cor principal desejada */
    --color-secondary: #6B7280;  /* Cor secundária para textos (Cinza Maduro) */
    --color-highlight: #10B981;  /* Altere este valor para a cor de destaque desejada */
}
