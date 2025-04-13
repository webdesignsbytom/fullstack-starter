# Email

These DNS records tell receiving mail servers that your emails are legitimate and authorized by your domain.

1. SPF (Sender Policy Framework): Specifies which mail servers are allowed to send email on behalf of your domain.

2. DKIM (DomainKeys Identified Mail): Adds a digital signature to your emails so the receiving server can verify they haven't been tampered with.

3. DMARC (Domain-based Message Authentication, Reporting, and Conformance): Tells receiving servers how to handle messages that fail SPF/DKIM checks.

## How to verify email address

1. Google Postmaster

- Add your sending domain to Postmaster Tools
- Sign in to Postmaster Tools.
- In the bottom right, click Add Add.
- In the Getting started window, enter the domain used to authenticate your outgoing email with SPF, or DKIM, or both. If you use different domains for SPF and DKIM authentication, you only need to enter one of these domains.
- Click Next to open the Verify your domain window.