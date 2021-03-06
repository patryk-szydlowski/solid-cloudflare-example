// @refresh reload
import { Suspense } from "solid-js";
import { Route, Routes } from "solid-start/data";
import { ErrorBoundary } from "solid-start/error-boundary";
import { Links, Meta, Scripts } from "solid-start/root";

export default () => (
  <html lang="en">
    <head>
      <meta charset="utf8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <Meta />
      <Links />
    </head>
    <body>
      <ErrorBoundary>
        <Suspense>
          <Routes>
            <Route element={<div>Hello world!</div>} path="/" />
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <Scripts />
    </body>
  </html>
);
