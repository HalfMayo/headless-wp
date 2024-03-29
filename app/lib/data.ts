export async function getRecent() {
    try{
    const query = `
    {
      posts(where: {categoryNotIn: "5"}, first: 5) {
        nodes {
          date
          title
          excerpt
          uri
          content
          author {
            node {
              avatar {
                url
              }
              lastName
              firstName
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
          comments {
            nodes {
              id
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
      `;
  
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}?query=${encodeURIComponent(
        query
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: 0,
        },
      }
    );
  
    const { data } = await res.json();
  
    return data?.posts?.nodes;
} catch(error) {
    console.log(error)
    throw new Error('Failed to fetch')
}
  }

export async function getPost(uri:string) {
    const query = `
    query GetPostByUri($uri: ID!) {
      post(id: $uri, idType: URI) {
        title
        content
        date
        excerpt
        author {
          node {
            firstName
            lastName
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
        `;
  
    const variables = {
      uri,
    };
  
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 0,
      },
      body: JSON.stringify({ query, variables }),
    });
  
    const responseBody = await res.json();
  
    if (responseBody && responseBody.data && responseBody.data.post) {
      return responseBody.data.post;
    } else {
      throw new Error("Failed to fetch the post");
    }
  }

  export async function getIGPosts() {
    try{
    const query = `
    {
      posts(where: {categoryName: "Instagram"}) {
        nodes {
          uri
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
      `;
  
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}?query=${encodeURIComponent(
        query
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: 0,
        },
      }
    );
  
    const { data } = await res.json();
  
    return data?.posts?.nodes;
} catch(error) {
    console.log(error)
    throw new Error('Failed to fetch')
}
  }

  export async function getEpisodes(displayed:number) {
    try{
    const query = `
    {
      posts(where: {categoryName: "Episodes"}, first: ${displayed}) {
        nodes {
          date
          excerpt
          title
          uri
          author {
            node {
              avatar {
                url
              }
              lastName
              firstName
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
      `;
  
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}?query=${encodeURIComponent(
        query
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: 0,
        },
      }
    );
  
    const { data } = await res.json();
  
    return data?.posts?.nodes;
} catch(error) {
    console.log(error)
    throw new Error('Failed to fetch')
}
  }

  export async function getTotalCount(category:string) {
    try{
    const query = `
    {
      posts(where: {categoryName: "${category}"}) {
        nodes {
          id
      }
    }
  }
      `;
  
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}?query=${encodeURIComponent(
        query
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: 0,
        },
      }
    );
  
    const { data } = await res.json();
    return data?.posts?.nodes;
} catch(error) {
    console.log(error)
    throw new Error('Failed to fetch')
}
  }

  export async function getReviews(displayed: number) {
    try{
    const query = `
    {
      posts(where: {categoryName: "Reviews"}, first: ${displayed}) {
        nodes {
          date
          excerpt
          title
          uri
          author {
            node {
              avatar {
                url
              }
              lastName
              firstName
            }
          }
          comments {
            nodes {
              id
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
      `;
  
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}?query=${encodeURIComponent(
        query
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: 0,
        },
      }
    );
  
    const { data } = await res.json();
  
    return data?.posts?.nodes;
} catch(error) {
    console.log(error)
    throw new Error('Failed to fetch')
}
  }

  export async function getAuthors() {
    try{
    const query = `
    {
      users {
        nodes {
          avatar {
            url
          }
          description
          firstName
          lastName
          name
        }
      }
    }
      `;
  
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}?query=${encodeURIComponent(
        query
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: 0,
        },
      }
    );
  
    const { data } = await res.json();
  
    return data?.users?.nodes;
} catch(error) {
    console.log(error)
    throw new Error('Failed to fetch')
}
  }

  export async function getPage(uri:string) {
    const query = `
    query GetPageByUri($uri: ID!) {
      page(id: $uri, idType: URI) {
        title
        content
      }
    }
        `;
  
    const variables = {
      uri,
    };
  
    const res = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 0,
      },
      body: JSON.stringify({ query, variables }),
    });
  
    const responseBody = await res.json();
  
    if (responseBody && responseBody.data && responseBody.data.page) {
      return responseBody.data.page;
    } else {
      throw new Error("Failed to fetch the page");
    }
  }