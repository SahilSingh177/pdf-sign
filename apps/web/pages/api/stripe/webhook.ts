export const config = {
  api: { bodyParser: false },
};

export { webhookHandler as default } from "@insurahub/lib/stripe/handlers/webhook";
