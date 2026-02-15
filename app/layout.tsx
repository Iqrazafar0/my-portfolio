import "./globals.css";

export const metadata = {
  title: "Iqra Zafar | Portfolio",
  description: "Full-Stack Developer & Automation Strategist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  );
}