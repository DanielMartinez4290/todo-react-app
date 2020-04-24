export const ListGuitars = `
  query ListGuitars {
    listTodos{
      items {
        id,
        name,
        description,
        targetCompletionDate,
        completionDate,
        completed
      }
    }
  }
`;

export const ListGuitarsByCategory = `
  query ListGuitars {
    listGuitars(filter: {
      category: {
        contains: "Fender"
      }
    }, limit: 6)
    {
      items {
        id,
        name,
        slug,
        url,
        price,
        category
      }
    }
  }
`;

export const CreateProduct = `
mutation CreateProduct(
    $name: String!
    $slug: String!
    $url: String!
    $price: Float!
    $category: String!
) {
  createGuitar(input:{
  name: $name,
  slug: $slug,
  url: $url,
  price: $price,
  category: $category
}) {
  id
  name
  slug
  url
  price
  category
}
}`;

export const GetProduct = `
query GetGuitar($id: ID!) {
  getGuitar(id: $id) {
    id,
    name,
    slug,
    url,
    price,
    category
  }
}
`;

export const GetProductByName = `
query GetGuitarByName($slug: String!) {
  getGuitarByName(slug: $slug) {
    id,
    name,
    slug,
    url,
    price,
    category
  }
}
`;