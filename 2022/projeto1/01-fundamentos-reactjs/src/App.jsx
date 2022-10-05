import { Header } from './components/Header'
import { Post } from './components/Post'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/jordaomoraes.png',
      name: 'Guilherme Jordão',
      role: 'Desenvolvedor FullStack'
    },
    content: [

      { type: 'paragraph', content: 'Fala Galera' },
      { type: 'paragraph', content: 'Acabou de sair mais um projeto para o meu portifólio' },
      { type: 'link', content: 'www.google.com' },
    ],
    publishedAt: new Date('2022-10-04 20:10')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'Professor'
    },
    content: [

      { type: 'paragraph', content: 'Fala Dev' },
      { type: 'paragraph', content: 'Essa semana começa um novo projeto no NLW' },
      { type: 'link', content: 'www.rocketseat.com' },
    ],
    publishedAt: new Date('2022-10-05 07:55:00')
  }
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />
        <main>

          {posts.map(post => {

            return (
              <Post

              author= {post.author}
              content = {post.content}
              publishedAt = {post.publishedAt}

              />)
          })}

        </main>
      </div>
    </>
  )
}

