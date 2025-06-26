
import "./globals.css";


export const metadata = {
  title: "UpCourse",
  description: "A plataforma de tecnologia que você precisa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
