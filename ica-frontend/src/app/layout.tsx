import './globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'App Rentas',
  description: 'La App Rentas es un centralizador de procesos por módulos para distintos equipos de trabajo de una oficina, en el que logra disminuir la dispersión de herramientas para cada funcionario, mejorando su productividad y la calidad de los datos que se almacenan en las bases de datos relacionales',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
      
