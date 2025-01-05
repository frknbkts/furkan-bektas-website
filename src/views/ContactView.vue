<template>
  <div class="contact">
    <h1>İletişim</h1>
    <div class="contact-container">
      <div class="contact-info">
        <h2>İletişim Bilgileri</h2>
        <div class="info-item">
          <i class="fas fa-envelope"></i>
          <p>{{ resume.personalInfo.email }}</p>
        </div>
        <div class="info-item">
          <i class="fas fa-map-marker-alt"></i>
          <p>{{ resume.personalInfo.location }}</p>
        </div>
        <div class="social-links">
          <a :href="'https://' + resume.personalInfo.github" target="_blank" class="social-link">
            <i class="fab fa-github"></i>
          </a>
          <a :href="'https://' + resume.personalInfo.linkedin" target="_blank" class="social-link">
            <i class="fab fa-linkedin"></i>
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
.contact {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: var(--text-color);
  margin-bottom: 2rem;
}

.contact-container {
  background: var(--surface-color);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--border-color);
}

.contact-info {
  background: var(--primary-color);
  color: var(--text-color);
  padding: 2rem;
  text-align: center;
}

.contact-info h2 {
  margin-bottom: 2rem;
  color: var(--text-color);
}

.info-item {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.info-item i {
  margin-right: 1rem;
  font-size: 1.2rem;
  color: var(--secondary-color);
}

.social-links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
}

.social-link {
  color: var(--text-color);
  font-size: 1.8rem;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: var(--secondary-color);
}
</style> 