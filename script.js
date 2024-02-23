//your JS code here. If required.
// Initially expand the first panel
document.getElementById('panel-1').classList.add('active');

function togglePanel(panelId) {
  const panels = document.querySelectorAll('.panel');
  panels.forEach(panel => {
    if (panel.id === panelId) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  });
}
