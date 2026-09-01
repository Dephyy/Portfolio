export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="bg-atmosphere" />
        <div className="bg-grain" />
        <div className="bg-fog" />
        {children}
      </body>
    </html>
  );
}
