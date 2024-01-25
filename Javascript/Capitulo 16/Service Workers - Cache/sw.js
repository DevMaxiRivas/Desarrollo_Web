let version = "version2";

self.addEventListener("install", e=>{
    console.log("instalando service worker");
    caches.open(version).then(cache=>{
        cache.add("index.html").then(res=>{
            console.log("informacion en cache");
        }).catch(e=>{
            console.log(e);
        })
    })

});
// en caso de que se active estamos eliminando la version mas antigua del cache
self.addEventListener("activate",()=>{
    caches.keys().then(key=>{
        return Promise.all(
            key.map(cache=>{
                if(cache !== version){
                    console.log("cache antiguo eliminado");
                    return caches.delete(cache);
                }
            })
        )
    })
});
// con esto deberia poder cargarse la pagina sin internet
self.addEventListener("fetch",e=>{
    e.respondWith(async function(){
        const respuestaEnCache = await caches.match(e.request);
        if(respuestaEnCache) return respuestaEnCache;
        return e.request;
    });
})
