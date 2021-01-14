import { Meta, Scripts, Styles, Routes, useGlobalData } from "@remix-run/react";

export default function App() {
  let data = useGlobalData();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/_static/favicon.ico" type="image/x-icon" />
        <Meta />
        <Styles />
      </head>
      <body>
        <Routes />
        <Scripts />
        <footer>
          <p>This page was rendered at {data.date.toLocaleString()}</p>
        </footer>
      </body>
    </html>
  );
}
