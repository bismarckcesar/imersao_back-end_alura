module.exports = {
    env: {
      node: true, // Ambiente Node.js
      es2021: true, // Sintaxe moderna do JavaScript (ES2021)
    },
    parser: '@typescript-eslint/parser', // Define o parser para TypeScript
    parserOptions: {
      ecmaVersion: 12, // Suporte a ES2021
      sourceType: 'module', // Para utilizar imports/exports
    },
    plugins: ['@typescript-eslint'], // Plugin para regras específicas do TypeScript
    extends: [
      'eslint:recommended', // Regras básicas recomendadas pelo ESLint
      'plugin:@typescript-eslint/recommended', // Regras recomendadas do @typescript-eslint
      'prettier', // Integração com Prettier para evitar conflitos de formatação
    ],
    rules: {
      'no-console': 'warn', // Aviso ao usar console.log (pode ajustar conforme o caso)
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Ignora variáveis começando com "_"
      '@typescript-eslint/no-explicit-any': 'warn', // Aviso para evitar uso de "any"
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Não requer retorno explícito em funções públicas
    },
  };
  