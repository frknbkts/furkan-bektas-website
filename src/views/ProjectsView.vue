<template>
  <div class="projects">
    <h1>Projeler</h1>
    <div class="projects-grid">
      <div v-for="(project, index) in resume.projects" :key="index" class="project-card">
        <div class="project-info">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <div class="project-tech">
            <span v-for="(tech, techIndex) in project.technologies" :key="techIndex">
              {{ tech }}
            </span>
          </div>
          <div class="project-links">
            <a :href="project.github" target="_blank" class="btn" v-if="project.github">
              <i class="fab fa-github"></i> GitHub
            </a>
            <a :href="project.demo" target="_blank" class="btn" v-if="project.demo">
              <i class="fas fa-external-link-alt"></i> Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import resume from '@/data/resume.json'
</script>

<style scoped>
.projects {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: var(--text-color);
  margin-bottom: 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--surface-color);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  border: 1px solid var(--border-color);
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-info {
  padding: 1.5rem;
}

.project-info h3 {
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

.project-info p {
  color: var(--text-color-secondary);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.project-tech span {
  background: var(--primary-color);
  color: var(--text-color);
  padding: 0.2rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  border: 1px solid var(--border-color);
}

.project-links {
  display: flex;
  gap: 1rem;
}

.btn {
  flex: 1;
  text-align: center;
  padding: 0.5rem;
  background: var(--primary-color);
  color: var(--text-color);
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.btn:hover {
  background: var(--secondary-color);
  border-color: var(--secondary-color);
}

.btn i {
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style> 