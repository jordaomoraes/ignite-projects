import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1563985290179-00555271ccdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=50" alt="" />
            <div className={styles.profile}>

                <img className={styles.avatar} src="https://github.com/jordaomoraes.png" />
                <strong>Guilherme Jordão</strong>
                <span>FullStack Developer</span>
            </div>

            <footer>

                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}
