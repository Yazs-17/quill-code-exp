import { PluginDriver } from 'everything-plugin';

// Instantiate a global plugin driver
export const appDriver = new PluginDriver();

// Optionally, define and export some context format for your app.
// The driver can provide dependency injection, lifecycle hooks, and cross-plugin interactions.
