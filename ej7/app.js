const JaponCitys = [ // array de las ciudades
  {
    Nombre: "Tokio",
    Poblacion: "13.9 millones",
    Area: "2,194 km cuadrados",
    Imagen_Url: "https://content-viajes.nationalgeographic.com.es/medio/2024/09/03/tokio_133ce43a_1284581217_240903122054_1280x854.jpg",
    Altitud: "0 m",
    Clima: "Subtropical"
  },
  {
    Nombre: "Osaka",
    Poblacion: "2.7 millones",
    Area: "223 km cuadrados",
    Imagen_Url: "https://travelodgehotels.asia/wp-content/uploads/2025/05/Crowded-Dotonbori-Bridge-Osaka-at-Night-Japan_iStock-1166150714-scaled.webp",
    Altitud: "50 m",
    Clima: "Subtropical"
  },
  {
    Nombre: "Kioto",
    Poblacion: "1.5 millones",
    Area: "827 km cuadrados",
    Imagen_Url: "https://redhistoria.com/wp-content/uploads/2020/03/Kinkaku-ji-El-Templo-del-Pabello%CC%81n-Dorado.jpg",
    Altitud: "200 m",
    Clima: "Subtropical"
  },
  {
    Nombre: "Yokohama",
    Poblacion: "3.8 millones",
    Area: "435 km cuadrados",
    Imagen_Url: "https://pohcdn.com/sites/default/files/styles/big_gallery_image/public/text_gallery/Yokohama-4.jpg",
    Altitud: "200 m",
    Clima: "Subtropical"
  },
  {
    Nombre: "Sapporo",
    Poblacion: "1.9 millones",
    Area: "1,121 km cuadrados",
    Imagen_Url: "https://images.trvl-media.com/place/6104012/f8fa157e-15a4-4533-84ef-b21cb5b53110.jpg",
    Altitud: "300 m",
    Clima: "Templado"
  },
  {
    Nombre: "Fukuoka",
    Poblacion: "1.6 millones",
    Area: "343 km cuadrados",
    Imagen_Url: "https://cdn.cheapoguides.com/wp-content/uploads/sites/3/2018/07/fukuoka-skyline-iStock-845231208-1024x600.jpg",
    Altitud: "200 m",
    Clima: "Subtropical"
  }
];

function mostrarCiudades() {                                                              // muestra las ciudades en el html
  const container = document.getElementById("citiesContainer");
  
  JaponCitys.forEach(ciudad => {                                                          // recorre cada ciudad en el array de japonCitys
    const card = document.createElement("div");                                           // crea un nuevo div para cada ciudad
    card.className = "col-md-4 mb-4"; 
    card.innerHTML =`                                                                     <!-- tarjeta para cada ciudad, esto permite poder agregar mas ciudades solamente poniendolas en el array -->
      <div class="card h-100">
        <img src="${ciudad.Imagen_Url}" class="card-img-top" alt="${ciudad.Nombre}">
        <div class="card-body">
          <h5 class="card-title">${ciudad.Nombre}</h5>
          <p class="card-text">
            <strong>Población:</strong> ${ciudad.Poblacion}<br>
            <strong>Área:</strong> ${ciudad.Area}<br>
            <strong>Altitud:</strong> ${ciudad.Altitud}<br>
            <strong>Clima:</strong> ${ciudad.Clima}
          </p>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", mostrarCiudades);
