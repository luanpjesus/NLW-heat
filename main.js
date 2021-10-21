function showMeSomething(texto) {
  //variável texto
  ///A variavel const github que recebe o valor "luanpjesus" é atribuida a outra váriavel na função SHOWMESOMETHING, (TEXTO), E QUANDO A FUNÇÃO É CHAMADA LA EMBAIXO, COM O links.github, a informação primária que é "luanpjesus", passa por todas essas "caixas até chegar à função alert"
  alert(texto)
}
const linksSocialMedia = {
  github: 'luanpjesus',
  youtube: 'luanpatrickcap',
  facebook: 'luan.mfdp',
  instagram: 'luanpjesus ',
  twitter: '_luanjjesus '
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()
