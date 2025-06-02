import { defineUserSignupFields } from 'wasp/server/auth';
import { z } from 'zod';

const googleDataSchema = z.object({
  profile: z.object({
    email: z.string(),
    name: z.string(),
  }),
});

export const getUserFields = defineUserSignupFields({
  email: (data: any) => {
    const googleData = googleDataSchema.parse(data);
    return googleData.profile.email;
  },
  username: (data: any) => {
    const googleData = googleDataSchema.parse(data);
    // Create a username from the email address (remove @domain.com part)
    const emailUsername = googleData.profile.email.split('@')[0];
    // Add a random suffix to ensure uniqueness
    const randomSuffix = Math.random().toString(36).substring(2, 7);
    return `${emailUsername}_${randomSuffix}`;
  }
})

export function config() {
  return {
    scopes: ['profile', 'email'],
  };
}
