import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
    {
        slug: 'ai-engineer-moj',
        company: 'Moj Houshmand Fan Avarihaye Navid',
        description: 'Developed a real-time video analysis pipeline using YOLO, DeepSORT, and BoT-SORT. Fine-tuned ViT and CNN models as feature extractors for Re-ID and facial recognition. Engineered agentic LLM workflows and built internal testing tools with FastAPI and React.',
        contract: ContractType.FullTime,
        type: 'AI Engineering',
        location: 'Esfahan, Iran',
        period: { from: new Date(2024, 0, 1) }, // Year 2024, Month 0 (January)
        skills: getSkills('ts', 'reactjs', 'python', 'docker'), // Use skill slugs from skills.params.ts
        name: 'AI Engineer',
        color: 'blue',
        links: [],
        logo: Assets.Unknown, // You can add a logo in data/assets.ts if you want
        shortDescription: 'AI Engineer focused on CV and LLMs.'
    },
    {
        slug: 'ai-engineer-nilooapp',
        company: 'NilooApp',
        description: 'Engineered and evaluated deep learning models, including ResNet and Vision Transformers (ViT), for plant species classification. Curated a 40,000-image dataset and deployed models using TorchServe.',
        contract: ContractType.FullTime,
        type: 'AI Engineering',
        location: 'Startup (Remote)',
        period: { from: new Date(2023, 6, 1), to: new Date(2023, 11, 31) }, // July 2023 to Dec 2023
        skills: getSkills('python', 'docker'), // Add relevant skill slugs
        name: 'AI Engineer',
        color: 'green',
        links: [],
        logo: Assets.Unknown,
        shortDescription: 'AI Engineer focused on Computer Vision.'
    }
];

export default MY_EXPERIENCES;