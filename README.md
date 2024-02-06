# Projeto Promotions Meli

## Decisões de Tecnologia e Arquitetura

Este projeto utiliza o Vite como seu bundler e ferramenta de desenvolvimento rápido para React, combinado com o React Query para gerenciamento de estados.

### Justificativas

#### Vite

- **Desenvolvimento Rápido**: Vite oferece uma experiência de desenvolvimento rápida e eficiente, proporcionando recarregamento rápido, inicialização de projeto simplificada e suporte nativo para TypeScript.

- **Módulos ESM**: O suporte nativo para módulos ESM (ECMAScript Modules) melhora a eficiência da entrega de código ao navegador, otimizando o carregamento de módulos.

#### React Query

- **Simplicidade e Flexibilidade**: React Query simplifica a gestão do estado da aplicação, tornando fácil buscar, atualizar e manter o estado da aplicação no lado do cliente. Sua abordagem declarativa facilita a integração com componentes React.

- **Consulta de Dados Desacoplada**: A abordagem de consulta de dados desacoplada do React Query permite que as chamadas de API sejam feitas de forma independente, promovendo um código mais modular e reutilizável.

### Instalação e Execução

Certifique-se de ter o Node.js instalado e, em seguida, execute os seguintes comandos:

```sh
yarn && yarn dev
```