import * as Sentry from '@sentry/react-native';

const routingInstrumentation = new Sentry.ReactNavigationV5Instrumentation();

export const sentryConfig = {
  dsn: 'https://dbaaaf9de8d04b0791b22eab95fb592e@o1076188.ingest.sentry.io/6077557',
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  debug: true,
  environment: 'production',
  autoSessionTracking: true,
  initialScope: {
    tags: {'my-tag': 'my value'},
    user: {id: '42', email: 'john.doe@example.com'},
  },
  integrations: [
    new Sentry.ReactNativeTracing({
      tracingOrigins: ['localhost', 'my-site-url.com', /^\//],
      routingInstrumentation,
      // ... other options
    }),
  ],
  tracesSampleRate: 1.0,
};
