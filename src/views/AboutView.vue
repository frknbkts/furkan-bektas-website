<template>
  <div class="about-container">
    <div class="about-content">
      <h1>Hakkımda</h1>
      <div class="profile-section">
        <p>{{ resumeData.profile.description }}</p>
      </div>

      <div class="skills-section">
        <h2>Yetenekler</h2>
        
        <div class="skill-category">
          <h3>Programlama Dilleri</h3>
          <div class="skill-tags">
            <span v-for="(skill, index) in resumeData.skills['Programlama Dilleri']" 
                  :key="index" 
                  class="skill-tag">
              {{ skill }}
            </span>
          </div>
        </div>

        <div class="skill-category">
          <h3>Kütüphaneler ve Frameworks</h3>
          <div class="skill-tags">
            <span v-for="(skill, index) in resumeData.skills['Kütüphaneler ve Frameworks']" 
                  :key="index" 
                  class="skill-tag">
              {{ skill }}
            </span>
          </div>
        </div>

        <div class="skill-category">
          <h3>Araçlar ve Teknolojiler</h3>
          <div class="skill-tags">
            <span v-for="(skill, index) in resumeData.skills['Araçlar ve Teknolojiler']" 
                  :key="index" 
                  class="skill-tag">
              {{ skill }}
            </span>
          </div>
        </div>

        <div class="skill-category">
          <h3>Diller</h3>
          <div class="skill-tags">
            <span v-for="(lang, index) in resumeData.skills.languages" 
                  :key="index" 
                  class="skill-tag">
              {{ lang.name }} - {{ lang.level }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import resumeData from '@/data/resume.json'

export default {
  name: 'AboutView',
  data() {
    return {
      resumeData
    }
  }
}
</script>

<style scoped>
.about-container {
  width: 100%;
  min-height: 100vh;
  background-color: #121212;
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.about-content {
  width: 100%;
  max-width: 1000px;
}

h1 {
  color: #ffffff;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
}

h2 {
  color: #ffffff;
  margin: 2rem 0 1rem;
  font-size: 1.5rem;
}

h3 {
  color: #e2e8f0;
  margin: 1.5rem 0 1rem;
  font-size: 1.25rem;
}

.profile-section {
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  border: 1px solid #333;
}

.profile-section p {
  color: #a0aec0;
  line-height: 1.6;
  margin: 0;
}

.skills-section {
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #333;
}

.skill-category {
  margin-bottom: 2rem;
}

.skill-category:last-child {
  margin-bottom: 0;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-tag {
  background: #2d3748;
  color: #e2e8f0;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  border: 1px solid #4a5568;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: #4a5568;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .about-container {
    padding: 1rem;
  }

  .profile-section,
  .skills-section {
    padding: 1.5rem;
  }
}
</style>
