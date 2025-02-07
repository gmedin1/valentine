const btn1 = document.getElementById('btn1')
btn1.addEventListener('click', function (e) {
  const p1 = document.getElementById('q1')
  p1.innerHTML = `
    <span style="color: #3f3fcc; font-size: 1.5rem; display: block; margin-bottom: .25rem;">En ingles suena más cool, no?</span>
    Will you be my valentine?
  `
  window.scrollTo(0, document.body.scrollHeight)
  e.target.remove()
})

const btn2 = document.getElementById('btn2')
btn2.addEventListener('click', function (e) {
  const p1 = document.getElementById('q1')
  p1.innerHTML = `
    <span style="color: #3f3fcc; font-size: 1.5rem; display: block; margin-bottom: .25rem;">Ahora si, jujujuju</span>
    Will you be my valentine?
  `
  const p2 = document.getElementById('q2')
  p2.innerHTML = `<span style="text-align: center; color: #3f3fcc; font-size: 1.75rem; display: block; margin-block: 1rem;">Oyeeee! Creiste que habría más opciones? Pues no!</span>`
  window.scrollTo(0, document.body.scrollHeight)
  e.target.remove()
})

const btn3 = document.getElementById('btn3')
btn3.addEventListener('click', function (e) {
  const p2 = document.getElementById('q2')
  p2.innerHTML = ''
  e.target.remove()
  const v1 = document.getElementById('v1')
  v1.innerHTML = `
    <div class="bg-video">
        <video
          src="./final.mp4"
          constrols="controls"
          autoplay="autoplay"
          playsinline="playsinline"
        ></video>
    </div>
    <p style="font-size: 2rem;">Te amooooo!</p>
  `
  window.scrollTo(0, document.body.scrollHeight)
})
