export const API = {
  getUsers: async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
      return response.json()
    } catch (e) {
      console.log(e)
      throw e
    }
  },
  getCurrentUser: async id => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      return response.json()
    } catch (e) {
      console.log(e)
      throw e
    }
  },
  getPosts: async userId => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      return response.json()
    } catch (e) {
      console.log(e)
      throw e
    }
  },
  getCurrentPost: async id => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      return response.json()
    } catch (e) {
      console.log(e)
      throw e
    }
  },
  getComments: async postId => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      return response.json()
    } catch (e) {
      console.log(e)
      throw e
    }
  },
  sendComment: async comment => {
    try {
      return await fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    } catch (e) {
      console.log(e)
      throw e
    }
  },
}
