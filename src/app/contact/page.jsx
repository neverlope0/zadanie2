import Link from 'next/link';

export default function Contact() {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="nav">
            <h1>Я супер</h1>
            <nav className="links">
              <Link href="/">Главная</Link>
              <Link href="/contact" className="active">Контакты</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <section className="hero">
            <h2>Контакты</h2>
            <p>
              Свяжитесь с нами любым удобным способом. Мы всегда рады помочь вам!
            </p>
          </section>

          <section className="contact-content">
            <div className="contact-grid">
              <div className="contact-info">
                <h3>Наши контакты</h3>
                
                <div className="contact-item">
                  <strong>Телефон:</strong>
                  <span>+7 (999)99-99-99</span>
                </div>
                
                <div className="contact-item">
                  <strong>Email:</strong>
                  <span>rotRalena661@gmail.com</span>
                </div>
                
                <div className="contact-item">
                  <strong>Адрес:</strong>
                  <span>у. Пушкина д. Колатушкинв</span>
                </div>
                
            
              </div>

              
            </div>
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