const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

// Corregido: Seleccionar por clase en lugar de id
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

// Corregido: Agregar async a la función para usar await
async function displayUser(username) {
  // Corregido: Cambiado a template literals para interpolación
  $n.textContent = 'Cargando...';
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();
    console.log(data);
    // Corregido: Cambiado a template literals para interpolación
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  // Corregido: Seleccionar por clase en lugar de id
  $n.textContent = `Algo salió mal: ${err}`;
}

// Corregido: Agregar catch para manejar errores
displayUser('stolinski').catch(handleError);
