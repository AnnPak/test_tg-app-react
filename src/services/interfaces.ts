interface ChildNode {
  name: string;
  slug: string;
  link: string;
}

export type ParentNodes  = {
  name: string;
  slug: string;
  uri: string;
  id: string;
  parentId: null;
  parentDatabaseId: null;
  children: {
    nodes: ChildNode[];
  };
}

export interface CategoriesResponse {
  nodes: ParentNodes[];
}