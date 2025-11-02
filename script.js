document.querySelectorAll('.play-now').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const overlay = document.getElementById('overlay');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const loadingBox = document.getElementById('loadingBox');
    const verifyBox = document.getElementById('verifyBox');

    overlay.style.display = 'flex';
    loadingBox.style.display = 'block';
    verifyBox.classList.add('hidden');

    let progress = 0;
    const interval = setInterval(() => {
      progress += 2;
      progressBar.style.width = progress + '%';
      progressText.textContent = progress + '%';

      if (progress >= 100) {
        clearInterval(interval);
        loadingBox.style.display = 'none';
        verifyBox.classList.remove('hidden');
      }
    }, 100);
  });
});

// Close button functionality
document.getElementById('closeBtn').addEventListener('click', () => {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
});
