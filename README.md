# Проект: Test for Intelogis

## Стек

![HTML5](https://img.shields.io/badge/-HTML5-4A4A4A?style=for-the-badge&logo=HTML5&logoColor=FF7600)
![CSS3](https://img.shields.io/badge/-CSS3-4A4A4A?style=for-the-badge&logo=CSS3&logoColor=5871CD)
![SASS](https://img.shields.io/badge/-Sass-4A4A4A?style=for-the-badge&logo=SASS&logoColor=EF9AEB)
![JavaScript](https://img.shields.io/badge/-JavaScript-4A4A4A?style=for-the-badge&logo=JavaScript&logoColor=FFE300)
![TypeScript](https://img.shields.io/badge/-TypeScript-4A4A4A?style=for-the-badge&logo=TypeScript&logoColor=4895DB)
![React](https://img.shields.io/badge/-React-4A4A4A?style=for-the-badge&logo=React&logoColor=73C6E5)
![ReduxToolkit](https://img.shields.io/badge/-ReduxToolkit-4A4A4A?style=for-the-badge&logo=Redux&logoColor=4B0082)
![Leaflet](https://img.shields.io/badge/-Leaflet-4A4A4A?style=for-the-badge&logo=Leaflet&logoColor=00FF7F)
![ReduxSaga](https://img.shields.io/badge/-ReduxSaga-4A4A4A?style=for-the-badge&logo=ReduxSaga&logoColor=C0C0C0)

### Обзор

- Интро
- Запуск проекта
- GitHub
- Технологии применяемые в проекте
- Функционал

**Интро**

Тестовое задание для компании Intelogis. Приложение по отображению заявок на перевозку на карте.

**Запуск проекта**

`npm run start` — запускает проект

**GitHub**

- [Ссылка на проект в GitHubPages](https://azizjp.github.io/test-intelogis/)

**Технологии применяемые в проекте**

В проекте применяются:

- Проект написан на React.js
- Типизация с помощью TypeScript
- Язык для структурирования и представления содержимого - HTML5
- Расширение CSS3 - Sass
- Для хранения стейта компонентов и данных использован Redux Toolkit
- Для реализации некоторых компонентов был применен Ant Design
- Для отображения карты использован пакет Leaflet
- Для реакции на события - React Saga

**Функционал**

- В приложении реализована таблица заявок и карта
- При выборе заявки в таблице:
  - строка подсвечивается
  - на карте отображаются точки погрузки и разгрузки заявки, и полилиния трека движения между ними
  - происходит масштабирование карты, для полного отображения маршрута в области ее видимости
- На карте отображается лишь один маршрут