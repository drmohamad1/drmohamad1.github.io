import Assets from "./data/assets";
import type { Skill } from "./types";
import svelte from "./md/svelte.md?raw";

const s = (skill: Skill) => skill;

enum skillType {
  "js",
  "ts",
  "css",
  "html",
  "sass",
  "reactjs",
  "reactnative",
  "expo",
  "electron",
  "android",
  "ios",
  "pwa",
  "debuggingTools",
  "xcode",
  "androidStudio",
  "cicd",
  "test",
  "svelte",
}
export type ArrayElementType<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
 s({
    slug: 'python',
    color: 'blue',
    description: 'My primary language for AI/ML development.',
    logo: Assets.Python, // Make sure Assets.Python is defined in data/assets.ts
    name: 'Python'
}),
s({
    slug: 'docker',
    color: 'blue',
    description: 'Containerizing applications for deployment.',
    logo: Assets.Docker, // Make sure Assets.Docker is defined
    name: 'Docker'
}),
];

export default MY_SKILLS;

export const getSkills = (
  ...slugs: Array<keyof typeof skillType>
): Array<Skill> => MY_SKILLS.filter((it) => slugs.includes(it.slug));
