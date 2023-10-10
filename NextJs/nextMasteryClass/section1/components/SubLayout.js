import style from './SubLayout.module.css'

export default function SubLayout({ children }) {
  return (
      <div>
        <div>{children}</div>
        <footer className={style.footer}>@ragnar</footer>
      </div>
  )
};
