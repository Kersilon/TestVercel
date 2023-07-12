import styles from "./homepage.module.css"

export default function index() {
  return (
    <div className={styles.body}>
      <div className={styles.upperHalf}>
        <div className="formContainer">
          <form className="form" action="">
            <input type="text" placeholder="Username" />
            <input type="text"  placeholder="Password"/>
            <button className='button' href="">login</button>
          </form>
        </div>
        <p className={styles.betweenText}><strong className={styles.boldText}>--oppure--</strong>crea un nuovo account</p>
      </div>
      <div className={styles.links}>
          <a className="button" href="/Registration"><p>Standard user</p></a>
          <a className="button" href="/Registration"><p>Enterprise manager</p></a>
      </div>
    </div>
      /*<div className={styles.container}>
          <div className={styles.item}>
            <h1 className={styles.title}>
              Queue&Go
            </h1>
            <p className={styles.desc}>
              Benvenuto nella homepage!
            </p>
            <Button url="/login" text="Crea una fila" />
          </div>
          <div className={styles.item}>
            <Image src={Logo} alt="Logo" className={styles.img}></Image>
          </div>
      </div>*/
  )
}