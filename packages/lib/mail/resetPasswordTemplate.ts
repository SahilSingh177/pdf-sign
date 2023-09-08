import { NEXT_PUBLIC_WEBAPP_URL } from "../constants";

export const resetPasswordTemplate = (ctaLink: string, ctaLabel: string) => {
  const customContent = `
  <h2 style="margin-top: 36px; font-size: 24px; font-weight: bold;">Forgot your password?</h2>
  <p style="margin-top: 8px;">
    That's okay, it happens! Click the button below to reset your password.
  </p>
  
  <p style="margin: 30px 0px; text-align: center">
    <a href="${ctaLink}" style="background-color: #37f095; white-space: nowrap; color: white; border-color: transparent; border-width: 1px; border-radius: 0.375rem; font-size: 18px; padding-left: 16px; padding-right: 16px; padding-top: 10px; padding-bottom: 10px; text-decoration: none; margin-top: 4px; margin-bottom: 4px;">
      ${ctaLabel}
    </a>
  </p>`;

  const html = `
  <div style="background-color: #eaeaea; padding: 2%;">
    <div
        style="text-align:center; margin: auto; font-size: 14px; color: #353434; max-width: 500px; border-radius: 0.375rem; background: white; padding: 50px">
        ${customContent}
    </div>
</div>
    `;

  return html;
};

export default resetPasswordTemplate;
