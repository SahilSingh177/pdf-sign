import { NEXT_PUBLIC_WEBAPP_URL } from "../constants";
import { baseEmailTemplate } from "./baseTemplate";

export const signingCompleteTemplate = (message: string) => {
  const customContent = `
  <p style="margin-top: 14px;">
    A copy of the signed document has been attached to this email.
  </p>
  </p>`;

  const html = baseEmailTemplate(message, customContent);

  return html;
};

export default signingCompleteTemplate;
