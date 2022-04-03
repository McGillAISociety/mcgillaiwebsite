# McGill AI Club Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/b40ad77b-c06a-4d10-ab9d-99d4e38c4f05/deploy-status)](https://app.netlify.com/sites/mcgillai/deploys)

The code for the main website of the McGill Artificial Intelligence society. Made with ❤️ using [Next.js](https://nextjs.org/), [SCSS](https://sass-lang.com/), and [Netlify](https://www.netlify.com/).

The result of the hard work of many MAIS team members over the semesters: [Cheng Lin](https://cheng-lin.me/), [Claudia Leung](https://www.linkedin.com/in/claudiahleun), [Rosie Zhao](https://www.linkedin.com/in/rosieyzh/), [Raphaelle Tseng](https://raphaelletseng.github.io/mpreact/), and [Josh Katofsky](https://www.linkedin.com/in/josh-katofsky/).

## Structure

-   `/pages` automatically statically exports site routes based on the file names within, whose content corresponds to the React.js components in those files. I.e. `mais202.js` corresponds to the page at `mcgillai.com/mais202`, and its content is derived from the `MAIS202` React.js component which is default-exported from that file. The exceptions to this rule are the `_app.js` and `_document.js` which deal with shared rendering logic and shared metadata, respectively.
-   `/components` contains React.js components that are shared among the website.
-   `/styles` holds the SCSS styling for the applcation, done using the [CSS module style](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css) which scopes styling exactly to the page or component that it targets. Along these lines, the subdirectories in `/stlyes` mirror `/pages` and `/components`.
-   `/public` contains all site content.

## Running locally

You need to have [Node.js](https://nodejs.org/en/) and [Yarn](https://classic.yarnpkg.com/en/) installed to work on the site. After you `git clone` this repository, run `yarn install`. Then, to start the Next.js development server, run `yarn dev` and the site will be hosted locally with fast refresh at `http://localhost:3000`.

## Deployment

This site is continously deployed to our Netlify. This means that any new commits to `master` automatically trigger a production build. It is therefore super important to **do all non-trivial site work in a different branch** and then do a PR to `master` when it's ready. On top of this being a good dev practice, for every PR Netlify will automatically make a [deploy preview site](https://docs.netlify.com/site-deploys/deploy-previews/) at a temp URL for MAIS execs to preview and give feedback on. Then, when everything looks good and the PR is merged, the live site will be auto-built.
