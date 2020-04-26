# Funcshui

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/maxmckenzie/funcshui/test?style=flat-square)
![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/maxmckenzie/funcshui?style=flat-square)

https://funcshui.now.sh/

Funcshui is a collection of deploy ready serverless functions for use with platforms like Zeit, GCP, Digital Ocean or AWS. They provide a clean tested set of node functions for multiple use cases.

This library has been built to work with Zeit. You can deploy a demo version of it with the button below.

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/maxmckenzie/funcshui/tree/master)

## Features

- Endpoint testing: using Ava and supertest
- Deploy to Vercel button: Deploy your own ready to use version and add your environment variables

## Limitations
on the free tier of Vercel (Zeit) serverless functions are restricted to a time of 10s, So you will have to take this into account, as long complex features will run into this as an issue

## Do's and Dont's

- lowercase only folder and file names (these are used directly in the API url path so dont camelCase things).
- Each subdirectory of functions should contain a `subdirectory.md` file with verbose documentation of this directory.
- Each file (function) shold have a test `myFunction.spec.js`
- When creating a new function each use case should be added as a `test.todo('')`
- Dont worry if a spec remains a todo
- Do not prepend `It shoud to the test` just write a sensible human readble description of what the user should expect
- Shorten use case titles: Ava includes the directory and file that is being called in the test, so you dont need to be that descriptive to make it clear what is going on. As we are using the folder strcture as the paths. Do however include the HTTTP verb

yes
```
- sendgrid › send-email › POST one to one
- sendgrid › send-email › POST one to many
```

no
```
- sendgrid › send-email › send single email to single recipient
- sendgrid › send-email › send single email to multiple recipients
```

# ToDo

- Calculations alias and path `calc` - Mortgage
- Calculations alias and path `calc` - Mortgage with percentage change
- Mailchimp - Subscribe user
- Mailchimp - unsubscribe user
- Stripe - pay with card
- Stripe - create subscriber
- Stripe - cancel subscriber
- Stripe - get customer
- Stripe - get subscriptions
- Stripe - get invoices
- Mailgun - Sendmail
- SendGrid - Sendmail
- Moonmail - Sendmail
- Moonmail - Subscribe
- Moonmail - unsubscribe
- Slack - Send Message
- Google Chat - Send Message
- Matix - Send Message

## ToDo Documentation

- Environment Variables
- Calling the endpoints from your frontend app
- Function Request process
- Per Fucntion Docs
- Reference

Additional possible platforms templates
- Xero
- Holded
- Quickbooks

Additional possible features
- funcshui.conf.js for API url definitions

### Sources
https://vercel.com/docs/runtimes#official-runtimes/node-js