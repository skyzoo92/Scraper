document.getElementById('search').addEventListener('input', function () {
  const searchText = this.value.toLowerCase()
  document.querySelectorAll('.doc').forEach(section => {
    const visible = section.textContent.toLowerCase().includes(searchText)
    section.style.display = visible ? 'block' : 'none'
  })
})
