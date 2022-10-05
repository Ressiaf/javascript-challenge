// Sección de declaraciones, NO EDITAR

// Responsables de los cuarteles
const paddockManagers = [
    { id: 1, taxNumber: '132254524', name: 'JUAN TAPIA BURGOS'},
    { id: 2, taxNumber: '143618668', name: 'EFRAIN SOTO VERA'},
    { id: 3, taxNumber: '78903228', name: 'CARLOS PEREZ GONZALEZ'},
    { id: 4, taxNumber: '176812737', name: 'ANDRES VIÑALES CIENFUEGOS'},
    { id: 5, taxNumber: '216352696', name: 'OSCAR PEREZ ZUÑIGA'},
    { id: 6, taxNumber: '78684747', name: 'JOAQUIN ANDRADE SANDOVAL' }
  ];
  
  // Tipo de cuartel, en el cual se utiliza el tipo de producto plantado
  const paddockType = [
    { id: 1, name: 'PALTOS' },
    { id: 2, name: 'AVELLANOS' },
    { id: 3, name: 'CEREZAS' },
    { id: 4, name: 'NOGALES' },
  ]
  
  // Un paddock representa un cuartel de un campo (Entiéndase también como potrero o parcela), el área está representada en m2, harvestYear es el año en el que se sembró el cuartel
  const paddocks = [
    { paddockManagerId: 6, farmId: 1, paddockTypeId: 1, harvestYear: 2019, area: 1200 },
    { paddockManagerId: 1, farmId: 3, paddockTypeId: 4, harvestYear: 2019, area: 500 },
    { paddockManagerId: 5, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 20000 },
    { paddockManagerId: 2, farmId: 2, paddockTypeId: 3, harvestYear: 2021, area: 8401},
    { paddockManagerId: 3, farmId: 1, paddockTypeId: 1, harvestYear: 2020, area: 2877 },
    { paddockManagerId: 5, farmId: 2, paddockTypeId: 2, harvestYear: 2017, area: 15902 },
    { paddockManagerId: 3, farmId: 3, paddockTypeId: 2, harvestYear: 2018, area: 1736 },
    { paddockManagerId: 2, farmId: 3, paddockTypeId: 3, harvestYear: 2020, area: 2965 },
    { paddockManagerId: 4, farmId: 3, paddockTypeId: 4, harvestYear: 2018, area: 1651 },
    { paddockManagerId: 5, farmId: 1, paddockTypeId: 1, harvestYear: 2018, area: 700 },
    { paddockManagerId: 1, farmId: 2, paddockTypeId: 1, harvestYear: 2019, area: 7956 },
    { paddockManagerId: 5, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 3745 },
    { paddockManagerId: 6, farmId: 1, paddockTypeId: 3, harvestYear: 2021, area: 11362 },
    { paddockManagerId: 2, farmId: 3, paddockTypeId: 3, harvestYear: 2021, area: 300 },
    { paddockManagerId: 3, farmId: 2, paddockTypeId: 2, harvestYear: 2020, area: 19188 },
    { paddockManagerId: 3, farmId: 1, paddockTypeId: 1, harvestYear: 2019, area: 17137 },
    { paddockManagerId: 4, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 100 },
    { paddockManagerId: 2, farmId: 1, paddockTypeId: 3, harvestYear: 2019, area: 11845 },
    { paddockManagerId: 5, farmId: 2, paddockTypeId: 1, harvestYear: 2018, area: 15969 },
    { paddockManagerId: 1, farmId: 3, paddockTypeId: 1, harvestYear: 2029, area: 10420 },
    { paddockManagerId: 5, farmId: 2, paddockTypeId: 3, harvestYear: 2010, area: 3200 },
    { paddockManagerId: 6, farmId: 1, paddockTypeId: 2, harvestYear: 2012, area: 10587 },
    { paddockManagerId: 2, farmId: 2, paddockTypeId: 2, harvestYear: 2018, area: 16750 }
  ];
  
  const farms = [
    { id: 1, name: 'AGRICOLA SANTA ANA' },
    { id: 2, name: 'VINA SANTA PAULA' },
    { id: 3, name: 'FORESTAL Y AGRICOLA LO ENCINA' }
  ];
  
  /*
    SECCIÓN PROBLEMAS
      - Las siguientes son preguntas básicas de Javascript y manejo de datos. 
      - Se debe programar un algoritmo para cada método y que este retorne lo requerido.
      - Debe usar nombres explicativos para sus variables.
      - Usar sintaxis ES6.     
      - Su prueba debe ejecutarse sin errores al correr los test.
      - Su prueba debe ejecutarse sin errores en la consola del inspector de Google Chrome
  */
  // Tip: Una hectárea equivale a 10.000m2ñlp
  
  
  // 0) Arreglo con los ids de los responsables de cada cuartel, ordenados de menor a mayor
  export const listPaddockManagerIds = () => {
    // -Mi reducer genera un nuevo array a base del listado de managers , que solo contiene sus ids 
    const reducer = paddockManagers.map((paddockManager) => paddockManager.id);
    // la propiedad sort va a ordernar de menor a mayor por su id 
    // -Igualo resultado 0 a mi sort y retorno el mismo 
    const sort = reducer.sort()
    const result0 = sort 
    return result0
  }

  // 1) Arreglo con los ruts de los responsables de los cuarteles, ordenados por nombre
  export const listPaddockManagersByName = () => {
    // - Ordeno el array de managers utilizando sort junto con locale compare
    //  tomando de referencia A sobre B y pudiendo especificar que ordene sobre name
    const sort = paddockManagers.sort((a, b) => a.name.localeCompare(b.name))
    // - Utilizo la propiedad map para generar un nuevo array que solo contenga los taxs
    const reducer = sort.map(managers => managers.taxNumber)
       // -Igualo resultado 1 a mi reducer y retorno el mismo 
    const result1 = reducer
    return result1

  };
  
  // 2 Arreglo con los nombres de cada tipo de cultivo, ordenados decrecientemente por la suma TOTAL de la cantidad de hectáreas plantadas de cada uno de ellos.
  export const sortPaddockTypeByTotalArea = () => {
    // - Genero un mapeo sobre el array que contiene los diferentes tipos de cultivos
    const reducer = paddockType.map(type => {
    //- por cada uno de los cuatro objetos del array
      //a- igualo hectareas a 0 
      let hectares = 0
      //b - realizo un Foreach del array que contiene los cultivos
      paddocks.forEach( paddock => {  
        //c - le especifico que por cada cultivo si el type de mi reducer es = al el paddock type id 
        if (type.id === paddock.paddockTypeId) {
          //d- igualo hectareas a el area de cultivo 
          hectares = hectares + paddock.area
        }
      });
      // una vez finalizado el recorrido del for each , igualo el type.area a hectareas , 
      type.area = hectares
      // retorno type , cortando la ejecucion del map 
      return type
    });
    // ordeno los resultados de mi map  y vuelvo a generar un array nuevo que contenga solo sus nombres
    const sort = reducer.sort((a, b) => b.area - a.area).map((type) => type.name)
    // igual el resultado a sort y retorno el mismo
    const result2 = sort 
    return result2
  };
  
  // 3 Arreglo con los nombres de los administradores, ordenados decrecientemente por la suma TOTAL de hectáreas que administran.
  export const sortFarmManagerByAdminArea = () => {
    // - Genero un mapeo sobre el array que contiene los distintos managers 
    const reducer = paddockManagers.map(manager => {
    //- por cada uno de los objetos del array  igualo hectareas a 0 
      let hectares = 0
      //dentro de mi reducer genero un for each que especifique que
      // por cada plantacion si el manager de mi map es igual al padock manager id
      paddocks.forEach( paddock => {
        if (manager.id  === (paddock.paddockManagerId) ) {
          // hectareas va a ser igual a 0 + el area cultivada por es cultivador segun su id 
          hectares  = hectares  + paddock.area
        }
      });
      //una vez finalizado el bucle igualo el area de cada objeto mapeado a las hectareas
      manager.area =hectares
       // retorno manager, cortando la ejecucion del map 
      return manager
    });
     // ordeno los resultados de mi map  y vuelvo a generar un array nuevo que contenga solo sus nombres
    const sort =reducer.sort((a, b) => b.area - a.area).map((manager) => manager.name)
    // igual el resultado 3 a sort y retorno el mismo
    const result3 = sort
    return result3 
  };
  
  // 4 Objeto en que las claves sean los nombres de los campos y los valores un arreglo con los ruts de sus administradores ordenados alfabéticamente por nombre.
  export const farmManagerNames = () => {
    // Inicio declarando mi respuesta como un objeto vacio para despues poder pushearlo
    const result4 = {}
    // por cada una de las 4 granjas voy a iniciar un array vacio para sus managers
    farms.forEach(farm => {
      const farmsManagers = []
      // luego dentro de for each voy a hacer un condicional que me pemita comparar el id de la granja con el id del granjero de cada parcela
      paddocks.forEach(paddock => {
        if (farm.id === paddock.farmId) {
          // una vez pasado el condicional voy a generar un 3 bucle donde voy a igual el id del array managers con el resultado de mi anterior bucle
          paddockManagers.forEach(paddockManager => {
            if (paddockManager.id === paddock.paddockManagerId) {
              //si la condicion se da por que paso ambos bucles voy a pushear ese objeto
              farmsManagers.push(paddockManager)
            }
          });
        }
      })
      console.log( farmsManagers );
      //una vez obtenido los 9 managers mi reducer va a filtrar el array a travez de index of 
      // igualando el item con su index para quitar de esta manera los managers repetidos 
      const reducer = farmsManagers.filter((item, index) => {
        return farmsManagers.indexOf(item) === index;
      })
      console.log( reducer);
      // el proximo paso es ordenar los managers ya filtrados y ordenarlos por su nombre a travez de logcal compare
      const sort = reducer.sort((a, b) => a.name.localeCompare(b.name)).map((manager) => manager.taxNumber)
      // por ultimo generamos un mapero para generar un nuevo array  que solo contenga los tax Numbers
      result4[farm.name] = sort
      // solo resta concatenar el objeto con el nombre de la granja y los managers previamente filtrados 
      // object[property] va a ser igual a sort
      // console.log(result4);
    });
    return result4
  }
  
  // 5 Arreglo ordenado decrecientemente con los m2 totales de cada campo que tengan más de 2 hectáreas en Paltos
  export const biggestAvocadoFarms = () => {
    //en este ejercicio son muchos filtros asi que decidi dejar de lado el for each 
    // voy  a generar un mapeo de farm  , y por cada platancacion vos a filtrar 
    const reducer = farms.map(farm => 
      paddocks
        // su type id a = a  1  para asegurar que sean paltos
        .filter(paddock=>paddock.paddockTypeId === 1)
        // luego el farm id  de la plantacion con el id del parametro de las granjas del que estoy mapeando
        .filter(paddock=> paddock.farmId===farm.id)
        // una vez pasado esos filtros voy a generar un nuevo array don de hectares sea igual a su area/10000 (m2)
        .map(hectares => hectares.area/10000 )
        //  por ultimo voy a usar la funcion reduce para juntar todos los elementos en un valor unico
        //  PREV : { 1 = [0.12, 0.2877, 0.07, 1.7137] , 2= [0.7956, 1.5969] 3=1.042 }
        .reduce((previousValue ,currentValue)=>previousValue+currentValue , 0 )
        // POST: [1 = 2.1914,   2=  2.3925, 3= 1.042]
    )
    console.log(reducer);
      // ahora nos resta  filtrar quienes tengan mas de dos hectares
    const sort = reducer.filter(paddock=>paddock>2).sort((a,b)=>b-a)
    // acomodorarlos de manera decreciente y por ultimo generar un mapeo
    //para poder retornar un array que contenga los m2 pero sin , para lo que utilice math ceil
      // console.log(sort);
    const result5 = sort.map(m2=>Math.ceil(m2*10000))
    // console.log(result5);
    return result5
    }
  // 6 Arreglo con nombres de los administradores de la FORESTAL Y AGRÍCOLA LO ENCINA, ordenados por nombre, que trabajen más de 1000 m2 de Cerezas
  export const biggestCherriesManagers = () => {
  }
  
  // 7 Objeto en el cual las claves sean el nombre del administrador y el valor un arreglo con los nombres de los campos que administra, ordenados alfabéticamente
  export const farmManagerPaddocks = () => {
  }
  
  // 8 Objeto en que las claves sean el tipo de cultivo concatenado con su año de plantación (la concatenación tiene un separador de guión ‘-’, por ejemplo AVELLANOS-2020) y el valor otro objeto en el cual la clave sea el id del administrador y el valor el nombre del administrador
  export const paddocksManagers = () => {
    // inicio la respuesta como un objeto
    let result8= {} 
    paddocks.forEach(paddock => {
      //  voy a filtrar a travez de find los tipos de cultivo por su id  con el type id de las plantaciones
      const paddockTypes = paddockType.find(type => type.id === paddock.paddockTypeId);
      // console.log(paddockTypes);
      // voy a realizar la misma accion con los managers 
      const paddockManager= paddockManagers.find(manager => manager .id === paddock.paddockManagerId);
      // console.log(paddockManagerObj )
      // una vez realizados los filtros voy a generar un modelo de key con el nombre y el año de cultivo
      const key = `${paddockTypes.name} - ${paddock.harvestYear}`
      // voy a concatenar el objeto  , con mi key , el manager id y su nombre
      result8[key] = { [paddockManager.id]: paddockManager.name }
    //object[key] = object [property] name
    });
    return result8
    //f no me trae a todos
  }
  
  // 9 Agregar nuevo administrador con datos ficticios a "paddockManagers" y agregar un nuevo cuartel de tipo NOGALES con 900mts2, año 2017 de AGRICOLA SANTA ANA, administrado por este nuevo administrador
  // Luego devolver el lugar que ocupa este nuevo administrador en el ranking de la pregunta 3.
  // No modificar arreglos originales para no alterar las respuestas anteriores al correr la solución
  export const newManagerRanking = () => {
      // const newAdmin = { id: 7, taxNumber: '78684749', name: 'JUAN PEDRO DOE' }
      // const newPaddock = { paddockManagerId: 7, farmId: 1, paddockTypeId: 4, harvestYear: 2017, area: 900 }
    
      // paddockManagers.push(newAdmin)
      // paddocks.push(newPaddock)

      //   const rankingList = sortFarmManagerByAdminArea()

      //   const positionRanking = rankingList.indexOf(newAdmin.name);
      //     console.log(positionRanking);
      //   return positionRanking
  }
  
  // No modificar, eliminar o alterar cualquier línea de código o comentario de acá para abajo
  
  console.log("Pregunta 0");
  console.log(listPaddockManagerIds());
  console.log("Pregunta 1");
  console.log(listPaddockManagersByName());
  console.log("Pregunta 2");
  console.log(sortPaddockTypeByTotalArea());
  console.log("Pregunta 3");
  console.log(sortFarmManagerByAdminArea());
  console.log("Pregunta 4");
  console.log(farmManagerNames());
  console.log("Pregunta 5");
  console.log(biggestAvocadoFarms());
  console.log("Pregunta 6");
  console.log(biggestCherriesManagers());
  console.log("Pregunta 7");
  console.log(farmManagerPaddocks());
  console.log("Pregunta 8");
  console.log(paddocksManagers());
  console.log("Pregunta 9");
  console.log(newManagerRanking());
  