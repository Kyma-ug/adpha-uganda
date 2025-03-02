import React from 'react';

function EmailLink({ email, subject, body, children, style }) {
  const encodedSubject = encodeURIComponent(`${subject} (From ADPHA Website)`);
  const encodedBody = body ? encodeURIComponent(body) : '';
  const mailtoLink = `mailto:${email}?subject=${encodedSubject}${encodedBody ? `&body=${encodedBody}` : ''}`;

  return (
    <a href={mailtoLink} style={style}> {/* Apply the style prop */}
      {children || email}
    </a>
  );
}

export default EmailLink;