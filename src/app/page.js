import List from './components/List';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="nav">
            <h1> Я супер</h1>
            <nav className="links">
              <Link href="/" className="active">Главная</Link>
              <Link href="/contact">Контакты</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <section>
            <List />
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="copyright">
            <p>© 2025 Я супер</p>
          </div>
        </div>
      </footer>
    </div>
  );
}