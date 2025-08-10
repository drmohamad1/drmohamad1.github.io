import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
    {
        degree: "Master's in Computer Science – Systems Theory",
        description: '',
        location: 'Iran',
        logo: Assets.Unknown,
        name: '',
        organization: 'University of Allameh',
        period: { from: new Date(2022, 8, 1) }, // September 2022 - Present
        shortDescription: '',
        slug: 'master-degree',
        subjects: ['LLMs', 'Agentic Systems', 'Computer Vision', 'RAG']
    },
    {
        degree: "Bachelor's in Computer Science",
        description: '',
        location: 'Iran',
        logo: Assets.Unknown,
        name: '',
        organization: 'Kashan University',
        period: { from: new Date(2016, 8, 1), to: new Date(2021, 5, 1) }, // Sep 2016 - June 2021
        shortDescription: '',
        slug: 'bachelor-degree',
        subjects: ['Data Structures', 'Algorithms', 'Python', 'Machine Learning Foundations']
    }
];