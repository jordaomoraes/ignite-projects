import styles from './Post.module.css'

export function Post() {
    return (
      <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <img className={styles.avatar} src="https://github.com/jordaomoraes.png" alt="" />
                <div className={styles.authorInfo}>
                    <strong>Guilherme Jordão</strong>
                    <span>Web Developer</span>
                </div>
            </div>
            <time title="11 de maio as 02:00" dateTime='2022-05-08 02:00:12'> Publicado há 1h</time>
        </header>

        <div className={styles.content}>

            <p>Fala Galera</p>

            <p>Acabou de sair mais um projeto para o meu portifólio</p>

            <p> <a href=""> google.com</a></p>

            <p><a href="">#novoProjeto</a></p>
        </div>
      </article>
    );
}
