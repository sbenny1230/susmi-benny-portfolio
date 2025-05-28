import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("experience", "routes/experience.tsx"),
    route("projects", "routes/projects.tsx"),
    route("skills", "routes/skills-and-certifications.tsx")
] satisfies RouteConfig;
