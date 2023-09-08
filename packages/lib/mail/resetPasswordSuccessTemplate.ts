import { NEXT_PUBLIC_WEBAPP_URL } from "../constants";
import { User } from "@prisma/client";

export const resetPasswordSuccessTemplate = (user: User) => {
  return `
  <div style="background-color: #eaeaea; padding: 2%;">
    <div
        style="text-align:left; margin: auto; font-size: 14px; color: #353434; max-width: 500px; border-radius: 0.375rem; background: white; padding: 50px">
        <h2 style="text-align: left; margin-top: 20px; font-size: 24px; font-weight: bold">Password updated!</h2>
        
        <p style="margin-top: 15px">
            Hi ${user.name ? user.name : user.email},
        </p>

        <p style="margin-top: 15px">
            We've changed your password as you asked. You can now sign in with your new password.
        </p>
    </div>
    </div>
`;
};
export default resetPasswordSuccessTemplate;
