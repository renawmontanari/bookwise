export async function getCategories() {
  const response = await fetch(
    "https://api.jsonbin.io/v3/b/686316378a456b7966b91aa6",
    {
      headers: {
        "X-Master-Key":
          "$2a$10$$2a$10$5mJ1V0Shf4UPJTlfw0uXbOiLdfkjcWqaze6pYDy5GzqtmOEjUeGD2",
      },
    }
  );

  const information = await response.json();

  return information.record.books;
}
