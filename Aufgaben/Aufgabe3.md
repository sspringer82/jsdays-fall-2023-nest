# Aufgabe 4 - Datenbank

1. Datenbank Installation `npm install @nestjs/typeorm typeorm sql.js`
2. Datenbankkonfiguration im `app.module.ts` TypeORMModule.forRoot
3. Integration in das `books.module.ts` TypeORMModule.forFeature
4. Entitätsklasse definieren
5. Dependency Injection in den BooksService mit dem Repository
6. Mit der Datenbank reden im Service
   1. Read all - find
   2. read one - findOneBy
   3. create - save
   4. update - save
   5. delete - findone + remove(book)