# Pomodoro + Task Manager

Este projeto surgiu como parte do meu processo de aprendizado em React.  
A ideia foi construir uma aplicação simples, mas completa o suficiente para exercitar conceitos importantes de desenvolvimento front-end.

A aplicação combina duas coisas que eu realmente uso no dia a dia de estudo:

- um temporizador baseado na técnica Pomodoro
- uma lista de tarefas simples para organizar o que precisa ser feito

Mais do que o resultado final, o objetivo foi praticar a forma de pensar em **componentes, estado e organização de código em React**.

---
## Demonstração

![Interface do Pomodoro](./src/assets/projeto-screenshot.png)
---

## O que a aplicação faz

### Pomodoro

O temporizador possui três modos:

- Focus (25 minutos)
- Short Break (5 minutos)
- Long Break (15 minutos)

O usuário pode:

- iniciar o timer
- pausar
- resetar o tempo
- alternar manualmente entre os modos

Além disso, a aplicação mantém um contador de sessões concluídas.

A interface também muda de cor dependendo do modo ativo, para dar um feedback visual mais claro.

---

### Lista de tarefas

A parte de tarefas é bem direta, mas cobre as operações principais de um pequeno gerenciador de tarefas:

- adicionar uma tarefa
- marcar como concluída
- remover tarefas

Cada tarefa é armazenada como um objeto com:

- id
- título
- estado de conclusão

O objetivo aqui foi praticar **manipulação de listas e atualização imutável de estado** no React.

---

## Estrutura do projeto
src  
│  
├── App.jsx  
│  
└── components  
├── Timer.jsx  
└── Tasks.jsx  


### App

Componente principal da aplicação.

Ele organiza a estrutura da página e renderiza:

- o temporizador
- a seção de tarefas

---

### Timer

Responsável por toda a lógica do Pomodoro:

- controle do tempo
- alternância entre modos
- contagem de sessões
- controle de start, pause e reset

A lógica de contagem regressiva foi implementada usando `useEffect` e `setInterval`.

---

### Tasks

Componente responsável pela lista de tarefas.

Ele controla:

- estado do input
- lista de tarefas
- adição, remoção e conclusão das tarefas

---

## Tecnologias utilizadas

- React
- JavaScript
- TailwindCSS
- Vite

---

## Como executar o projeto

Clone o repositório:

```bash
git clone <url-do-repositorio>
```
Entre na pasta do projeto:
```bash
cd pomodoro-app
```
Instale as dependências:
```bash
npm install
```
Execute o projeto:
```bash
npm run dev