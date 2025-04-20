function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Meu Benho</h1>
      <p style={styles.poem}>
        Você é o amor da minha vida.<br />
        Eu não posso te deixar.<br />
        Você é como a brisa da manhã,<br />
        Numa noite de luar.<br />
      </p>
      <h1 style={styles.title}>❤️ Lhe Asmo! ❤️</h1>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#fff0f5',
    fontFamily: 'Georgia, serif',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    color: '#8b0000',
    textAlign: 'center'
  },
  title: {
    fontSize: '2.5rem',
    margin: '1rem 0',
  },
  poem: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    backgroundColor: '#ffe4e1',
    padding: '20px',
    borderRadius: '12px',
    maxWidth: '600px',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
  }
};

export default Home;
// Atualizar comentários depois... This is a simple Next.js page component that renders a welcome message.
// It uses a functional component and exports it as the default export.
// The component returns a div containing an h1 header and a paragraph.
// The h1 header displays "Welcome to My Next.js App" and the paragraph provides a brief description of the application.