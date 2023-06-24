import './globals.css'

export const metadata = {
  title: 'Calculadora de ip',
  description: 'Uma calculadora de ip',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h5>Autores: Eder Amorim & Erick Amorim - Geminys Enterprises</h5>
        </header>
        {children}
      </body>
    </html>
  )
}
