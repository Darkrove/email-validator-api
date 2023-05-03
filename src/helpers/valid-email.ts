export function validateEmail(email: string): boolean {
  // Regular expression for validating email addresses
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

  // Check if the email matches the regular expression
  if (emailRegex.test(email)) {
    return true; // Valid email address
  } else {
    return false; // Invalid email address
  }
}
