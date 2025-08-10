import { MY_EDUCATIONS } from './educations.params';
import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams,
	type EducationPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Resume';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills',
	Education: 'Education'
};
const description = `Versatile and results-driven AI Engineer with specialized expertise in both Computer Vision and Large Language Models (LLMs). Proven ability to design and deploy end-to-end intelligent systems, from real-time video analysis to advanced generative AI agents.`;


export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
	}
};

export const HOME: HomePageParams = {
    title: 'Home',
    name: 'Mohammad Reza', // Your first name
    lastName: 'Abasian',   // Your last name
    description: description,
    description1: `I am passionate about building practical, scalable solutions that solve complex, real-world challenges using cutting-edge AI.`, // A shorter second line
    links: [
        // UPDATE THESE LINKS
        { platform: Platform.GitHub, link: 'https://github.com/drmohamad1' }, 
        { platform: Platform.Email, link: 'Mohamad42912@gmail.com' } // Your email
        // You can remove or add platforms like Twitter
    ]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Resume',
	item: 'https://drive.google.com/file/d/19TyQB26vyW4jjXmPoxPk3fW07-UaJHU3/view'
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};

export const EDUCATION: EducationPageParams = {
	items: MY_EDUCATIONS,
	title: 'Education'
};
