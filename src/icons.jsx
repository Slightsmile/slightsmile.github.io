import {
  Code, Brain, Database, PaintBrush, Scan, Dna, ChatCircleText, GraphIcon, Robot, Wrench,
  Trophy, GitPullRequest, UsersThree, ScrollIcon, Star, EnvelopeSimple, WhatsappLogo,
  GithubLogo, LinkedinLogo, ArticleNyTimes, FigmaLogo, Layout, HardDrives, CloudArrowUp,
  FacebookLogo, TelegramLogo, Image, PlayCircle, Certificate, Medal,
} from '@phosphor-icons/react';
import {
  SiPython, SiJavascript, SiTypescript, SiC, SiCplusplus, SiOpenjdk, SiHtml5, SiCss,
  SiReact, SiNextdotjs, SiTailwindcss, SiMui, SiFramer, SiVite,
  SiFastapi, SiNodedotjs, SiExpress,
  SiPostgresql, SiMysql, SiSqlite, SiSqlalchemy, SiPrisma, SiSupabase,
  SiTensorflow, SiPytorch, SiScikitlearn, SiHuggingface, SiOllama,
  SiGit, SiGithub, SiDocker, SiLinux, SiVercel, SiGithubactions, SiNginx,
  SiFigma, SiLatex, SiArduino, SiCisco, SiNotion, SiGoogledocs, SiJsonwebtokens, SiDart, SiFlutter,
} from '@icons-pack/react-simple-icons';

const ICONS = {
  Code, Brain, Database, PaintBrush, Scan, Dna, ChatCircleText, GraphIcon, Robot, Wrench,
  Trophy, GitPullRequest, UsersThree, ScrollIcon, Star, EnvelopeSimple, WhatsappLogo,
  GithubLogo, LinkedinLogo, ArticleNyTimes, FigmaLogo, Layout, HardDrives, CloudArrowUp,
  FacebookLogo, TelegramLogo, Image, PlayCircle, Certificate, Medal,
};

export function Icon({ name, size = 20, weight = 'regular', color, style }) {
  const Cmp = ICONS[name];
  if (!Cmp) return null;
  return <Cmp size={size} weight={weight} color={color} style={style} />;
}

const TECH_LOGOS = {
  python: SiPython, javascript: SiJavascript, typescript: SiTypescript, c: SiC, cplusplus: SiCplusplus,
  openjdk: SiOpenjdk, html5: SiHtml5, css: SiCss,
  react: SiReact, nextdotjs: SiNextdotjs, tailwindcss: SiTailwindcss, mui: SiMui, framer: SiFramer, vite: SiVite,
  fastapi: SiFastapi, nodedotjs: SiNodedotjs, express: SiExpress,
  postgresql: SiPostgresql, mysql: SiMysql, sqlite: SiSqlite, sqlalchemy: SiSqlalchemy, prisma: SiPrisma, supabase: SiSupabase,
  tensorflow: SiTensorflow, pytorch: SiPytorch, scikitlearn: SiScikitlearn, huggingface: SiHuggingface, ollama: SiOllama,
  git: SiGit, github: SiGithub, docker: SiDocker, linux: SiLinux, vercel: SiVercel, githubactions: SiGithubactions, nginx: SiNginx,
  figma: SiFigma, latex: SiLatex, arduino: SiArduino, cisco: SiCisco, notion: SiNotion, googledocs: SiGoogledocs,
  jsonwebtokens: SiJsonwebtokens, dart: SiDart, flutter: SiFlutter,
};

export function TechLogo({ slug, size = 16 }) {
  const Cmp = slug ? TECH_LOGOS[slug] : null;
  if (!Cmp) return <Code size={size} weight="bold" />;
  return <Cmp size={size} />;
}
