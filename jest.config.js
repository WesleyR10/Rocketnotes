module.exports - {
  bail: true, // Se ocorrer um erro, os testes param para eu resolver o erro 
  coverageProvider: "v8",

  testMatch: [
    "<rootDir>/src/**/*.spec.js" // Dentro de src, qualquer pasta, qualquer nome, que tenha .spec.js
  ],

}