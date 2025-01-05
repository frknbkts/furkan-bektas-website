<template>
  <div class="home">
    <div class="hero">
      <div class="hero-content">
        <h1>Furkan Bektaş</h1>
        <p class="subtitle">Yazılım Mühendisi</p>
        <p class="description">
          Modern web teknolojileri ile yaratıcı çözümler geliştiriyorum.
        </p>
        <div class="cta-buttons">
          <router-link to="/portfolio" class="btn primary">Portfolyomu Gör</router-link>
          <router-link to="/experience" class="btn secondary">Deneyimlerim</router-link>
          <router-link to="/contact" class="btn primary">İletişime Geç</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero {
  text-align: center;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.hero-content {
  animation: fadeIn 1s ease-in;
}

h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.subtitle {
  font-size: 1.5rem;
  color: var(--secondary-color);
  margin-bottom: 1.5rem;
}

.description {
  font-size: 1.2rem;
  color: var(--text-color);
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn {
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.btn:hover {
  transform: translateY(-2px);
}

.primary {
  background-color: var(--primary-color);
  color: var(--text-color);
}

.primary:hover {
  background-color: var(--secondary-color);
  border-color: var(--secondary-color);
}

.secondary {
  background-color: var(--secondary-color);
  color: var(--text-color);
  border-color: var(--secondary-color);
}

.secondary:hover {
  background-color: var(--primary-color);
  border-color: var(--border-color);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  .description {
    font-size: 1rem;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
}
</style>
