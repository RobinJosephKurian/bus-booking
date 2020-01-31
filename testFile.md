Severity
: critical  (This can be enumerated as critical/high/medium/low and maybe 'new')

Rule Category 
: security (I don't think we can make this enumerated, else it won't be generically extensible)

Version
: version-1  (Just some version string)

Display Name
: Cloudfront HTML content should not be publicly accessible unless absolutely necessary.

Policy ID
: PacMan_cloudfront-check-for-unauthorized-html_version-1_Cloudfront_Unauthorized_HTML_Content_cloudfront

Policy Description
: Cloudfront HTML content should not be publicly accessible unless absolutely necessary.

Reason
: This section explains why this policy exists/what is the reason for it.  For example:
- One of the best ways to secure T-Mobile's public cloud footprint is to make it as small as possible, so we want content on Cloudfront to be publicly accessible only for public-facing websites. HTML content in particular can contain Javascript, which in turn may contain credentials or other confidential information.
- Here is a sample bullet point in the reason section
And here is a second bullet point with some italicized text.
- Here's a third point with bold text and then a link to CNN.

Procedures
: This section describes the methods that will be used to test compliance with the policy, and when those tests will be performed (e.g., the frequence of the test cycle).  For example:

Check to see if the Cloudfront content can be accessed via the public internet.

Work Instructions
: The Work Instructions are the most detailed part of the documentation hierarchy.  Essentially, this should be a pseudocode description of an algorithm.  For example:

Attempt to access the HTML content with an HTTP GET command via an Internet gateway.  If the HTTP response code is a 200-series the content violates the policy.

Resolution
: This section describes how to resolve a violation of this policy.  For example:

There are two options to resolve this violation:

Create an exemption for this violation.  Note that exemptions will generally only be approved for content associated with public-facing websites.

Change the Cloudfront configuration to make the data private. There are multiple ways to do this. See the AWS documentation  here.

Generic Key 1
: Generic Value 1.  All keys prior to this Generic Key 1 are required.  If any are not present, validation should fail.

Miscellaneous Key 2
: Miscellaneous Value 2.  Any number of additional keys and values are supported; they will become properties that support this Policy.
