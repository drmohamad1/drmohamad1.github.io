import Assets from './data/assets';
import type { Skill } from './types';

const s = (skill: Skill) => skill;

const MY_SKILLS = [
	s({
		slug: 'python',
		color: 'blue',
		description: 'Primary language for AI/ML development, data processing, and backend APIs.',
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'pytorch',
		color: 'orange',
		description: 'Core deep learning framework for building and training neural networks.',
		logo: Assets.Pytorch, // You can add a PyTorch logo to /static/logos later
		name: 'PyTorch'
	}),
	s({
		slug: 'huggingface',
		color: 'yellow',
		description: 'Utilizing the Transformers, Datasets, and Tokenizers libraries for NLP and LLM tasks.',
		logo: Assets.HuggingFace, // Add a Hugging Face logo later
		name: 'Hugging Face'
	}),
	s({
		slug: 'computer-vision',
		color: 'green',
		description: 'Concepts including object detection, tracking, Re-ID, and feature extraction.',
		logo: Assets.Unknown,
		name: 'Computer Vision'
	}),
	s({
		slug: 'llms',
		color: 'purple',
		description: 'Work with models like Gemma & Qwen, including RAG, agentic workflows, and function calling.',
		logo: Assets.Unknown,
		name: 'Large Language Models'
	}),
	s({
		slug: 'docker',
		color: 'cyan',
		description: 'Containerizing applications for consistent and reproducible deployments.',
		logo: Assets.Docker,
		name: 'Docker'
	}),
	s({
		slug: 'fastapi',
		color: 'teal',
		description: 'Building high-performance, asynchronous APIs for serving AI models.',
		logo: Assets.FastApi,
		name: 'FastAPI'
	}),
	s({
		slug: 'reactjs',
		color: 'lightblue',
		description: 'Creating simple user interfaces and dashboards for testing and demonstration.',
		logo: Assets.ReactJs,
		name: 'React'
	}),
	s({
		slug: 'yolo',
		color: 'red',
		description: 'Using YOLO models for real-time object detection and pose estimation.',
		logo: Assets.Unknown,
		name: 'YOLO Models'
	})
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> => {
	return MY_SKILLS.filter((it) => slugs.includes(it.slug));
};