import { Header } from './components/Header'
import { Post } from './Post'
import './global.css'

export function App() {
  return (
    <>
    <Header />
      <Post
        autor="Guilherme Jordão"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae corrupti vero porro error expedita nihil veniam praesentium quibusdam iusto a! Et minus quo autem recusandae veritatis vero dicta ducimus rerum." 
      />

      <Post
        autor="Fernanda"
        content="Lorem ipsum dolor sit amet conseccorrupti vero porro error expedita nihil veniam praesentium quibusdam iusto a! Et minus quo autem recusandae veritatis vero dicta ducimus rerum." 
      />
    </>
  )
}

