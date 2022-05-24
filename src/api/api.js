export const API = {
  getUsers: async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
      return response.json()
    } catch (e) {
      return e
    }
  },
  getPosts: async userId => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      return response.json()
    } catch (e) {
      return e
    }
  },
  getComments: async postId => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      return response.json()
    } catch (e) {
      return e
    }
  },
  sentComment: async comment => {
    try {
      return await fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    } catch (e) {
      throw e
    }
  },
}
