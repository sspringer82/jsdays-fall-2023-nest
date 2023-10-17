# Aufgabe 2 - CRUD

Implementiere CRUD-Endpunkte für den Datentyp Book.

* create: POST /books
* read: GET /books + GET /books/id
* update: PUT /books/id
* delete: DELETE /books/id

Erzeuge ein Modul: `nest generate module books`
Erzeuge einen Controller: `nest generate controller books`
Erzeuge einen Service: `nest generate service books`

```ts
type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  pages: number;
  year: number;
}
```