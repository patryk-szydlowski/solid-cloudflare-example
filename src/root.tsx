// @refresh reload
import { Suspense } from "solid-js";
import { Routes } from "solid-start/data";
import { ErrorBoundary } from "solid-start/error-boundary";
import { FileRoutes, Links, Meta, Scripts } from "solid-start/root";

import { ThemeProvider } from "~/design-system/theme-provider";

export default () => (
  <html lang="en">
    <head>
      <meta charset="utf8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <Meta />
      <Links />
    </head>
    <body>
      <ThemeProvider>
        <ErrorBoundary>
          <Suspense>
            <Routes>
              <FileRoutes />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </ThemeProvider>
      <Scripts />
    </body>
  </html>
);
