import type ICategories from "@/interfaces/ICategories";

interface ApiResponse {
  record: {
    books: ICategories[];
  };
}

const BOOKS_URL = "https://api.jsonbin.io/v3/b/686316378a456b7966b91aa6";

export async function getCategories(): Promise<ICategories[]> {
  const masterKey = import.meta.env.VITE_XMASTER_KEY;

  if (!masterKey) {
    throw new Error(
      "VITE_XMASTER_KEY não definida. Copie o .env.example para .env e preencha a chave.",
    );
  }

  const response = await fetch(BOOKS_URL, {
    headers: {
      "X-Master-Key": masterKey,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Falha ao buscar os livros: ${response.status} ${response.statusText}`,
    );
  }

  const information: ApiResponse = await response.json();

  return information.record.books;
}
