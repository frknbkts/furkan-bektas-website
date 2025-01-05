<template>
  <div class="about">
    <h1>Hakkımda</h1>
    <div class="about-content">
      <div class="bio">
        <p>
          Lise öğrenimimi Çarşamba Fen Lisesi'nde tamamladıktan sonra, Kocaeli Üniversitesi Bilgisayar Mühendisliği bölümünü kazandım. 
          Üniversite hayatım boyunca yazılım dünyasının farklı alanlarını keşfetmeye odaklandım ve mobil, web, masaüstü uygulamaları ile 
          yapay zeka gibi çeşitli kategorilerde projeler geliştirdim.
        </p>
        <p>
          Bu süreçte, uzun ve kısa dönem stajlar yaparak grup halinde proje geliştirme, proje yönetimi ve ekip çalışması konularında 
          önemli deneyimler kazandım. Stajlarım, hem teknik bilgi birikimimi artırmamı hem de profesyonel iş süreçlerine adapte olmamı sağladı.
        </p>
        <p>
          2024 yılının Temmuz ayında üniversitemden mezun oldum ve şu anda bir şirkette iki farklı ürünün backend geliştirme süreçlerinde 
          aktif rol alıyorum. Bu projelerden birinde Python Flask Framework, diğerinde ise .NET Core kullanarak backend geliştirmeleri yapıyor, 
          aynı zamanda bu teknolojilerde kendimi geliştirmeye ve öğrenmeye devam ediyorum.
        </p>
      </div>

      <div class="skills-section">
        <h2>Yetenekler</h2>
        <div class="skills-container">
          <div class="skill-category">
            <h3>Backend</h3>
            <div class="skill-tags">
              <span v-for="(skill, index) in resume.skills.backend" :key="index">{{ skill }}</span>
            </div>
          </div>

          <div class="skill-category">
            <h3>Veritabanı</h3>
            <div class="skill-tags">
              <span v-for="(skill, index) in resume.skills.database" :key="index">{{ skill }}</span>
            </div>
          </div>

          <div class="skill-category">
            <h3>Frontend</h3>
            <div class="skill-tags">
              <span v-for="(skill, index) in resume.skills.frontend" :key="index">{{ skill }}</span>
            </div>
          </div>

          <div class="skill-category">
            <h3>Diller</h3>
            <div class="skill-tags">
              <span v-for="(lang, index) in resume.skills.languages" :key="index">
                {{ lang.name }} ({{ lang.level }})
              </span>
            </div>
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
.about {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  color: var(--text-color);
  text-align: center;
  margin-bottom: 2rem;
}

.about-content {
  background: var(--surface-color);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--border-color);
}

.bio p {
  color: var(--text-color);
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.skills-section {
  margin-top: 3rem;
}

h2 {
  color: var(--text-color);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-category h3 {
  color: var(--secondary-color);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tags span {
  background: var(--primary-color);
  color: var(--text-color);
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  border: 1px solid var(--border-color);
}

@media (max-width: 768px) {
  .about {
    padding: 1rem;
  }

  .about-content {
    padding: 1.5rem;
  }

  .bio p {
    font-size: 1rem;
  }

  .skills-container {
    grid-template-columns: 1fr;
  }
}
</style>
