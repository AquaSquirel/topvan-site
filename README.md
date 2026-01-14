# 🚐 Topvan - Website Oficial

Website institucional desenvolvido para a **Topvan Locadora de Veículos**, empresa especializada em transporte universitário, escolar e executivo na rota **Piedade ⇄ Sorocaba**. Desenvolvido com Vibe coding.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as tecnologias mais modernas do ecossistema React:

*   **[Next.js 15+](https://nextjs.org/)**: Framework React para produção (App Router).
*   **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para maior segurança e manutenibilidade.
*   **[Tailwind CSS v4](https://tailwindcss.com/)**: Estilização utility-first com configuração de tema via variáveis CSS.
*   **Lucide React / Heroicons**: Ícones SVG otimizados (via SVG inline neste projeto).

## 🎨 Identidade Visual

O design segue uma estética **Premium/Executiva**:
*   **Cores Primárias**: Preto (`#000000`) e Dourado (`#d4af37`).
*   **Tipografia**: *Montserrat* (Google Fonts).
*   **Tema**: Dark Mode nativo.

## 📂 Estrutura do Projeto

*   `src/app`: Páginas e layout global (Next.js App Router).
*   `src/components`: Componentes reutilizáveis da interface.
    *   `Hero.tsx`: Seção principal com foco na rota Piedade-Sorocaba.
    *   `DailyRoutes.tsx`: Listagem das escolas e faculdades atendidas.
    *   `Fleet.tsx`: Destaque para a Mercedes Sprinter e diferenciais (Alexa, TV).
    *   `Tourism.tsx`: Galeria de destinos turísticos.
    *   `Contact.tsx`: Formulário com integração direta para WhatsApp.

## 🛠️ Como Rodar Localmente

1.  Clone o repositório:
    ```bash
    git clone https://github.com/aquasquirel/topvan-site.git
    ```

2.  Instale as dependências:
    ```bash
    npm install
    ```

3.  Execute o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

4.  Acesse `http://localhost:3000` no seu navegador.

## 📦 Build para Produção

Para gerar a versão otimizada para produção:

```bash
npm run build
npm start
```

---

Desenvolvido para **Topvan Locadora de Veículos Ltda**.
