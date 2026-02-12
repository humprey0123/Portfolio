// 11 Build an Email Masker
const email = "apple.pie@example.com";

function maskEmail(email) {
  const value = email.indexOf("@");
  const midChars = email.slice(1, value - 1);
  const replace = email.replace(midChars, "*".repeat(value - 2));
  
  return replace
}

console.log(maskEmail(email));