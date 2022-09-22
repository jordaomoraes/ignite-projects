import { Header } from './components/Header'
import { Post } from './components/Post'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>

       <Sidebar />
        <main>
          <Post
            autor="Guilherme Jordão"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae corrupti vero porro error expedita nihil veniam praesentium quibusdam iusto a! Et minus quo autem recusandae veritatis vero dicta ducimus rerum."
          />

          <Post
            autor="Fernanda"
            content="Lorem ipsum dolor sit amet conseccorrupti vero porro error expedita nihil veniam praesentium quibusdam iusto a! Et minus quo autem recusandae veritatis vero dicta ducimus rerum."
          />
        </main>
      </div>
    </>
  )
}

