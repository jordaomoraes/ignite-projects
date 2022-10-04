import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/jordaomoraes.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>

          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme Jordão</strong>
              <time title="11 de maio as 02:00" dateTime='2022-05-08 02:00:12'> Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom dev, Parabens</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
          Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
