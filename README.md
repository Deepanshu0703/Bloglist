[![Netlify Status](https://blogslist.netlify.app/)](https://blogslist.netlify.app/)
### Running a local copy of the app

- Clone the repo

  ```bash
  git clone https://github.com/Deepanshu0703/Bloglist
  cd Bloglist
  ```

- Install the dependencies

  ```bash
  npm install
  ```

- Start a development server

  ```bash
  npm start
  ```

- Build for production
  ```bash
  yarn build
  ```
  `or`
  ```bash
  npm run build
  ```

### Used the api of [(https://jsonplaceholder.typicode.com/)](https://jsonplaceholder.typicode.com/posts)

In which All HTTP methods are supported. You can use http or https for your requests.

GET	/posts
GET	/posts/1
GET	/posts/1/comments
GET	/comments?postId=1
POST	/posts
PUT	/posts/1
PATCH	/posts/1
DELETE	/posts/1

### Deploying the app

- After building the project, deploy the files inside the newly created `build` dir to your server/container/whatever, or use a service like [Netlify](netlify.com) to take advantage of the automatic build/deploy process.
