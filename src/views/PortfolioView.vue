<template>
  <div class="portfolio">
    <h1>Portfolyo</h1>
    <div class="portfolio-grid">
      <div v-for="(project, index) in resume.projects" :key="index" class="portfolio-item">
        <div class="portfolio-content">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <div class="portfolio-tags">
            <span v-for="(tech, techIndex) in project.technologies" :key="techIndex">
              {{ tech }}
            </span>
          </div>
          <a :href="project.github" target="_blank" class="portfolio-link">
            <i class="fab fa-github"></i> GitHub'da Görüntüle
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import resume from '@/data/resume.json'
</script>

<style scoped>
.portfolio {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: var(--text-color);
  margin-bottom: 2rem;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.portfolio-item {
  background: var(--surface-color);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  border: 1px solid var(--border-color);
}

.portfolio-item:hover {
  transform: translateY(-5px);
}

.portfolio-content {
  padding: 1.5rem;
}

.portfolio-content h3 {
  color: var(--text-color);
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.portfolio-content p {
  color: var(--text-color-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.portfolio-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.portfolio-tags span {
  background: var(--primary-color);
  color: var(--text-color);
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  border: 1px solid var(--border-color);
}

.portfolio-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.2rem;
  background: var(--primary-color);
  color: var(--text-color);
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.portfolio-link:hover {
  background: var(--secondary-color);
  border-color: var(--secondary-color);
}

.portfolio-link i {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
}
</style> 