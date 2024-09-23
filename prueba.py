baterias = {
    "Baterias B-Power": "3874224886",
    "Baterías Zarate venta de baterías nacionales e importadas en Salta": "3874224886",
    "Baterias Tempobat": "03874224405",
    "Bat-Mitre": "03875134099",
    "Baterias - El señor de las baterias SALTA": "03874661313",
    "Baterias Fema": "03876057829",
    "Baterías Aquim": "03874219440",
    "Baterias Salta": "03875368950",
    "Baterias Lead": "03876201730",
    "For-Bat. La casa de las baterías y pilas": "03874317021",
    "Moises Baterías": "03878516362",
    "WILLIAM": "03874239287",
    "Baterias San Cayetano": "03876709790",
    "Baterias Moura Salta (Zona Sur)": "03875691762",
    "Baterias ECOBAT Zona Sur": "03874816405"
    }

for clave, valor in baterias.items():
    if valor.startswith("0"):
        baterias[clave] = valor[1:]

with open("archivo.txt", "w") as archivo:
    for clave, valor in baterias.items():
        print(clave + ": " + valor)
        archivo.write("https://api.whatsapp.com/send?&phone=54"+ valor +"&text=Buenos%20Dias%20queria%20consultar%20a%20que%20precio%20se%20encuentran%20las%20baterias%20de%2012x75amp%20quisiera%20saber%20marca%20y%20precio%20es%20para%20un%20Peugeot%20504%20NaftaGNC%20Motor%202.0G\n")

