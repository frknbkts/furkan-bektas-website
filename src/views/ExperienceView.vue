<template>
  <div class="experience">
    <h1>İş Deneyimi</h1>
    <div class="timeline">
      <div v-for="(job, index) in resume.experience" :key="index" class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-date">{{ job.period }}</div>
          <h3>{{ job.title }}</h3>
          <h4>{{ job.company }} - {{ job.location }}</h4>
          <p>{{ job.description }}</p>
          <div class="skills">
            <span v-for="(skill, skillIndex) in job.skills" :key="skillIndex">
              {{ skill }}
            </span>
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
.experience {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: var(--text-color);
  margin-bottom: 3rem;
}

.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 2px;
  height: 100%;
  background: var(--secondary-color);
}

.timeline-item {
  position: relative;
  padding-left: 3rem;
  margin-bottom: 3rem;
}

.timeline-dot {
  position: absolute;
  left: -6px;
  top: 0;
  width: 14px;
  height: 14px;
  background: var(--secondary-color);
  border-radius: 50%;
}

.timeline-content {
  background: var(--surface-color);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--border-color);
}

.timeline-date {
  color: var(--secondary-color);
  font-weight: bold;
  margin-bottom: 0.5rem;
}

h3 {
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

h4 {
  color: var(--text-color-secondary);
  font-weight: normal;
  margin-bottom: 1rem;
}

p {
  color: var(--text-color);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skills span {
  background: var(--primary-color);
  color: var(--text-color);
  padding: 0.2rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  border: 1px solid var(--border-color);
}

@media (max-width: 768px) {
  .timeline::before {
    left: 15px;
  }
  
  .timeline-item {
    padding-left: 2.5rem;
  }
  
  .timeline-dot {
    left: 9px;
  }
}
</style> 