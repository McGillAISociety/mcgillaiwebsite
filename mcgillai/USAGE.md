# McGill AI Club Website Documentation

Updated January 4, 2021

## General Navigation
The `src` folder is pretty straightforward to navigate; all of the pages can be found in `src/components`. This website uses styled components from [Emotion](https://emotion.sh/docs/styled), and I recommend reading their website to get more familiar with what you can do with CSS in JS.

## Website Updates

There are several things on the website that need to be updated every year or a few times in the semester. Here's how to navigate to them:

### Landing Page
- **Subscriber Form**: Go to `src/components/home/landing.js` and update the href link in the `<SubscribeButton>` tag.
- **The McGill AI Community Stats**: The original SVG file is in the Google Drive folder, under `Communication/Outreach -> 2020-2021 -> Website -> svg` and the file in the website repo is in `src/components/home/assets`. The text in `grid.svg` is not editable because the Montserrat font doesn't display properly on certain browsers (gotta have that cross-browser support) and I traced over the original text. Everything in the Google Drive is editable! Of course, feel free to change/update however you like, and update the `stats.js` file.
- **Activities Photo Grid**: Images in `src/components/home/activities-img`, code in `src/components/home/activities.js`. We can update these, I would save the hassle of trying to make the grid properly responsive by making the images square before uploading to the folder!
- **Schedule**: You will probably be updating this multiple times during the semester. It is not dynamic (oops), but you are more than welcome to change it! To update the schedule, navigate to `src/components/home/timelinedata.js` and update the constant `TimelineData` with the list of dict items for each event in the order that you want it to appear on the website. The formatting of each event item is as follows:
```
{
	title: 'MAIS 202 Winter 2021 Applications',
	time: 'January 15 | 11:59 PM EST',
	place: 'Online!',
	category: '/schedule-icons/mais202.svg'
}
```
The `category` field specifies the icon that appears on the timeline, which can be found in `public/schedule-icons`. Feel free to add more icons of course!

- **Sponsors**: Update the `src/components/home/sponsorlogos.js` file. The `<LogoRow>` tag specifies the rows for each sponsor (eg. TPU, GPU, CPU for instance) and `Logo` is basically the image tag. Include sponsor logo images in the `sponsors-img` folder.

---

### Our Team
Update the `src/components/execs/exec-profile.js` file with the new team of execs. The exec photos can be found in `public/exec-img`, but are preformatted with the crop and border. The "email" field for each exec is not currently being used.

---

### MAIS 202
- **Landing and Gallery**: The text at the top of the MAIS 202 page can be found at `src/components/mais202/landing.js`. Feel free to update the gallery in `src/components/mais202/gallery.js`. The React Gallery component is pretty janky and there are probably better implementations out there. The gallery photos are imported from the `assets` folder. 
- **Statistics**: SVGs are found in the same location as the SVG on the home page, and implemented the same way.
- **FAQ**: Update the questions and answers in the `src/components/mais202/faq.js` file. **would be nice to implement an accordion-style FAQ

---

### Navbar
- If you want to add an entry into the nav bar, go to `src/components/navbar/navbar.js` and add a new `<Nav.Link>` tag formatted as
```
<Nav.Link><Link to='/ourteam'><Navbar.Text className='navtext' onClick={this.clickedNav}>Our Team</Navbar.Text></Link></Nav.Link>
```
where you only need to change the text and the `Link to=` field (it should work as long as you have imported the component in `App.js` and added a new `<Route>` tag to the `Switch`.

- For adding external links to the navbar (like our blog), use the `<BlogLink>` tag instead. The vertical spacing of external links were off compared to links to components, and this is a janky fix.

## Styles
If you're adding pages/features to the site and want to replicate some of the existing styles, the `src/components/commonstyles.js` file has some style constants that you can import into your code like
```
import { 
	HeadingUnderline,
	SectionBase,
	Question,
	Answer
 } from '../commonstyles.js';
 ...
 
const Container = styled('div')`
	${SectionBase};
	padding-left: 70px;
	padding-bottom: 0;
`;
//or 
...

<HeadingUnderline>ABOUT MAIS202</HeadingUnderline>
```

---

If you have any more questions about the website, don't hesitate to reach out to me (Rosie Zhao)!