import { CategoriesResponse } from "./interfaces";


export const getAllCategories = async ():Promise<CategoriesResponse> => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Basic d2ViYXBwQWRtaW46aXRnOChwVzB3OUdFRUBrYjIzZQ=='
    },
    next: {
      revalidate: 60,
    },
    body: '{"query":"query MyQuery2 {\\n  catalogCategories(where: {parent: 0}) {\\n    nodes {\\n      name\\n      slug\\n      uri\\n      id\\n      parentId\\n      parentDatabaseId\\n      children {\\n        nodes {\\n          name\\n          slug\\n          link\\n        }\\n      }\\n    }\\n  }\\n}","operationName":"MyQuery2"}'
  };

  
  const response = await fetch('https://wp.webappcatalog.in/graphql', options);
  const responseData = await response.json();

  return responseData.data.catalogCategories
};