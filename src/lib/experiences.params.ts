import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'ai-engineer-moj',
		company: 'Moj Houshmand Fan Avarihaye Navid',
		description: `
			<ul>
				<li>Developed real-time video analysis pipelines using YOLO for detection and DeepSORT/BoT-SORT for robust multi-object tracking.</li>
				<li>Fine-tuned Vision Transformer (ViT) and CNN backbones as powerful feature extractors for person Re-Identification and facial recognition systems.</li>
				<li>Engineered agentic LLM workflows using native tool-calling to automate complex tasks and interact with external APIs.</li>
				<li>Built internal testing tools and simple UIs with FastAPI for the backend and React for the frontend, accelerating development cycles.</li>
			</ul>
		`,
		contract: ContractType.FullTime,
		type: 'AI Engineering',
		location: 'Esfahan, Iran',
		period: { from: new Date(2024, 0, 1) }, // Jan 2024 - Present
		skills: getSkills('python', 'computer-vision', 'llms', 'yolo', 'fastapi', 'reactjs', 'docker'),
		name: 'AI Engineer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Developing and deploying CV and LLM solutions.'
	},
	{
		slug: 'ai-engineer-nilooapp',
		company: 'NilooApp',
		description: `
			<ul>
				<li>Engineered and evaluated deep learning models, including ResNet and Vision Transformers (ViT), for high-accuracy plant species classification.</li>
				<li>Collected and curated a 40,000-image dataset, implementing robust data normalization and anomaly detection pipelines.</li>
				<li>Prepared and containerized models for production-level inference using TorchServe.</li>
			</ul>
		`,
		contract: ContractType.Internship,
		type: 'AI Engineering',
		location: 'Startup (Remote)',
		period: { from: new Date(2023, 6, 1), to: new Date(2023, 11, 31) }, // July 2023 to Dec 2023
		skills: getSkills('python', 'pytorch', 'docker', 'computer-vision'),
		name: 'AI Engineer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Focused on deep learning for computer vision.'
	}
];

export default MY_EXPERIENCES;