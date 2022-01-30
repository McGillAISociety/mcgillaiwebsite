# McGill AI Club Website

The code for the main website of the McGill Artificial Intelligence society. Made with ❤️ using [Next.js](https://nextjs.org/) and [SCSS](https://sass-lang.com/).

The result of the hard work of many MAIS team members over the semesters: [Cheng Lin](https://cheng-lin.me/), [Claudia Leung](https://www.linkedin.com/in/claudiahleun), [Rosie Zhao](https://www.linkedin.com/in/rosieyzh/), [Raphaelle Tseng](https://raphaelletseng.github.io/mpreact/), and [Josh Katofsky](https://www.linkedin.com/in/josh-katofsky/).

## Structure

-   `/pages` automatically statically exports site routes based on the file names within, whose content corresponds to the React.js components in those files. I.e. `mais202.js` corresponds to the page at `mcgillai.com/mais202`, and its content is derived from the `MAIS202` React.js component which is default-exported from that file. The exceptions to this rule are the `_app.js` and `_document.js` which deal with shared rendering logic and shared metadata, respectively.
-   `/components` contains React.js components that are shared among the website.
-   `/styles` holds the SCSS styling for the applcation, done using the [CSS module style](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css) which scopes styling exactly to the page or component that it targets. Along these lines, the subdirectories in `/stlyes` mirror `/pages` and `/components`.
-   `/public` contains all site content.

## Running locally

You need to have [Node.js](https://nodejs.org/en/) and [Yarn](https://classic.yarnpkg.com/en/) installed to work on the site. After you `git clone` this repository, run `yarn install`. Then, to start the Next.js development server, run `yarn dev` and the site will be hosted locally with fast refresh at `http://localhost:3000`.

## Deploying

This is subject to change soon, as it's worthwhile (in Josh's humble opinon) to change eventually from AWS to something more purpose-built for front-end projects (something like GitHub pages, Netlify, or Vercel). However, the site is currently served from an AWS bucket, so that's what these instructions pertain to.

### AWS Setup

You have to setup the AWS CLI on your machine to deploy the site. You'll only have to do this once.

1.  Install the AWS command line interface (CLI) [here](https://docs.aws.amazon.com/cli/v1/userguide/cli-chap-install.html) (version 1 should suffice).
2.  Follow the [configuration basics](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html) guide on the AWS docs. Our default region name is `us-west-2` and the default output format is JSON.

### Deployment Process

To make sure that Next.js can properly output the static site for hosting on a CDN and that everything is bug-free, simulate a production environemnt using `yarn serve`, which will build the site into `/out` and host it with a local server.

When you're ready, run `yarn deploy` to deploy the site.
