import pyodbc

class Database:
    def __init__(self, server='10.40.42.13', port='80', database='nombre_de_tu_base', username='tu_usuario', password='tu_contraseña'):
        try:
            self.connection = pyodbc.connect(
                f'DRIVER={{ODBC Driver 17 for SQL Server}};'
                f'SERVER={server},{port};'
                f'DATABASE={database};'
                f'UID={username};'
                f'PWD={password}'
            )
            self.cursor = self.connection.cursor()
        except pyodbc.Error as e:
            print("Error en la conexión: ", e)
    
    # Método para ejecutar consultas
    def query(self, sql, params=()):
        try:
            self.cursor.execute(sql, params)
            return self.cursor.fetchall()
        except pyodbc.Error as e:
            print("Error en la consulta: ", e)
            return None
    
    # Método para cerrar la conexión
    def close_connection(self):
        self.cursor.close()
        self.connection.close()

# Ejemplo de uso:
db = Database()
resultado = db.query("SELECT * FROM tabla")
for fila in resultado:
    print(fila)
db.close_connection()
