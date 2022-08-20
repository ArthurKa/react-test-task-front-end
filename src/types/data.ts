export interface GraphQLData {
  continents: Array<{
    name: string;
    countries: Array<{
      name: string;
      languages: Array<{
        name: string;
      }>;
    }>;
  }>;
}

export interface ListNode {
  name: string;
  children: ListNode[];
}
