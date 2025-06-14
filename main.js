document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js-copy').forEach(el => {
    el.addEventListener('click', async e => {
      e.preventDefault();
      const originalText = el.querySelector('.copy-text').innerText;
      try {
        await navigator.clipboard.writeText(el.dataset.copy.trim());
        el.querySelector('.copy-text').innerText = 'Скопировано!';
        setTimeout(() => {
          el.querySelector('.copy-text').innerText = originalText;
        }, 1500);
      } catch (err) {
        console.error('Ошибка копирования:', err);
      }
    });
  });
});
